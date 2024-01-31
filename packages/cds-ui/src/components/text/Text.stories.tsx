import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  argTypes: {
    as: {
      options: ['a', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    color: {
      options: ['default', 'primary', 'secondary', 'tertiary', 'accent', 'info', 'success', 'warning', 'error'],
      control: { type: 'select' },
    },
    size: {
      options: ['xs', 'small', 'base', 'medium', 'large', 'xl', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Text component',
    color: 'default',
    size: 'base',
    as: 'p',
  },
};
