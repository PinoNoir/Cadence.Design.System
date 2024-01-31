import { useEffect, useState } from 'react';
import * as styles from '../components/data-table/styles/DataTable.css';
import { TableDataProps } from '../types/data-table-generics';

const useRowClickHandler = (data: TableDataProps<any>) => {
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleRowClick = (id: number): void => {
    // Check if the clicked row is already selected, if so, deselect it
    if (selectedRowId === id) {
      setSelectedRowId(null);
      setSelectedRowData(null);
    } else {
      setSelectedRowId(id);
      setSelectedRowData(data[id]);
    }
  };

  // useEffect to apply CSS class to the selected row
  useEffect(() => {
    // Remove the `${styles.selected}` class from all rows
    const rows = document.querySelectorAll(`.${styles.dataTableRow}`);
    rows.forEach((row) => {
      row.classList.remove(`${styles.selected}`);
    });

    // Add the `${styles.selected}` class to the current selected row
    if (selectedRowId !== null) {
      const selectedElement = document.getElementById(`row-${selectedRowId}`);
      if (selectedElement) {
        selectedElement.classList.add(`${styles.selected}`);
      }
    }
  }, [selectedRowId]); // Depend only on selectedRow

  return { selectedRowId, selectedRowData, handleRowClick };
};

export default useRowClickHandler;
