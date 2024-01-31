import { Icon } from '@iconify/react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Popover from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {},
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    icon: <Icon fontSize="20px" color="var(--cds-color-neutral-100)" icon="mdi:help-box"></Icon>,
    children: 'This is some basic popover content.',
  },
};
