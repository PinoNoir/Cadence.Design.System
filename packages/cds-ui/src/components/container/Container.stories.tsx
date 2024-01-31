import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Container from './Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'string' },
    },
    className: {
      control: { type: 'string' },
    },
    overflow: {
      options: ['hidden', 'clip', 'visible', 'scroll', 'auto', 'unset'],
      control: { type: 'select' },
    },
    justifyContent: {
      options: ['center', 'spaceAround', 'spaceBetween', 'stretch', 'flexEnd', 'flexStart'],
      control: { type: 'select' },
    },
    display: {
      options: ['flex', 'inlineFlex', 'block', 'inlineBlock', 'grid', 'none'],
      control: { type: 'select' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    display: 'flex',
    overflow: 'auto',
    justifyContent: 'center',
    children: <p>This is some content in the container.</p>,
  },
};
