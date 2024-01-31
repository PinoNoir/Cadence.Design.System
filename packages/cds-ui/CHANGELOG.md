# @stretto/cds-ui

## 1.4.4

### Patch Changes

#### Bug Fixes:

- Added requirements for FileUploader listed in https://jira.stretto.com/browse/RIO-47184
- Fixed issues with Icon component (Ready for use)
- Fixed minor CSS issues in various components

#### New Features
- Added automation-id-hoc utility to test in LegalNoticing project for adding automation ids
- Included example Story for FileUploader using new props
- Included additional error handling in FileCard component

#### Updated dependencies
- @stretto/cds-scss@1.4.4

## 1.4.3

### Patch Changes

#### Bug Fixes:

- Removed display flex from panel content, causing unexpected behavior when the browser was resized.

#### Updated dependencies:

- @stretto/cds-scss@1.4.3

## 1.4.2

### Patch Changes

#### Bug Fixes:

- Deleted Unused props on FileUploader
- Fixed disabled state and CSS on FileUploader

#### New Features:

- Added onFileValidationFailure optional prop to FileUploader
- Added new enum entry to FileStatus enum type
- Added new enum type for file validation error type
- Updated Existing code for validations in FileUploader
- Rearranged stories in Storybook Sidebar Nav\

#### Updated dependencies:

- @stretto/cds-scss@1.4.2

## 1.4.1

### Patch Changes

#### Bug Fixes:

- Fixed the sort icon animation in the Table and mapped it to be controlled by the sortDirection prop
- Replaced the display "inline-flex" CSS property on panel content with "flex" and added a flexDirection prop

#### New Features:

- The Table sort icon will only appear when the isSortable prop is added to the column array and set to true
- Added a width prop to the table columns array to control individual column width

#### Internal Changes:

- Adjusted Jest config and tsconfig for ui tests

#### Updated dependencies:

- @stretto/cds-scss@1.4.1

## 1.4.0

### Minor Changes

#### Bug Fixes:

- Fixed issues and added sort functionality to Table component (possible breaking changes to API – check storybook example for implementation)
- Fixed issues and separated logic and placed into each FileUploader subcomponent (possible breaking changes to API – check storybook example for implementation)
- Fixed type size on Toast component (12px)
- Fixed CSS across various components

#### New Features:

- Addded typings across various components
- Added Accordion component and Jest tests
- Added useAutomationId function to add unique ids to any DOM element/component

### Patch Changes

- @stretto/cds-scss@1.4.0

## 1.3.0

### Minor Changes

#### Bug Fixes:

- Refactored Table component and all sub-components, fixed bugs
- Refactored File uploader and all sub-components, fixed bugs
- Fixed minor styling bugs on Table, FileUploader, ProgressBar, Modal, Panel, Tabs and all sub-components

#### New Features:

- Added useCustomTableApi hook
- Added typings to Table and FileUploader

### Patch Changes

- @stretto/cds-scss@1.3.0

## 1.2.3

### Patch Changes

#### Bug Fixes:

- Fixed JSON parsing error in TableContext.tsx

#### Updated dependencies:

- @stretto/cds-scss@1.2.3

## 1.2.2

### Patch Changes

#### Bug Fixes:

- Fixed table Zebra striping on Table component and selected row state
- Improved performance of search functionality using debounce from lodash and useMemo hook
- Moved state for row selection and local storage to TableContext.tsx file to improve performance and maintainability
- Improved table generic types to allow for more flexibility in data types
- Added automationId prop to all Table sub-components
- Increased size of search icon in SearchInput component
- Reverted all CDS typography values/tokens back to proposed changes to BCC made by design team (Figma is correct)

#### Updated dependencies:

- @stretto/cds-scss@1.2.2

## 1.2.1

### Patch Changes

- Updated storybook documentation for current build of CDS design tokens/css custom properties and developer guide
- Updated dependencies
  - @stretto/cds-scss@1.2.1

## 1.2.0

### Minor Changes

#### Bug Fixes:

- Added correct typography tokens throughout codebase to match BCC
- Applied Typography tokens to Text component
- Fixed various CSS styling issues & optimized component APIs

#### New Features:

- Added New TabGroup Component for use in LNBCC project

### Patch Changes

- Updated dependencies
  - @stretto/cds-scss@1.2.0

## 1.1.4

### Patch Changes

#### Bug Fixes:

- Fixed various CSS bugs

#### Updated dependencies:

- @stretto/cds-scss@1.1.4

## 1.1.3

### Patch Changes

#### Bug Fixes:

- Removed overflow-x property on the Panel components Content section/prop, causing unexpected ui bug

#### Updated dependencies:

- @stretto/cds-scss@1.1.3

## 1.1.2

### Patch Changes

#### Bug Fixes:

- Removed overflow-x: auto css property on Panel component, causing unexpected ui bug
- Fixed line height for small text size on Text component

#### Updated dependencies:

- @stretto/cds-scss@1.1.2

## 1.1.1

### Patch Changes

#### Bug Fixes:

- Fixed exports in the TableContext.tsx file
- Fixed exports in the FileUploadContext.tsx file
- Fixed various CSS styling issues & optimized component APIs

#### New Features:

- Added a custom automation-id react prop to all available components for automated testing

#### Updated dependencies:

- @stretto/cds-scss@1.1.1

## 1.1.0

### Minor Changes

#### Bug Fixes:

- Fixed exports in the TableContext.tsx file so the useTableContext function doesn't throw errors
- Fixed the defaultSelected prop on the Radio Button component, refactored logic, and fixed CSS styling issues
- Fixed various CSS styling issues & optimized component APIs

#### New Features:

- Added Icon component (Ready for use in next minor release - 1.2.0)

#### Updated dependencies:

- @stretto/cds-scss@1.1.0

## 1.0.6

### Patch Changes

#### Bug Fixes:

- Fixed broken paths in Storybook that static assets (fonts, images, icons) were pointing to

#### New Features:

- Added style prop to Divider component to support LN project needs
- Added Progress Bar component (Ready for use in development only)

#### Updated dependencies:

- @stretto/cds-scss@1.0.6

## 1.0.5

### Patch Changes

#### Internal Changes:

- Added staticDirs property in Main.tsx (Storybook config) for loading static assets (fonts, images, icons)

#### Bug Fixes:

- Fixed Text component props (cleared error message in storybook)

#### New Features:

- Added additional props to Toggle component to support LN project needs also changed the name to "Switch"
- Added additional types to Grid component(s) to support LN project needs
- Updated Progress Bar component (Coming Soon!)

#### Updated dependencies:

- @stretto/cds-scss@1.0.5

## 1.0.4

### Patch Changes

#### Bug Fixes:

- Fixed broken links to resources in Storybook
- Updated CSS styling on several components

#### New Features:

- Added FileUploader component to bundle (For development use only)
- Added DataTable component to bundle (For development use only)

#### Updated dependencies:

- @stretto/cds-scss@1.0.4

## 1.0.3

### Patch Changes

#### Internal:

- Separated layout components from the layout directory (All components can be found in the src/components folder).

#### Bug Fixes:

- Fixed ESLint errors in FileUploader component

#### New Features:

- Improved Avatar component API
- Added stricter typings to FileUploader component
- Added controls in FileUploader storybook instance

#### Updated dependencies:

- @stretto/cds-scss@1.0.3

## 1.0.2

### Patch Changes

#### Bug Fixes:

- Fixed bug found in Storybook causing it not to render or build

#### Internal:

- Modified scripts in root package.json

#### Updated dependencies:

- @stretto/cds-scss@1.0.2

## 1.0.1

### Patch Changes

#### New Features:

- Added new grid functionality and new component features

#### Updated dependencies:

- @stretto/cds-scss@1.0.1
