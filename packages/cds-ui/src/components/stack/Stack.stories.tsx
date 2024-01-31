import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '../box';
import Stack, { StackProps } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
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
  },
};
export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: (args: StackProps) => (
    <Stack {...args}>
      <Box
        style={{
          display: 'flex',
          padding: '24px',
          width: '250px',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '4px',
          color: 'var(--cds-color-neutral-40)',
          backgroundColor: 'var(--cds-color-neutral-100)',
        }}
      >
        I'm a stacked div
      </Box>
      <Box
        style={{
          display: 'flex',
          padding: '24px',
          width: '250px',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '4px',
          color: 'var(--cds-color-neutral-40)',
          backgroundColor: 'var(--cds-color-neutral-100)',
        }}
      >
        I'm a stacked div
      </Box>
      <Box
        style={{
          display: 'flex',
          padding: '24px',
          width: '250px',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '4px',
          color: 'var(--cds-color-neutral-40)',
          backgroundColor: 'var(--cds-color-neutral-100)',
        }}
      >
        I'm a stacked div
      </Box>
    </Stack>
  ),
};
