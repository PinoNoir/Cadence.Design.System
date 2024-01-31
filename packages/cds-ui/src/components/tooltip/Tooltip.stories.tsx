import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from '../button/Button';
import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {},
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: (
      <Button variant="primary" fill="solid">
        Tooltip Trigger
      </Button>
    ),
    description: 'This is some basic Tooltip content.',
  },
};
