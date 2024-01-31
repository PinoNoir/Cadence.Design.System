import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Switch, { CustomSwitchProps } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    asChild: { control: 'boolean' },
    hasLabel: { control: 'boolean' },
    label: { control: 'text' },
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    onCheckedChange: { action: 'onCheckedChange' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    name: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args: CustomSwitchProps) => <Switch hasLabel={false} disabled={false} defaultChecked={false} {...args} />,
};

export const hasLabel: Story = {
  render: (args: CustomSwitchProps) => <Switch hasLabel={true} label="This is a label" {...args} />,
};

export const disabled: Story = {
  render: (args: CustomSwitchProps) => <Switch disabled={true} {...args} />,
};
