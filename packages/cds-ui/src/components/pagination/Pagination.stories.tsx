import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Pagination, { PaginationProps } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Coming Soon/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const DefaultPagination: Story = {
  render: (args: PaginationProps) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    return (
      <Pagination
        {...args}
        rowsPerPageOptions={[10, 25, 50, { label: 'All', value: -1 }]}
        colSpan={12}
        count={100}
        rowsPerPage={rowsPerPage}
        page={page}
        slotProps={{
          select: {
            'aria-label': 'Showing Clients',
          },
          actions: {
            showFirstButton: true,
            showLastButton: true,
          },
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    );
  },
};
