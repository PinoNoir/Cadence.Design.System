import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import { iconNames } from '../../types/icon-names';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <div style={{ width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    name: {
      options: iconNames,
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['small', 'default', 'large'],
      control: {
        type: 'select',
      },
    },
    color: {
      options: ['default', 'primary', 'secondary', 'tertiary', 'accent', 'info', 'success', 'warning', 'error'],
      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'mdi-account',
    color: 'default',
    size: 'default',
  },
};
