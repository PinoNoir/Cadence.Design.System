# Stretto Cadence Design System - PandaCSS preset

This is a custom built PandaCSS preset for Best Case cloud.
Read the docs for PandaCSS [here](https://panda-css.com/ 'here').
Checkout the inspiration for this setup from one of the maintainer's of PandaCSS [here](https://github.com/astahmer/panda-monorepo 'here')

## Initial setup

Install the project dependencies via the CLI command:

```text
pnpm install
```

## Project structure

Project file/folder structure:

- `/preset-config` directory contains files with the respective token values used in the PandaCSS preset
- `/styled-system` directory is where the generated assets/css related to the panda.config.ts are generated
- `/dist` contains the compiled code
- Check the `package.json` file for the build/dev scripts used to generate the JS files

## Running the project

If changes need to be made to the `panda.config.ts` file you can generate the assets/css in the styled-system folder by running:

```text
pnpm codegen
```

After making any adjustments to the .ts files in the preset-config directory you can rebuild the dist folder by running:

```text
pnpm build
```

To build the dist folder and watch for changes in any of the .ts files run:

```text
pnpm watch
```

## License

This project is under [MIT license]
