import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Divider, { DividerProps } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['onLight', 'onDark'],
      control: { type: 'select' },
    },
    thickness: {
      options: ['thin', 'medium', 'thick'],
      control: { type: 'select' },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Divider>;

const text = {
  lines: ['I code, delete, recode', 'Delete again, and then', 'I read documentation', 'And then I code again.'],
};

export const Horizontal: Story = {
  render: (args: DividerProps) => (
    <div
      style={{
        display: 'grid',
        gap: '8px',
        height: 'fit-content',
        gridAutoFlow: 'row',
        gridAutoColumns: 'max-content',
      }}
    >
      {text.lines.map((line, i) => (
        <React.Fragment key={line}>
          {i > 0 && <Divider {...args} orientation="horizontal" thickness="medium" color="onLight" />}
          <p>{line}</p>
        </React.Fragment>
      ))}
    </div>
  ),
};

export const Vertical: Story = {
  render: (args: DividerProps) => (
    <div
      style={{
        display: 'grid',
        gap: '8px',
        height: 'fit-content',
        gridAutoFlow: 'column',
        gridAutoColumns: 'max-content',
      }}
    >
      {text.lines.map((line, i) => (
        <React.Fragment key={i}>
          {i > 0 && <Divider {...args} orientation={'vertical'} thickness={'medium'} color={'onLight'} />}
          <p>{line}</p>
        </React.Fragment>
      ))}
    </div>
  ),
};
