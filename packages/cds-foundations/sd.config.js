module.exports = {
  format: {
    // Adding a custom format to show how to get an alias's name.
    customFormat: function ({ dictionary, options }) {
      return dictionary.allTokens
        .map((token) => {
          let value = JSON.stringify(token.value);
          // new option added to decide whether or not to output references
          if (options.outputReferences) {
            // the `dictionary` object now has `usesReference()` and
            // `getReferences()` methods. `usesReference()` will return true if
            // the value has a reference in it. `getReferences()` will return
            // an array of references to the whole tokens so that you can access its
            // name or any other attributes.
            if (dictionary.usesReference(token.original.value)) {
              const reference = dictionary.getReferences(token.original.value);
              value = reference.name;
            }
          }

          return `export const ${token.name} = ${value};`;
        })
        .join('\n');
    },
  },

  source: ['src/tokens/**/*.json'],
  platforms: {
    'js-src': {
      transformGroup: 'js',
      transforms: ['color/hsl'],
      buildPath: 'src/tokens/js/',
      files: [
        {
          name: 'tokens',
          destination: 'tokens.js',
          format: 'javascript/module',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      transforms: ['name/cti/kebab', 'color/hsl'],
      buildPath: 'lib/css/',
      prefix: 'cds',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true, // new setting, if true will use variable references
          },
        },
      ],
    },
    // Web output in scss format
    scss: {
      transformGroup: 'scss',
      transforms: ['name/cti/kebab', 'color/hsl'],
      buildPath: 'lib/scss/',
      prefix: 'cds',
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true, // new setting, if true will use variable references
          },
        },
      ],
    },
  },
};
