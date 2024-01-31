import { defineLayerStyles } from '@pandacss/dev';
import type { LayerStyles } from '@pandacss/types';

export const layerStyles: LayerStyles = defineLayerStyles({
  container: {
    description: 'container styles',
    value: {
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: 'neutral.20',
    },
  },
});
