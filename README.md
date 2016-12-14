# egghead.io Style Guide

---

# Getting started

## Dependencies

- Git
- Node
- Yarn

## Scripts

- `yarn` to install latest packages.
- `yarn dev` to develop (opens style guide examples page, lints, and compiles).
- `yarn test` to run tests.

---

# Stack

- **Package management:** Yarn
- **Scripts:** Yarn
- **JS Flavor:** ES2016+ \*
- **Components:** React \*
- **Module Bundling:** Webpack \*
- **Transpilation:** Babel \*
- **Linting:** ESLint \*
- **Tests:** Jest \*
- **Living Style Guide Examples:** React StoryBook \*
- **Styles:** Tachyons fork with egghead customizations
- **Fake API:** JSON Server + Faker
- **Continuous Integration:** Codeship (TODO)
- **Deployment:** Heroku \* (TODO)

_\* Relies on `create-react-app` setup_

---

# Structure

Along with typical repo root files, you'll find some custom files and directories:

- `src/index.js`: exports the public API for apps that consume egghead style guide components. (TODO)
- `src/components/`: holds all the components.
- `.storybook/`: used by React Storybook to build the living style guide examples; generally read-only.

### Components

Each directory inside `src/components/` is a **component**.

A component is a directory organized _by feature_. It looks like this:

```
index.js
components/ (optional)
utils/ (optional)
```

- `index.js`: entry point; usually a stateless function component.
- `components/`: optional, sub-components.
- `utils/`: optional, module modules used by components.

### Styles

Styling is done with the egghead fork of Tachyons classes. The `*-ns` (not small) classes are used to apply anything specific to non-mobile screen sizes, so that all components are built mobile-first.

### Tests

Modules and components that could benefit from tests have an `index.test.js` file next to them. These are generally simple unit or snapshot tests where they provide value.
The `SnapshotFixtures` file provides **static** fixtures that can be used for the props of the components of snapshot test files.

### Style Guide

Components that are exported (part of the living style guide) have an `index.examples.js` file next to them. This means they are automatically added to the living style guide examples page (via React Storybook).
The `faker` package provides **random** fixtures that can be used for the props of the components of guide files.
The `GuideVariations` component can be used to render variations of a component.

---

# Pull Requests

- Create a feature branch off of `master`.
- Submit a pull request to `master`.
- Continuous integration runs automatically. (TODO, should run `yarn verify`)
- Merge pull request.
- Continuous deployment runs automatically to deploy the living style guide examples. (TODO, should run `yarn build` and deploy the folder it creates)
- Admin releases latest component library to npm. (TODO, need to set up `npm publish` to publish exported API that gets built to the `/build` folder)
