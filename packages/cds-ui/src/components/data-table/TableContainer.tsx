import clsx from 'clsx';
import React, { useMemo } from 'react';
import { ReactAttr } from '../../types/common';
import { useId } from '../../utilities/use-id';
import { TableContainerContext } from './TableContainerContext';
import * as styles from './styles/DataTableContainer.css';

export interface TableContainerProps extends Omit<ReactAttr<HTMLDivElement>, 'title'> {
  /**
   * Optional description text for the Table
   */
  description?: React.ReactNode;
  /**
   * Specify whether the table should have a sticky header
   */
  stickyHeader?: boolean;
  /**
   * If true, will use a width of 'fit-content' to match the inner table width
   */
  useStaticWidth?: boolean;
  /**
   * Provide a title for the Table
   */
  title?: React.ReactNode;
}

const TableContainer = ({
  className,
  children,
  title,
  description,
  stickyHeader,
  useStaticWidth,
  ...rest
}: TableContainerProps): React.JSX.Element => {
  const baseId = useId('tc');
  const titleId = `${baseId}-title`;
  const descriptionId = `${baseId}-description`;
  const tableContainerClasses = clsx(className, [styles.container], {
    [styles.stickyHeaderMaxWidth]: stickyHeader,
    [styles.containerStatic]: useStaticWidth,
  });

  const value = useMemo(
    () => ({
      titleId: title ? titleId : undefined,
      descriptionId: description ? descriptionId : undefined,
    }),
    [title, description, titleId, descriptionId],
  );

  return (
    <TableContainerContext.Provider value={value}>
      <div {...rest} className={tableContainerClasses}>
        {title && (
          <div className={styles.header}>
            <h4 className={styles.headerTitle} id={titleId}>
              {title}
            </h4>
            <p className={styles.headerDescription} id={descriptionId}>
              {description}
            </p>
          </div>
        )}
        {children}
      </div>
    </TableContainerContext.Provider>
  );
};

TableContainer.displayName = 'TableContainer';

export default TableContainer;
