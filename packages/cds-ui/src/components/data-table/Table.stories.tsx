import type { Meta } from '@storybook/react';
import React, { useEffect, useMemo, useState } from 'react';
import Box from '../box/Box';
import Button from '../button/Button';
import Search from '../search-input/Search';
import Table from './Table';
import TableContainer from './TableContainer';
import { TableContextProvider, useTableContext } from './TableContext';
import { DataTableSortState } from '../../types/data-table-state';

const meta: Meta<typeof Table> = {
  title: 'Components/Data Table',
  component: Table,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TableContextProvider>
        <Story />
      </TableContextProvider>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  argTypes: {
    'automation-id': {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    columns: {
      control: {
        type: 'object',
      },
    },
    data: {
      control: {
        type: 'object',
      },
    },
    onSort: {
      control: {
        type: 'function',
      },
    },
    sortDirection: {
      options: ['none', 'ascending', 'descending'],
      control: {
        type: 'select',
      },
    },
    sortKey: {
      control: {
        type: 'function',
      },
    },
  },
};
export default meta;

export const SingleRowSelect = () => {
  const data = [
    {
      id: '0',
      caseNumber: '10BBB9',
      debtor: 'Bill Watts',
      jointDebtor: '-',
      chapter: 'Chapter 7, Individual (Single)',
      caseFiledDate: '08/28/2023',
    },
    {
      id: '1',
      caseNumber: '10CCC9',
      debtor: 'John Snow',
      jointDebtor: 'Ariana Grande',
      chapter: 'Chapter 7, Joint',
      caseFiledDate: '08/29/2023',
    },
    {
      id: '2',
      caseNumber: '10AAA7',
      debtor: 'Jody Gutillo',
      jointDebtor: '-',
      chapter: 'Chapter 7, Individual (Single)',
      caseFiledDate: '09/03/2023',
    },
    {
      id: '3',
      caseNumber: '10AAA9',
      debtor: 'Saul Goodman',
      jointDebtor: '-',
      chapter: 'Chapter 7, Individual (Single)',
      caseFiledDate: '09/05/2023',
    },
    {
      id: '4',
      caseNumber: '10AAZ6',
      debtor: 'Hank Williams',
      jointDebtor: 'Margaret Williams',
      chapter: 'Chapter 7, Joint',
      caseFiledDate: '09/05/2023',
    },
    {
      id: '5',
      caseNumber: '10DFC78',
      debtor: 'Bert Reynolds',
      jointDebtor: 'Julie Reynolds',
      chapter: 'Chapter 7, Joint',
      caseFiledDate: '09/07/2023',
    },
    {
      id: '6',
      caseNumber: '10DFC78',
      debtor: 'Alice Jenkins',
      jointDebtor: 'Matt Jenkins',
      chapter: 'Chapter 7, Joint',
      caseFiledDate: '09/09/2023',
    },
  ];

  const columns = [
    {
      key: 'caseNumber',
      width: 120,
      header: 'Case No.',
      isSortable: false,
      render: (data: any) => data.caseNumber,
    },
    {
      key: 'debtor',
      header: 'Debtor',
      width: 120,
      isSortable: false,
      render: (data: any) => data.debtor,
    },
    {
      key: 'jointDebtor',
      header: 'Joint Debtor',
      width: 150,
      isSortable: false,
      render: (data: any) => data.jointDebtor,
    },
    {
      key: 'chapter',
      header: 'Chapter',
      width: 150,
      isSortable: false,
      render: (data: any) => data.chapter,
    },
    {
      key: 'caseFiledDate',
      header: 'Case Filed Date',
      width: 150,
      isSortable: false,
      render: (data: any) => data.caseFiledDate,
    },
    {
      key: 'action',
      header: 'Action',
      isSortable: false,
      width: 150,
      render: (_data: any, isSelected: React.ReactNode) => (
        <Button variant="primary" fill="transparent" size="small">
          {isSelected ? 'Selected' : 'Select'}
        </Button>
      ),
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Debounce search term changes
  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchTerm(searchTerm); // You might want to update this logic as per your requirement
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  // Memoized search results
  const searchResults = useMemo(() => {
    if (!searchTerm) return data; // Use 'tableData' here

    return data.filter((item) =>
      Object.entries(item).some(([key, value]) => {
        if (key === 'action') return false;
        return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
      }),
    );
  }, [data, searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TableContextProvider>
      <TableContainer title="Basic Data Table" description="With Searchbar & Single Row Selection">
        <Box marginBottom="16px">
          <Search
            labelText="Search Table"
            placeholder="Search Debtors"
            type="text"
            value={searchTerm}
            onChange={handleChange}
          />
        </Box>
        <Table id="custom-data-table" data={searchResults} columns={columns} />
      </TableContainer>
    </TableContextProvider>
  );
};

export const SortableColumns = () => {
  const data = [
    {
      id: '0',
      caseNumber: '10BBB9',
      debtor: 'Bill Watts',
      jointDebtor: '-',
      chapter: 'Chapter 7, Individual (Single)',
      caseFiledDate: '08/28/2023',
    },
    {
      id: '1',
      caseNumber: '10CCC9',
      debtor: 'John Snow',
      jointDebtor: 'Ariana Grande',
      chapter: 'Chapter 7, Joint',
      caseFiledDate: '08/29/2023',
    },
    {
      id: '2',
      caseNumber: '10AAA7',
      debtor: 'Jody Gutillo',
      jointDebtor: '-',
      chapter: 'Chapter 7, Individual (Single)',
      caseFiledDate: '09/03/2023',
    },
    {
      id: '3',
      caseNumber: '10AAA9',
      debtor: 'Saul Goodman',
      jointDebtor: '-',
      chapter: 'Chapter 7, Individual (Single)',
      caseFiledDate: '09/05/2023',
    },
    {
      id: '4',
      caseNumber: '10AAZ6',
      debtor: 'Hank Williams',
      jointDebtor: 'Margaret Williams',
      chapter: 'Chapter 7, Joint',
      caseFiledDate: '09/05/2023',
    },
    {
      id: '5',
      caseNumber: '10DFC78',
      debtor: 'Bert Reynolds',
      jointDebtor: 'Julie Reynolds',
      chapter: 'Chapter 7, Joint',
      caseFiledDate: '09/07/2023',
    },
    {
      id: '6',
      caseNumber: '10DFC78',
      debtor: 'Alice Jenkins',
      jointDebtor: 'Matt Jenkins',
      chapter: 'Chapter 7, Joint',
      caseFiledDate: '09/09/2023',
    },
  ];

  const columns = [
    {
      key: 'caseNumber',
      width: 120,
      header: 'Case No.',
      isSortable: true,
      render: (data: any) => data.caseNumber,
    },
    {
      key: 'debtor',
      header: 'Debtor',
      width: 120,
      isSortable: true,
      render: (data: any) => data.debtor,
    },
    {
      key: 'jointDebtor',
      header: 'Joint Debtor',
      width: 150,
      isSortable: true,
      render: (data: any) => data.jointDebtor,
    },
    {
      key: 'chapter',
      header: 'Chapter',
      width: 150,
      isSortable: true,
      render: (data: any) => data.chapter,
    },
    {
      key: 'caseFiledDate',
      header: 'Case Filed Date',
      width: 150,
      isSortable: true,
      render: (data: any) => data.caseFiledDate,
    },
    {
      key: 'action',
      header: 'Action',
      isSortable: false,
      width: 150,
      render: (_data: any, isSelected: React.ReactNode) => (
        <Button variant="primary" fill="transparent" size="small">
          {isSelected ? 'Selected' : 'Select'}
        </Button>
      ),
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState<DataTableSortState>('none');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [sortKey, setSortKey] = useState<string>('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  // Memoized search results
  const searchResults = useMemo(() => {
    if (!debouncedSearchTerm) return data;

    return data.filter((item) =>
      Object.entries(item).some(([key, value]) => {
        if (key === 'action') return false;
        return value.toString().toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      }),
    );
  }, [data, debouncedSearchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key: string) => {
    setSortKey(key);
    setSortDirection((prevDirection) => (prevDirection === 'ascending' ? 'descending' : 'ascending'));
  };

  const compareValues = (key, sortDirection = 'ascending') => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }

      return sortDirection === 'descending' ? comparison * -1 : comparison;
    };
  };

  const sortedData = useMemo(() => {
    return sortKey ? [...searchResults].sort(compareValues(sortKey, sortDirection)) : searchResults;
  }, [searchResults, sortKey, sortDirection]);

  return (
    <TableContextProvider>
      <TableContainer title="Data Table" description="With Searchbar, Single Row Selection, and Sorted Columns">
        <Box marginBottom="16px">
          <Search
            labelText="Search Table"
            placeholder="Search Debtors"
            type="text"
            value={searchTerm}
            onChange={handleChange}
          />
        </Box>
        <Table
          data={sortedData}
          columns={columns}
          sortKey={sortKey}
          sortDirection={sortDirection}
          onSort={handleSort}
        />
      </TableContainer>
    </TableContextProvider>
  );
};
