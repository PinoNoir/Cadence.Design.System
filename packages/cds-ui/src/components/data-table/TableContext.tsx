import {
  Context,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { DataTableSortState } from '../../types/data-table-state';

type TableState = {
  totalRows: number;
  sortKey: string | null;
  sortDirection: DataTableSortState;
  filter: string;
  selectedRows: Set<number>;
};

type TableContextType<T> = {
  state: TableState;
  data: T[];
  setData: Dispatch<SetStateAction<T[]>>;
  selectedRowData: T | null; // Assuming you want to store a single row's data
  sortedData: T[];
  isSorted: boolean;
  totalRows: number;
  sortKey: string | null;
  filter: string;
  currentPage: number;
  selectedRow: string | null;
  setSelectedRow: Dispatch<SetStateAction<string | null>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  debouncedTerm: string;
  searchResults: T[];
  setTotalRows: (rowCount: number) => void;
  setSortKey: (key: string) => void;
  setFilter: (filter: string) => void;
  toggleRowSelection: (rowIndex: number) => void;
  selectAllRows: () => void;
  clearSelection: () => void;
  handleSelectRow: (rowId: string, data: T) => void;
  sortData: (columnKey: keyof T) => void;
  filterData: (event: { target: HTMLInputElement; type: 'change' }) => void;
};

export const TableContext = createContext<TableContextType<any> | undefined>(undefined);

type TableContextProviderProps = {
  children: ReactNode;
};

export const TableContextProvider: React.FC<TableContextProviderProps> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [sortedData, setSortedData] = useState<any>([]);
  const [filter, setFilter] = useState<string | number>('');
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  const [state, setState] = useState<TableState>({
    sortKey: null,
    sortDirection: 'ascending',
    filter: '',
    selectedRows: new Set(),
    totalRows: 0,
  });

  const setSortKey = (key: string) => {
    setState((prevState) => ({
      ...prevState,
      sortKey: key,
      sortDirection: prevState.sortKey === key && prevState.sortDirection === 'ascending' ? 'descending' : 'ascending',
    }));
  };

  useEffect(() => {
    if (state.sortKey && data.length > 0) {
      const key = state.sortKey;

      const sorted = [...data].sort((a, b) => {
        // Check if the property exists and is not null
        if (a[key] && b[key]) {
          if (typeof a[key] === 'number' && typeof b[key] === 'number') {
            // Numeric sort
            return a[key] - b[key];
          } else if (typeof a[key] === 'string' && typeof b[key] === 'string') {
            // String sort (localeCompare for different languages)
            return a[key].localeCompare(b[key]);
          } else {
            // Fallback for other types
            return a[key] > b[key] ? 1 : -1;
          }
        }
        return 0;
      });

      // Handle sort order
      if (state.sortDirection === 'descending') {
        sorted.reverse();
      }

      setSortedData(sorted);
    } else {
      // If no sortKey, use the original data
      setSortedData(data);
    }
  }, [state.sortKey, state.sortDirection, data]);

  // Debounce search term changes
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  // Memoized search results
  const searchResults = useMemo(() => {
    if (!debouncedTerm) return data;

    return data.filter((item) =>
      Object.entries(item).some(([key, value]) => {
        if (key === 'action') return false;
        return value.toString().toLowerCase().includes(debouncedTerm.toLowerCase());
      }),
    );
  }, [data, debouncedTerm]);

  // Function for single row selection
  const handleSelectRow = <T,>(rowId: string, rowData: T) => {
    setSelectedRow((prevSelectedRow) => (prevSelectedRow === rowId ? null : rowId));

    // eslint-disable-next-line no-console
    console.log(`row ${rowId} selected`, rowData);
  };

  // Function to sort data
  const filterData = (event: { target: HTMLInputElement; type: 'change' }) => {
    const value = event.target.value.toLowerCase();
    setFilter(value);
    const filteredData = data.filter((data) =>
      Object.values(data).some((val) => {
        if (typeof val === 'string' || typeof val === 'number') {
          return val.toString().toLowerCase().includes(value);
        }
        return false;
      }),
    );
    setSortedData(filteredData);
  };

  const contextValue = {
    state,
    data,
    setData,
    sortedData,
    setSortKey,
    selectedRow,
    setSelectedRow,
    handleSelectRow,
    searchTerm,
    setSearchTerm,
    debouncedTerm,
    searchResults,
    filter,
    setFilter,
    filterData,
  };

  return <TableContext.Provider value={contextValue as TableContextType<unknown>}>{children}</TableContext.Provider>;
};

// Custom hook to check if the component is wrapped in a TableProvider, and throw an error if it isn't
export const useTableContext = <T,>() => {
  const context = useContext(TableContext as Context<TableContextType<T> | undefined>);
  if (!context) {
    throw new Error('useTableContext must be used within a TableProvider');
  }
  return context;
};
