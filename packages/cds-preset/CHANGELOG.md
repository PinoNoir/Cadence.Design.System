# @stretto/cds-preset

## 1.1.3

### Patch Changes

- - Added requirements for FileUploader listed in https://jira.stretto.com/browse/RIO-47184
  - Included example Story for FileUploader using new props
  - Included additional error handling in FileCard component
  - Fixed issues with Icon component (Ready for use)
  - Added automation-id-hoc utility to test in LegalNoticing project for adding automation ids
  - Fixed minor CSS issues in varios components

## 1.1.2

### Patch Changes

- - Added onFileValidationFailure optional prop to FileUploader
  - Added new enum entry to FileStatus enum type
  - Added new enum type for file validation error type
  - Updated Existing code for validations in FileUploader
  - Deleted Unused props on FileUploader
  - Fixed disabled state and CSS on FileUploader
  - Rearranged stories in Storybook Sidebar Nav

## 1.1.1

### Patch Changes

- - Fixed the sort icon animation in the Table and mapped it to be controlled by the sortDirection prop
  - The Table sort icon will only appear when the isSortable prop is added to the column array and set to true
  - Added a width prop to the table columns array to control individual column width
  - Replaced the display "inline-flex" CSS property on panel content with "flex" and added a flexDirection prop
  - Adjusted Jest config and tsconfig for ui tests

## 1.1.0

### Minor Changes

- Fixed issues and added sort functionality to Table component (possible breaking changes to API – check storybook example for implementation)
  Fixed issues and separated logic and placed into each FileUploader subcomponent (possible breaking changes to API – check storybook example for implementation)
  Fixed type size on Toast component (12px)
  Fixed CSS across various components

  Addded typings across various components
  Added Accordion component and Jest tests
  Added useAutomationId function to add unique ids to any DOM element/component

## 1.0.7

### Patch Changes

- Fixed table Zebra striping on Table component and selected row state
  Improved performance of search functionality using debounce from lodash and useMemo hook
  Moved state for row selection and local storage to TableContext.tsx file to improve performance and maintainability
  Improved table generic types to allow for more flexibility in data types
  Added automationId prop to all Table sub-components
  Increased size of search icon in SearchInput component
  Reverted all CDS typography values/tokens back to proposed changes to BCC made by design team (Figma is correct)

## 1.0.6

### Patch Changes

- Updated storybook documentation for cureent build of CDS design tokens/css custom properties and developer guide

## 1.0.5

### Patch Changes

- ff028b8: Fixed various CSS bugs

## 1.0.4

### Patch Changes

- 5a2fa93: Removed overflow-x: auto css property on Panel component, causing unexpected ui bug

## 1.0.3

### Patch Changes

- - Fixed exports in TableContext.tsx file so that it can be used without issues
  - Fixed the defaultSelected prop on the radio component, refactored logic, and fixed CSS styling issues
  - Added Icon component (Ready for use in next minor release)

## 1.0.2

### Patch Changes

- - Fixed bug found in Storybook causing it not to render or build
  - Modified scripts in root package.json\

## 1.0.1
