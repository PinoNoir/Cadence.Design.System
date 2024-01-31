import { Icon } from '@iconify/react';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Dropdown, DropdownMenu, DropdownMenuItem, DropdownTrigger } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

/*
  todo: add leading icons on the menu items to show accurate display of end use case
*/

export const Default: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownTrigger {...args}>
        <Icon icon="mdi:dots-vertical" fontSize={'24px'} />
      </DropdownTrigger>
      <DropdownMenu {...args}>
        <DropdownMenuItem>
          <Icon icon="mdi:content-save" />
          Save
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="mdi:printer" />
          Print
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="mdi:download" />
          Download
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="mdi:delete" />
          Delete
        </DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  ),
};
