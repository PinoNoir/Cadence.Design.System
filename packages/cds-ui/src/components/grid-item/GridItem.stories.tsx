import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Grid from '../grid/Grid';
import GridItem, { GridItemProps } from './GridItem';
import * as styles from './GridItem.css';

const meta: Meta<typeof GridItem> = {
  title: 'Layout/GridItem',
  component: GridItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    colSpan: {
      control: { type: 'number' },
    },
    rowSpan: {
      control: { type: 'number' },
    },
    alignItems: {
      options: ['center', 'normal', 'flex-start', 'flex-end', 'self-start', 'self-end', 'stretch', 'baseline'],
      control: { type: 'select' },
    },
    justifyContent: {
      options: ['center', 'flex-start', 'flex-end', 'space-around', 'space-between', 'space-evenly', 'stretch'],
      control: { type: 'select' },
    },
    display: {
      options: ['grid', 'inline-grid', 'subgrid', 'inline-subgrid', 'contents', 'none'],
      control: { type: 'select' },
    },
    justifySelf: {
      options: ['center', 'normal', 'flex-start', 'flex-end', 'self-start', 'self-end', 'stretch', 'baseline'],
      control: { type: 'select' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof GridItem>;

export const Default: Story = {
  render: (args: GridItemProps) => (
    <Grid display="grid" columns={12} rows={3}>
      <GridItem {...args} as="div" colSpan={12} rowSpan={2} alignItems="center" className={`${styles.gridExample}`}>
        This GridItem spans 12 columns and 2 rows
      </GridItem>
      <GridItem {...args} as="div" colSpan={8} className={`${styles.gridExample}`}>
        This GridItem spans 8 columns
      </GridItem>
      <GridItem {...args} as="div" colSpan={4} className={`${styles.gridExample}`}>
        This GridItem spans 4 columns
      </GridItem>
      <GridItem {...args} as="div" colSpan={4} className={`${styles.gridExample}`}>
        This GridItem spans 4 columns
      </GridItem>
    </Grid>
  ),
};
