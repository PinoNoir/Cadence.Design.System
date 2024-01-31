// Load Global CSS
import '@stretto/cds-scss/lib/global.css';
import '../src/vanilla-extract/global.css';

// Load Roboto fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [],
  parameters: {
    backgrounds: {
      default: 'BCC',
      values: [
        {
          name: 'BCC',
          value: '#f5f6fa',
        },
        {
          name: 'white',
          value: '#fff',
        },
      ],
    },
    options: {
      controls: { expanded: true, hideNoControlsWarning: true },
      storySort: {
        order: [
          'Getting Started',
          ['Welcome', 'Changelog', 'Developer Guide'],
          'Foundations',
          ['Styling', 'Design Tokens', '*'],
          'Layout',
          'Components',
          [
            'Accordion',
            'Badge',
            'Button',
            'Checkbox',
            'Data Table',
            'Dropdown',
            'File Uploader',
            'Footer',
            'Icon',
            'Label',
            'Link',
            'Loader',
            'Modal',
            'Panel',
            'Popover',
            'Progress Bar',
            '*',
          ],
        ],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
