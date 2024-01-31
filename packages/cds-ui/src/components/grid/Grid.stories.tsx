import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GridItem } from '../grid-item';
import Grid, { GridProps } from './Grid';

import { Button } from '../button';
import { Footer } from '../footer';
import { Navbar } from '../navbar';
import { Panel } from '../panel';
import * as styles from './Grid.css';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
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
    gap: {
      options: ['8px', '16px', '24px', '32px'],
      control: { type: 'select' },
    },
    columns: {
      control: { type: 'text' },
    },
    rows: {
      control: { type: 'text' },
    },
    gridAutoColumns: {
      control: { type: 'text' },
    },
    gridAutoRows: {
      control: { type: 'text' },
    },
    display: {
      options: ['grid', 'inline-grid'],
      control: { type: 'select' },
    },
    gridAutoFlow: {
      options: ['row', 'column', 'dense', 'row dense', 'column dense'],
      control: { type: 'select' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Grid>;

const links = [
  { label: 'Home', url: '#' },
  { label: 'Clients', url: '#' },
  { label: 'Calendar', url: '#' },
  { label: 'Court Notices', url: '#' },
  { label: 'Credit Reports & Courses', url: '#' },
  { label: 'Documents', url: '#' },
  { label: 'Legal Noticing', url: '#' },
];

export const Basic: Story = {
  render: (args: GridProps) => (
    <Grid columns={4}>
      <div className={`${styles.gridExample}`}>1</div>
      <div className={`${styles.gridExample}`}>2</div>
      <div className={`${styles.gridExample}`}>3</div>
      <div className={`${styles.gridExample}`}>4</div>
    </Grid>
  ),
};

export const Columns: Story = {
  render: (args: GridProps) => (
    <Grid columns={6}>
      <GridItem as="div" className={`${styles.gridExample}`}>
        Column 1
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`}>
        Column 2
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`}>
        Column 3
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`}>
        Column 4
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`}>
        Column 5
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`}>
        Column 6
      </GridItem>
    </Grid>
  ),
};

export const Rows: Story = {
  render: (args: GridProps) => (
    <Grid rows={2}>
      <GridItem as="div" className={`${styles.gridExample}`}>
        Row 1
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`}>
        Row 2
      </GridItem>
    </Grid>
  ),
};

export const ImplicitColumns: Story = {
  render: (args: GridProps) => (
    <Grid columns="repeat(auto-fill, 1fr)">
      <GridItem as="div" className={`${styles.gridExample}`} colSpan={1}>
        Span 1 Column
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`} colSpan={3}>
        Span 3 Columns
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`} colSpan={5}>
        Span 5 Columns
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`} colSpan={7}>
        Span 7 Columns
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`} colSpan={9}>
        Span 9 Columns
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`} colSpan={11}>
        Span 11 Columns
      </GridItem>
    </Grid>
  ),
};

export const ImplicitRows: Story = {
  render: (args: GridProps) => (
    <Grid rows={6}>
      <GridItem as="div" className={`${styles.gridExample}`}>
        1
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`}>
        2
      </GridItem>
      <GridItem as="div" className={`${styles.gridExample}`}>
        3
      </GridItem>
    </Grid>
  ),
};

export const AppTemplate3: Story = {
  render: (args: GridProps) => (
    <Grid columns="repeat(12, [col-start] 1fr)">
      <GridItem as="header" colSpan={12}>
        <Navbar logoUrl="#" links={links}></Navbar>
      </GridItem>
      <GridItem as="div" colSpan={8} alignItems="self-start">
        <Panel
          header="h2 header"
          panelContent={
            <Grid columns="repeat(auto-fit, minmax(200px, 1fr))">
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
            </Grid>
          }
          border="default"
          footerDivider={true}
          footer={
            <div>
              <Button variant="primary">Primary Button</Button>
            </div>
          }
        />
      </GridItem>
      <GridItem as="aside" colSpan={4}>
        <Panel
          header="h2 header"
          panelContent={
            <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gridAutoRows="auto">
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
            </Grid>
          }
          border="default"
          footerDivider={true}
          footer={
            <div>
              <Button variant="primary">Primary Button</Button>
            </div>
          }
        />
      </GridItem>
      <GridItem as="div" colSpan={12}>
        <Footer
          links={[
            { label: 'Terms and Conditions ', url: '#' },
            { label: 'Privacy Policy ', url: '#' },
          ]}
          supportPhone="(800) 999 9999"
        />
      </GridItem>
    </Grid>
  ),
};

export const AppTemplate4: Story = {
  render: (args: GridProps) => (
    <Grid columns={12} gridAutoRows="minmax(100px, auto)">
      <GridItem as="header" colSpan={12}>
        <Navbar logoUrl="#" links={links}></Navbar>
      </GridItem>
      <GridItem as="aside" colSpan={1}>
        <Panel
          header="h2 header"
          panelContent={
            <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gridAutoRows="auto">
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
            </Grid>
          }
          border="default"
          footerDivider={true}
          footer={
            <div>
              <Button variant="primary">Primary Button</Button>
            </div>
          }
        />
      </GridItem>
      <GridItem as="div" colSpan={8} alignItems="self-start">
        <Panel
          header="h2 header"
          panelContent={
            <Grid columns="repeat(auto-fit, minmax(200px, 1fr))">
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
            </Grid>
          }
          border="default"
          footerDivider={true}
          footer={
            <div>
              <Button variant="primary">Primary Button</Button>
            </div>
          }
        />
      </GridItem>
      <GridItem as="aside" colSpan={3}>
        <Panel
          header="h2 header"
          panelContent={
            <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gridAutoRows="auto">
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
              <GridItem as="div" colSpan={1}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </GridItem>
            </Grid>
          }
          border="default"
          footerDivider={true}
          footer={
            <div>
              <Button variant="primary">Primary Button</Button>
            </div>
          }
        />
      </GridItem>
      <GridItem as="div" colSpan={12}>
        <Footer
          links={[
            { label: 'Terms and Conditions ', url: '#' },
            { label: 'Privacy Policy ', url: '#' },
          ]}
          supportPhone="(800) 999 9999"
        />
      </GridItem>
    </Grid>
  ),
};
