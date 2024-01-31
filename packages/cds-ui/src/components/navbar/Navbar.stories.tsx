import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Navbar, { NavbarProps } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Coming Soon/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Navbar>;

const links = [
  { label: 'Home', url: '#' },
  { label: 'Clients', url: '#' },
  { label: 'Calendar', url: '#' },
  { label: 'Court Notices', url: '#' },
  { label: 'Credit Reports & Courses', url: '#' },
  { label: 'Documents', url: '#' },
  { label: 'Legal Noticing', url: '#' },
];

export const Default: Story = {
  render: (args: NavbarProps) => <Navbar logoUrl={args.logoUrl} links={links}></Navbar>,
};
