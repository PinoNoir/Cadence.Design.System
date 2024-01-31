import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/UZTuFFY4hW0LryuLjnEEcQ/BCC-Components?type=design&node-id=31632%3A1853&mode=design&t=i4Msn3zdSBr7jHtZ-1',
    },
  },
  args: {},
  argTypes: {
    variant: {
      options: ['info', 'success', 'warning', 'error'],
      control: { type: 'select' },
    },
    shape: {
      options: ['square', 'bevel', 'round'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Badge',
    shape: 'round',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Badge',
    shape: 'round',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Badge',
    shape: 'round',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Badge',
    shape: 'round',
  },
};

export const error: Story = {
  args: {
    variant: 'error',
    children: 'Badge',
    shape: 'round',
  },
};
