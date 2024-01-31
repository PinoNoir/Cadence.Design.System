import type { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  argTypes: {
    active: { control: 'boolean' },
    small: { control: 'boolean' },
    withOverlay: { control: 'boolean' },
    description: { control: 'text' },
    className: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    active: true,
    withOverlay: false,
    small: false,
    description: 'Loading',
  },
};

export const Small: Story = {
  args: {
    active: true,
    withOverlay: false,
    small: true,
    description: 'Loading',
  },
};

export const withOverlay: Story = {
  args: {
    active: true,
    withOverlay: true,
    small: false,
    description: 'Loading',
  },
};
