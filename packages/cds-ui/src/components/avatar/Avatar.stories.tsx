import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
// @ts-ignore
import profilePic from '../../public/profile-pic.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'Coming Soon/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    src: {
      control: { type: 'string' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
  args: {
    size: 'sm',
    hasImage: true,
    src: profilePic,
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    hasImage: true,
    src: profilePic,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    hasImage: true,
    src: profilePic,
  },
};

export const XLarge: Story = {
  args: {
    size: 'xl',
    hasImage: true,
    src: profilePic,
  },
};

export const Placeholder: Story = {
  args: {
    size: 'xl',
    hasImage: false,
    children: 'NP',
  },
};
