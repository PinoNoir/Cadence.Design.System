module.exports = {
  exclude: ['node_modules/**'],
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          chrome: 100,
        },
      },
    ],
    ["@babel/preset-react", { "runtime": "automatic" }],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-react-constant-elements',
  ],
};
