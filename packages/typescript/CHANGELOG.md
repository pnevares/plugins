# @rollup/plugin-typescript changelog

## 2.0.0

_2019-11-25_

- **Breaking:** Minimum compatible Rollup version is 1.2.0
- **Breaking:** Minimum supported Node version is 8.0.0
- Published as @rollup/plugin-typescript

## 1.0.1

_2019-03-24_

- Update dependencies ([#136](https://github.com/rollup/rollup-plugin-typescript/issues/136))

## 1.0.0

_2018-09-16_

- Major update for TypeScript 2/3, Rollup 1 compatibility, lots of fixes ([#124](https://github.com/rollup/rollup-plugin-typescript/issues/124))
- Require TypeScript as peer dependency ([#121](https://github.com/rollup/rollup-plugin-typescript/issues/121))
- Also test on Node 10 ([#119](https://github.com/rollup/rollup-plugin-typescript/issues/119))
- Fix example in readme ([#98](https://github.com/rollup/rollup-plugin-typescript/issues/98))

## 0.8.1

- Ignore typescript-helpers in source maps ([#61](https://github.com/rollup/rollup-plugin-typescript/issues/61))

## 0.8.0

- Fix the rollup breaking change with paths ([#52](https://github.com/rollup/rollup-plugin-typescript/issues/52))
- Don't fail without source maps ([#57](https://github.com/rollup/rollup-plugin-typescript/pull/57))

## 0.7.7

- Add missing `__assign` helper ([#49](https://github.com/rollup/rollup-plugin-typescript/issues/49))

## 0.7.6

- Ignore the `declaration` option ([#45](https://github.com/rollup/rollup-plugin-typescript/issues/45))
- Disable `strictNullChecks` with a warning for TypeScript versions that don't support it ([#46](https://github.com/rollup/rollup-plugin-typescript/issues/46))

## 0.7.5

- Ensure NPM doesn't ignore typescript-helpers

## 0.7.4

- Resolve typescript-helpers to a file in the filesystem.

## 0.7.3

- Update Tippex to ^2.1.1

## 0.7.2

- Don't error if both `sourceMap` and `inlineSourceMap` are specified

## 0.7.1

- No plugin specific options should be forwarded to TypeScript

## 0.7.0

- Use `compilerOptions` from `tsconfig.json` if found ([#39](https://github.com/rollup/rollup-plugin-typescript/pull/32))

## 0.6.1

- Upgrade Tippex to ^2.1.0
- Upgrade TypeScript to ^1.8.9

## 0.6.0

- Upgrade to TypeScript ^1.8.7
- Update `__awaiter` helper to support TypeScript 1.8.x ([#32](https://github.com/rollup/rollup-plugin-typescript/pull/32))
- Update `ts.nodeModuleNameResolver` to support both 1.7.x and 1.8.x ([#31](https://github.com/rollup/rollup-plugin-typescript/issues/31))

## 0.5.0

- Do not duplicate TypeScript's helpers ([#24](https://github.com/rollup/rollup-plugin-typescript/issues/24))
- Handle `export abstract class` ([#23](https://github.com/rollup/rollup-plugin-typescript/issues/23))

## 0.4.1

- Does not attempt resolve or transform `.d.ts` files ([#22](https://github.com/rollup/rollup-plugin-typescript/pull/22))

## 0.4.0

- Work around TypeScript 1.7.5's transpilation issues ([#9](https://github.com/rollup/rollup-plugin-typescript/issues/9))
- Overridable TypeScript version when transpiling ([#4](https://github.com/rollup/rollup-plugin-typescript/issues/4))
- Add `jsx` support ([#11](https://github.com/rollup/rollup-plugin-typescript/issues/11))

## 0.3.0

- Author plugin in TypeScript
- Report diagnostics
- Resolve identifiers using `ts.nodeModuleNameResolver`

## 0.2.1

- Upgrade to TypeScript ^1.7.5
- Enable source maps per default

## 0.2.0

- Use (_prerelease version of_) TypeScript 1.7.0 to generate ES5 while preserving ES2015 imports for efficient bundling.

## 0.1.0

- Initial release
