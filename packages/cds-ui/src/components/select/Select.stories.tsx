import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Select, SelectItem, SelectProps } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    labelText: { type: 'string' },
    placeholder: { type: 'string' },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select
      id="test"
      labelText="Select label"
      hideLabel={false}
      inline={false}
      placeholder="Select Option"
      disabled={false}
    >
      <SelectItem value="test 1">Test 1</SelectItem>
      <SelectItem value="test 2">Test 2</SelectItem>
      <SelectItem value="test 3">Test 3</SelectItem>
      <SelectItem value="test 4">Test 4</SelectItem>
      <SelectItem value="test 5">Test 5</SelectItem>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select
      id="test"
      labelText="Select label"
      hideLabel={false}
      inline={false}
      placeholder="Select Option"
      disabled={true}
    >
      <SelectItem value="test 1">Test 1</SelectItem>
      <SelectItem value="test 2">Test 2</SelectItem>
      <SelectItem value="test 3">Test 3</SelectItem>
      <SelectItem value="test 4">Test 4</SelectItem>
      <SelectItem value="test 5">Test 5</SelectItem>
    </Select>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <Select {...args} placeholder="This is a really long placeholder to show as an example">
      <SelectItem value="test 1">Test 1</SelectItem>
      <SelectItem value="test 2">Test 2</SelectItem>
      <SelectItem value="test 3">Test 3</SelectItem>
      <SelectItem value="test 4">Test 4</SelectItem>
      <SelectItem value="test 5">Test 5</SelectItem>
    </Select>
  ),
};
