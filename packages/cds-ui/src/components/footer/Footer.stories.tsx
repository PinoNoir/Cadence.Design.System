import { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import './Footer.css';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    links: {
      control: {
        type: 'object',
      },
    },
    supportPhone: {
      control: {
        type: 'text',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    links: [
      { label: 'Terms and Conditions ', url: '#' },
      { label: 'Privacy Policy ', url: '#' },
    ],
    supportPhone: '(800) 999 9999',
  },
};
