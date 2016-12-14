# egghead.io Style Guide

This repo serves two purposes:
- [The npm library for egghead official style guide components](https://www.npmjs.com/package/egghead-io-styleguide)
- [A storybook app - living style guide that uses the styleguide library](https://styleguide.egghead.io)

---

# Usage

```
import {ComponentName} from 'egghead-io-styleguide'
```

View [the storybook](https://styleguide.egghead.io) for visual examples and full API documentation]

---

## Development

# Getting started

## Dependencies

- Git
- Node
- Yarn

## Process

- `yarn` to install latest packages.
- `yarn dev` to develop (starts storybook, lints, and compiles).
- Open `localhost:2000` to view storybook while developing.
- `yarn test` to run tests.
- Edit `src/components/ComponentName`:
  - `index.js` defines and exports component.
  - `index.examples.js` uses component in the storybook.
  - `index.test.js` uses component in snapshot tests.
- Edit `src/index.js` to export components with the npm library.
- Submit pull requests:
  - Runs continuous integration in Codeship to ensure builds and tests pass (TODO, should run `yarn verify`).
  - Once merged, continuous deployment runs in Codeship
    - Publishes a new version of the npm library (TODO, could use `np` library by Sindre Sorhus).
    - Deploys the latest storybook to [styleguide.egghead.io](https://styleguide.egghead.io) (TODO, run `yarn build:storybook` then deploy the built `storybook-static` directory it creates).

### Styles

Styling is done with the [tachyons-egghead](TODO), the egghead fork of Tachyons classes. The `*-ns` (not small) classes are used to apply anything specific to non-mobile screen sizes, so that all components are built mobile-first.

### Tests

Modules and components that could benefit from tests have an `index.test.js` file next to them. These are generally simple unit or snapshot tests where they provide value.
The `SnapshotFixtures` file provides **static** fixtures that can be used for the props of the components of snapshot test files.

### Style Guide

Components that are exported (part of the storybook) have an `index.examples.js` file next to them. This means they are automatically added to the storybook (currently via React Storybook).
The `faker` package provides **random** fixtures that can be used for the props of the components of guide files.
The `GuideVariations` component can be used to render variations of a component.
