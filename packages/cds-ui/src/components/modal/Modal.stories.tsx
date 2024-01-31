import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { Button } from '../button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    width: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: 'Modal Title',
    children: 'This is some test content in a small width modal.',
    width: 'small',
    buttons: [<Button variant="primary">Continue</Button>],
    closeButtonLabel: 'Close',
  },
};

export const Medium: Story = {
  args: {
    title: 'Modal Title',
    children: 'This is some test content in a medium width modal.',
    width: 'medium',
    buttons: [<Button variant="primary">Continue</Button>],
  },
};

export const Large: Story = {
  args: {
    title: 'Modal Title',
    children: 'This is some test content in a large width modal.',
    width: 'large',
    buttons: [<Button variant="primary">Continue</Button>, <Button variant="tertiary">Continue</Button>],
  },
};
