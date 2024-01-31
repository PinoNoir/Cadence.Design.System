import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TextInput, { TextInputProps } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    labelText: {
      control: { type: 'text' },
    },
    helperText: {
      control: { type: 'text' },
    },
    invalidText: {
      control: { type: 'text' },
    },
    warnText: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    defaultValue: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: (args: TextInputProps) => (
    <TextInput {...args} id="text-input-1" type="text" labelText="Label text" helperText="Optional help text" />
  ),
};

export const ReadOnly: Story = {
  render: (args: TextInputProps) => (
    <TextInput
      {...args}
      labelText="Text input label"
      helperText="Optional help text"
      value="This is read only, you can't type more."
      readOnly
      id="text-input-1"
    />
  ),
};

export const DateInput: Story = {
  render: (args: TextInputProps) => (
    <TextInput
      {...args}
      type="date"
      labelText="Hearing Date"
      helperText="Click the icon to select a date"
      placeholder={'mm/dd/yyyy'}
      id="date-input-1"
    />
  ),
};

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: args.width }}>
      <TextInput {...args} id="text-input-1" type="text" />
    </div>
  ),
};

Playground.args = {
  width: 300,
  className: 'input-test-class',
  placeholder: 'Placeholder text',
  invalid: false,
  invalidText: 'Error message goes here',
  disabled: false,
  labelText: 'Label text',
  helperText: 'Helper text',
  warn: false,
  warnText: 'Warning message that is really long can wrap to more lines but should not be excessively long.',
};

Playground.argTypes = {
  width: {
    control: { type: 'range', min: 300, max: 800, step: 50 },
  },
  className: {
    control: {
      type: 'text',
    },
  },
  defaultValue: {
    control: {
      type: 'text',
    },
  },
  placeholder: {
    control: {
      type: 'text',
    },
  },
  invalid: {
    control: {
      type: 'boolean',
    },
  },
  invalidText: {
    control: {
      type: 'text',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  labelText: {
    control: {
      type: 'text',
    },
  },
  helperText: {
    control: {
      type: 'text',
    },
  },
  warn: {
    control: {
      type: 'boolean',
    },
  },
  warnText: {
    control: {
      type: 'text',
    },
  },
  value: {
    control: {
      type: 'text',
    },
  },
  onChange: {
    action: 'onChange',
  },
  onClick: {
    action: 'onClick',
  },
  size: {
    options: ['sm', 'md', 'lg', 'xl'],
    control: {
      type: 'select',
    },
  },
};
