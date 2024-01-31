import { Icon } from '@iconify/react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/UZTuFFY4hW0LryuLjnEEcQ/BCC-Components?node-id=4267-2811&t=dpBHIkk4Yq1iXgJo-4',
    },
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'accent', 'error'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
    fill: {
      options: ['transparent', 'solid'],
      control: { type: 'select' },
    },
    children: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'default',
    fill: 'solid',
    isDisabled: false,
    isLoading: false,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'default',
    fill: 'solid',
    isDisabled: false,
    isLoading: false,
    icon: <Icon icon={'mdi:plus'} fontSize={'20px'}></Icon>,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'default',
    fill: 'solid',
    isDisabled: false,
    isLoading: false,
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
    size: 'default',
    fill: 'solid',
    isDisabled: false,
    isLoading: false,
  },
};

export const Accent: Story = {
  args: {
    children: 'Button',
    variant: 'accent',
    size: 'default',
    fill: 'solid',
    isDisabled: false,
    isLoading: false,
  },
};

export const error: Story = {
  args: {
    children: 'Button',
    variant: 'error',
    size: 'default',
    fill: 'transparent',
    isDisabled: false,
    isLoading: false,
  },
};
