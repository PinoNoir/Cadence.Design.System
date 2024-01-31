import { Icon } from '@iconify/react';
import type { Meta } from '@storybook/react';
import { Dropdown, DropdownMenu, DropdownMenuItem, DropdownTrigger } from '../dropdown';
import { Link } from '../link';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  argTypes: {
    colorMode: {
      options: ['light', 'dark'],
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: 'object',
      },
    },
  },
};
export default meta;

const createContextMenu = () => (
  <Dropdown>
    <DropdownTrigger>
      <Icon icon="mdi:dots-vertical" fontSize={'24px'} />
    </DropdownTrigger>
    <DropdownMenu>
      <DropdownMenuItem>
        <Icon icon="mdi:content-save" />
        Save
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon icon="mdi:printer" />
        Print
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon icon="mdi:download" />
        Download
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon icon="mdi:delete" />
        Delete
      </DropdownMenuItem>
    </DropdownMenu>
  </Dropdown>
);

export const LightAccordion = () => {
  return (
    <Accordion colorMode="light">
      <AccordionItem
        id="accordion-item-1"
        open={false}
        title="h5 Title"
        description="Supporting Text"
        link={<Link href="#">Text Link</Link>}
        contextMenu={createContextMenu()}
      >
        <p>Accordion Content 1</p>
      </AccordionItem>
      <AccordionItem
        id="accordion-item-2"
        open={false}
        title="h5 Title"
        description="Supporting Text"
        link={<Link href="#">Text Link</Link>}
        contextMenu={createContextMenu()}
      >
        <p>Accordion Content 2</p>
      </AccordionItem>
    </Accordion>
  );
};

export const DarkAccordion = () => {
  return (
    <Accordion colorMode="dark">
      <AccordionItem
        id="accordion-item-1"
        open={false}
        title="h5 Title"
        description="Supporting Text"
        link={<Link href="#">Text Link</Link>}
        contextMenu={createContextMenu()}
      >
        <p>Accordion Content 1</p>
      </AccordionItem>
      <AccordionItem
        id="accordion-item-2"
        open={false}
        title="h5 Title"
        description="Supporting Text"
        link={<Link href="#">Text Link</Link>}
        contextMenu={createContextMenu()}
      >
        <p>Accordion Content 2</p>
      </AccordionItem>
    </Accordion>
  );
};
