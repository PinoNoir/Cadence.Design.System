# Stretto Cadence Design System - Tokens

This project is a [Style Dictionary](https://github.com/amzn/style-dictionary) configuration to generate design tokens for _Cadence Design System_.

**Notice**: _This code has been customized to output JS, CSS Custom Properties, & SCSS Variables. To view all the possible Style Dictionary configurations visit [API methods](https://amzn.github.io/style-dictionary/#/api)._

## Initial setup

Install the project dependencies via the CLI command:

```text
pnpm install
```

## Project structure

Project file and folder structure:

- `/tokens` contains the design token input JSON files (IMPORTANT! Only edit these files!)
- `/lib` contains the generated output files (This version is configured to output JS, CSS, & SCSS)
- `sd.config.js` contains the build script used to parse the json files and generate the final output files

## Running the project

You can build the design tokens from the `/tokens/` folder by running:

```text
pnpm build-tokens
```

You can automatically re-build the tokens at every change by running:

```text
pnpm watch
```

The generated tokens are saved in the `/lib` folder, and organised by target platform.

## License

This project is under [MIT license]
