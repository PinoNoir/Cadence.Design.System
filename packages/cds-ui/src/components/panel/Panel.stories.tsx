import { Icon } from '@iconify/react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Grid, GridItem, SectionAlert, TextInput } from '../';
import Panel, { PanelProps } from './Panel';
import Tooltip from '../tooltip/Tooltip';

const meta: Meta<typeof Panel> = {
  title: 'Components/Panel',
  component: Panel,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  argTypes: {
    border: {
      control: {
        options: ['default', 'blank'],
        mapping: ['default', 'blank'],
        type: 'select',
        labels: ['Default', 'Blank'],
      },
    },
    footer: {
      table: {
        disable: true,
      },
    },
    panelContent: {
      table: {
        disable: true,
      },
    },
    sectionAlert: {
      table: {
        disable: true,
      },
    },
    header: {
      table: {
        disable: true,
      },
    },
    headerIcon: {
      table: {
        disable: true,
      },
    },
    footerDivider: {
      table: {
        disable: true,
      },
    },
    flexDirection: {
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  render: (args: PanelProps) => (
    <Panel
      header="h2 header"
      flexDirection="column"
      panelContent={
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      }
      footerDivider={args.footerDivider}
      border={args.border}
    />
  ),
};

export const withFooter: Story = {
  render: (args: PanelProps) => (
    <Panel
      header="h2 header"
      panelContent={
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      }
      border={args.border}
      footer={
        <div>
          <Button variant="primary">Primary Button</Button>
        </div>
      }
    />
  ),
};

export const withFooterDivider: Story = {
  render: (args: PanelProps) => (
    <Panel
      {...args}
      header="h2 header"
      panelContent={
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      }
      border="default"
      footerDivider={true}
      footer={
        <div>
          <Button variant="primary">Primary Button</Button>
        </div>
      }
    />
  ),
};

const createTooltip = () => (
  <Tooltip description="Tooltip Content">
    <Icon icon="mdi:information" width="20px" color="var(--cds-icon-color-dark)" />
  </Tooltip>
);

export const withHeaderIconAndTooltip: Story = {
  render: (args: PanelProps) => (
    <Panel
      {...args}
      header="h2 header"
      headerIcon={createTooltip()}
      panelContent={
        <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gridAutoRows="auto">
          <GridItem as="div" colSpan={1}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </GridItem>
          <GridItem as="div" colSpan={1}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </GridItem>
          <GridItem as="div" colSpan={1}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
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
  ),
};

export const WithSectionAlert: Story = {
  render: (args: PanelProps) => (
    <Panel
      {...args}
      header="h2 header"
      sectionAlert={<SectionAlert variant="info" message="This is a section alert info message." state="Info" />}
      panelContent={
        <Grid columns={4}>
          <GridItem as="div" colSpan={4}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </GridItem>
          <GridItem as="div" colSpan={2}>
            <TextInput id="text-input-1" type="text" labelText="Label text" helperText="Optional help text" />
          </GridItem>
          <GridItem as="div" colSpan={2}>
            <TextInput id="text-input-2" type="text" labelText="Label text" helperText="Optional help text" />
          </GridItem>
          <GridItem as="div" colSpan={2}>
            <TextInput id="text-input-3" type="text" labelText="Label text" helperText="Optional help text" />
          </GridItem>
          <GridItem as="div" colSpan={2}>
            <TextInput id="text-input-4" type="text" labelText="Label text" helperText="Optional help text" />
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
  ),
};
