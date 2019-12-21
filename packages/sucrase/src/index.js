const fs = require('fs');
const path = require('path');

const { transform } = require('sucrase');
const { createFilter } = require('rollup-pluginutils');

module.exports = function sucrase(opts = {}) {
  const filter = createFilter(opts.include, opts.exclude);

  return {
    name: 'sucrase',

    // eslint-disable-next-line consistent-return
    resolveId(importee, importer) {
      if (importer && importee[0] === '.') {
        const resolved = path.resolve(importer ? path.dirname(importer) : process.cwd(), importee);

        if (!fs.existsSync(resolved) && fs.existsSync(`${resolved}.ts`)) {
          return `${resolved}.ts`;
        }
      }
    },

    transform(code, id) {
      if (!filter(id)) return null;

      const result = transform(code, {
        transforms: opts.transforms,
        jsxPragma: opts.jsxPragma,
        jsxFragmentPragma: opts.jsxFragmentPragma,
        enableLegacyTypeScriptModuleInterop: opts.enableLegacyTypeScriptModuleInterop,
        enableLegacyBabel5ModuleInterop: opts.enableLegacyBabel5ModuleInterop,
        production: opts.production,
        filePath: id,
        sourceMapOptions: {
          compiledFilename: id
        }
      });
      return {
        code: result.code,
        map: result.sourceMap
      };
    }
  };
};
