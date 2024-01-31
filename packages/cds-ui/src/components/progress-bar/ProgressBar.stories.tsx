import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  argTypes: {
    variant: {
      options: ['secondary', 'primary', 'info'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    value: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    showProgress: {
      control: { type: 'boolean' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    value: 50,
    max: 100,
    showProgress: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    value: 50,
    max: 100,
    showProgress: true,
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    value: 50,
    max: 100,
    showProgress: true,
  },
};
