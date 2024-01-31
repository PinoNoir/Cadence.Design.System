import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../button';
import { Toast, ToastProps, ToastProvider } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {
    open: {
      table: {
        disable: true,
      },
    },
    variant: {
      options: ['alert', 'success', 'error'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: (args: ToastProps) => {
    const [open, setOpen] = useState(false);

    const closeToast = () => {
      setOpen(!open);
      return setOpen;
    };

    return (
      <>
        <Button
          variant="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Toast
        </Button>
        <ToastProvider swipeDirection="right">
          <Toast
            {...args}
            content={args.content}
            variant={args.variant}
            onClose={() => closeToast}
            open={open}
            message="This is a toast message description"
            header={args.header}
            url={args.url}
            hyperlinkText="This is an optional hyperlink"
          />
        </ToastProvider>
      </>
    );
  },
};

export const Alert = {
  args: {
    variant: 'alert',
    className: 'ClassName',
    message: 'Alert Message',
    header: 'Alert',
  },
};

export const AlertWithLink = {
  args: {
    variant: 'alert',
    header: 'Alert',
    className: 'ClassName',
    message: 'Alert Message',
    url: 'https://www.stretto.com',
    hyperlinkText: 'Link',
  },
};

export const Success = {
  args: {
    variant: 'success',
    header: 'Success',
    className: 'ClassName',
    message: 'Success Message',
  },
};

export const SuccessWithLink = {
  args: {
    variant: 'success',
    header: 'Success',
    className: 'ClassName',
    message: 'Success Message',
    url: 'https://www.stretto.com',
    hyperlinkText: 'Link',
  },
};

export const Error = {
  args: {
    variant: 'error',
    header: 'Error',
    className: 'ClassName',
    message: 'Error Message',
  },
};

export const ErrorWithLink = {
  args: {
    variant: 'error',
    className: 'ClassName',
    message: 'Error Message',
    header: 'Error',
    url: 'https://www.stretto.com',
    hyperlinkText: 'Link',
  },
};
