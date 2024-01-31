# Stretto Cadence Design System - React App Sandbox

This is a super simple React app bootstrapped with Vite used to test _Cadence Design System_ components from the cds-ui package, which is a linked pnpm workspace.

## Project structure

Project file/folder structure:

- `/src` contains all related react app files
- Check the `package.json` file for the build/dev scripts used to build/start the dev server for the app

## Importing & Testing Components from the @stretto/cds-ui Package

• Import components from the @stretto/cds-ui package using the normal esm syntax, i.e. `import { **component** } from '@stretto/cds-ui'`.
• Heads up! Since cds-ui is a linked workspace, anytime you run the build command in the packages/cds-ui workspace, you'll notice errors in the `App.tsx` file if you have it open in your IDE. This is because the cds-ui lib folder (entry point) is removed entirely and rebuilt each time the build command is executed, and is temporarily missing until it's completed, so sit back, relax, and give intellisense a second to find the library again.
• We recommend restarting the dev server to allow _Vite_ to rebuild the dependencies. You should see any visual changes made to your components updated in the browser and if changes have been made to the component's API, those should be picked up by typescript and itellesense in the `App.tsx` file.

## Running the project

Start the dev server by running

```text
pnpm dev
```

You test compilation by running:

```text
pnpm build
```

The app will be compiled in the `/dist` folder.

## License

This project is under [MIT license]
