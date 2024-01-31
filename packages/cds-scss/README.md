# Stretto Cadence Design System - SCSS

This is a custom Dart SASS project using a slightly modified version of the 7 in 1 architecture built for _Cadence Design System_.

## Initial setup

Install the project dependencies via the CLI command:

```text
pnpm install
```

## Project structure

Project file/folder structure:

- `/src` contains all related SCSS partial files
- `/lib` contains the compiled CSS files (This workspace is configured to output expanded and prefixed CSS)
- Check the `package.json` file for the build/dev scripts used to generate the compiled CSS

## Editing the SCSS files

• Edit the SCSS files as needed and run pnpm lint to adhere to the stylelint config and Design System guidelines.

## Running the project

You can watch for changes in the `src/` folder by running:

```text
pnpm watch
```

You can compile the SCSS into CSS and build the design tokens(cds-foundations) by running:

```text
pnpm build
```

The SCSS will be compiled into CSS in the `/lib` folder.

## License

This project is under [MIT license]
