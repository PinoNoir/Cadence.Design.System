import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { nodeExternals } from 'rollup-plugin-node-externals';
import typescript from 'rollup-plugin-typescript2';

const tsconfig = './tsconfig.json';
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
const sourceMap = true;

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  '@vanilla-extract/css': '@vanilla-extract/css',
};

export default [
  {
    input: ['./src/index.ts', './src/components/index.ts'],
    output: [
      {
        dir: 'lib',
        format: 'cjs',
        globals,
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        generatedCode: {
          constBindings: true,
        },
        exports: 'named',

        // Change .css.js files to something else so that they don't get re-processed by consumer's setup
        entryFileNames({ name }) {
          return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
        },

        // Apply preserveModulesRoot to asset names
        assetFileNames({ name }) {
          return name.replace(/^src\//, '');
        },
      },
    ],
    plugins: [
      nodeExternals(),
      resolve({
        extensions,
      }),
      typescript({
        tsconfig,
        useTsconfigDeclarationDir: true,
      }),
      babel({
        extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
        babelHelpers: 'bundled',
        exclude: ['node_modules/**', '**/*.css'],
        presets: ['@babel/preset-env', '@babel/preset-react'],
        sourceMap,
      }),
      commonjs(),
      vanillaExtractPlugin(),
      image(),
      terser(),
    ],
  },
];
