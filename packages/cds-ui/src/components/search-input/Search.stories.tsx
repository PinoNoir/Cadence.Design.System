import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Search, { SearchProps } from './Search';

const meta: Meta<typeof Search> = {
  title: 'Components/Search Input',
  component: Search,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    variant: {
      options: ['default', 'warning', 'valid', 'invalid'],
      control: { type: 'select' },
    },
    borderRadius: {
      options: ['default', 'rounded'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  render: (args: SearchProps) => {
    return <Search {...args} />;
  },
};
