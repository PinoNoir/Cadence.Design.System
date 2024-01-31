import { useTableContext } from '../components/data-table/TableContext';

export const useCustomTableApi = <T extends { id?: string }>() => {
  const { data, setData, selectedRow, setSelectedRow, handleSelectRow } = useTableContext<T>();

  // Function for single row selection
  const handleSelectedRow = <T>(rowId: string, rowData: T) => {
    setSelectedRow((prevSelectedRow) => (prevSelectedRow === rowId ? null : rowId));

    // eslint-disable-next-line no-console
    console.log(`row ${rowId} selected`, rowData);
  };

  const findRowById = (rowId: string) => {
    setSelectedRow(rowId);
  };

  const addRow = (row: T) => {
    setData((prevData) => [...prevData, row]);
  };

  const removeRow = (rowId: string) => {
    setData((prevData) => prevData.filter((row) => row.id !== rowId));
  };

  const selectRow = (rowId: string) => {
    setSelectedRow(rowId);
  };

  return { data, selectedRow, addRow, removeRow, selectRow, findRowById, handleSelectRow, handleSelectedRow };
};
