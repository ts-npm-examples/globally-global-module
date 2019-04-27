# Globally global module
A module that defines global types that any project can use if it imports this module at least once.

## What are global types
A `.ts` file that doesn't contain any `import`s and `export`s is recognized as a script (rather than a module) and everything defined there is available globally in all files. It is common practice to use scripts that only contain type definitions, so that types that are used frequently across the project don't need to be imported every time.

## Clone
1. Clone with `git clone git@github.com:ts-npm-examples/globally-global-module.git`
2. Populate node_modules with `yarn`
3. Build with `yarn build`
4. Test with `yarn test`

## Use as module
Install this module using `yarn add @ts-npm-examples/globally-global-module` or `npm i @ts-nmp-examples/globally-global-module`. You can use the module in both JavaScript and TypeScript projects. The types in `src/types.ts` will become globally available across your project once you `import` anything from the module.