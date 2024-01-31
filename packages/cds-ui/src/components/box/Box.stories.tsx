import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: (args) => (
    <Box
      {...args}
      display="flex"
      padding="24px"
      width="fit-content"
      borderRadius="4"
      justifyContent="center"
      alignItems="center"
      backgroundColor="neutral20"
    >
      <p>This is some centered content in the Box component.</p>
    </Box>
  ),
};
