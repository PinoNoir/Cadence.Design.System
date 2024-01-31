import { Meta, StoryObj } from '@storybook/react';
import SectionAlert from './SectionAlert';

const meta: Meta<typeof SectionAlert> = {
  title: 'Components/Section Alert',
  component: SectionAlert,
  parameters: {
    docs: {
      description: {
        component: 'Section Alert',
      },
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SectionAlert>;

export const Default: Story = {
  args: {
    variant: 'info',
    state: 'Info',
    message: 'This is some information.',
    link: '#',
    linkText: ' This is an optional link',
    header: 'Information',
  },
};

export const WithLink: Story = {
  args: {
    variant: 'success',
    state: 'Success',
    message: 'This is a success message.',
    link: '#',
    linkText: ' This is an optional link',
    header: 'Success',
  },
};

export const WithHeader: Story = {
  args: {
    variant: 'error',
    state: 'Error',
    message: 'This is an error message.',
    link: '#',
    linkText: undefined,
    header: 'Error',
  },
};
