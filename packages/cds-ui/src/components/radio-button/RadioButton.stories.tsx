import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import RadioButton from './RadioButton';
import RadioButtonGroup from './RadioButtonGroup';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/Radio Button ',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    defaultChecked: {
      control: {
        type: 'boolean',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
    hideLabel: {
      control: {
        type: 'boolean',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    id: {
      control: {
        type: 'text',
      },
    },
    role: {
      control: {
        type: 'text',
      },
    },
    labelText: {
      control: {
        type: 'text',
      },
    },
    labelPosition: {
      options: ['left', 'right'],
      control: {
        type: 'select',
      },
    },
    readOnly: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  render: () => (
    <RadioButtonGroup legendText="Group label" name="radio-button-group" defaultSelected="radio-1">
      <RadioButton labelText="Radio button label" value="radio-1" id="radio-1" labelPosition="left" />
      <RadioButton labelText="Radio button label" value="radio-2" id="radio-2" />
      <RadioButton labelText="Radio button label" value="radio-3" id="radio-3" disabled />
    </RadioButtonGroup>
  ),
};
