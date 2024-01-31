import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'object',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    hasIcon: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'This is a Label component',
  },
};

Default.play = async ({ canvasElement }) => {
  let canvas = within(canvasElement);
  let defaultLabel = await canvas.getByText('This is a Label component');

  await expect(defaultLabel).toHaveStyle('color: #173237');
  await expect(defaultLabel).toHaveStyle(
    'font-family: Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  );
  await expect(defaultLabel).toHaveStyle('font-size: 14px'); //0.875rem
  await expect(defaultLabel).toHaveStyle('font-weight: 700');
};
