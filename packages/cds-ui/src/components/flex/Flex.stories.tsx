import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Flex, { FlexProps } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    gap: {
      options: ['8px', '16px', '24px', '32px'],
      control: { type: 'select' },
    },
    alignItems: {
      options: ['center', 'normal', 'flex-start', 'flex-end', 'self-start', 'self-end', 'stretch', 'baseline'],
      control: { type: 'select' },
    },
    justifyContent: {
      options: ['center', 'flex-start', 'flex-end', 'space-around', 'space-between', 'space-evenly', 'stretch'],
      control: { type: 'select' },
    },
    flexDirection: {
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      control: { type: 'select' },
    },
    flexWrap: {
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      control: { type: 'select' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  render: (args: FlexProps) => (
    <Flex {...args}>
      <div
        style={{
          display: 'flex',
          padding: '24px',
          width: '350px',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '4px',
          color: 'var(--cds-color-neutral-40)',
          backgroundColor: 'var(--cds-color-neutral-100)',
        }}
      >
        1
      </div>
      <div
        style={{
          display: 'flex',
          padding: '24px',
          width: '350px',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '4px',
          color: 'var(--cds-color-neutral-40)',
          backgroundColor: 'var(--cds-color-neutral-100)',
        }}
      >
        2
      </div>
      <div
        style={{
          display: 'flex',
          padding: '24px',
          width: '350px',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '4px',
          color: 'var(--cds-color-neutral-40)',
          backgroundColor: 'var(--cds-color-neutral-100)',
        }}
      >
        3
      </div>
      <div
        style={{
          display: 'flex',
          padding: '24px',
          width: '350px',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '4px',
          color: 'var(--cds-color-neutral-40)',
          backgroundColor: 'var(--cds-color-neutral-100)',
        }}
      >
        4
      </div>
    </Flex>
  ),
};
