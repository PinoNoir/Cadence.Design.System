import type { Meta, StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';
import { Box } from '../box';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args: CheckboxProps) => (
    <Box display={'flex'}>
      <Checkbox {...args}>This is the checkbox label</Checkbox>
    </Box>
  ),
};

export const Disabled: Story = {
  render: (args: CheckboxProps) => (
    <Box display={'flex'}>
      <Checkbox {...args} disabled={true} checked={false}>
        This is the checkbox label
      </Checkbox>
    </Box>
  ),
};
