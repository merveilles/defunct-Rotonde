/**
 * This script cleans up all of the `package.json` files across various packages.
 * Its main purpose is to remove duplicate `devDependencies` after running `lerna bootstrap`.
 */

const fs = require('fs');
const path = require('path');

const packagesDirectory = path.join(__dirname, '../packages');
fs.readdir(packagesDirectory, (err, packages) => {
  if (err) {
    throw err;
  }
  packages
    .map(packageName => path.resolve(packagesDirectory, packageName, 'package.json'))
    .map(filename => fs.readFileSync(filename, 'utf8'))
    .map(contents => JSON.parse(contents))
    .map(deduplicateDevDependencies)
    .forEach(packageJson => {
      const filename = path.resolve(packagesDirectory, packageJson.name, 'package.json');
      fs.writeFileSync(filename, JSON.stringify(packageJson, null, 2));
    });
});

/**
 * Deduplicates the dev dependencies by removing any dependency from the `dependencies` list that is also in `devDependencies`.
 *
 * @param packageJson The `package.json` contents to use.
 */
function deduplicateDevDependencies(packageJson) {
  const dependencies = packageJson.dependencies;
  const dependencyNames = Object.keys(dependencies || {});
  const devDependencyNames = Object.keys(packageJson.devDependencies || {});
  const devDependencyLookup = createLookupTable(devDependencyNames);
  const newDependencyNames = dependencyNames.filter(dependency => Boolean(devDependencyLookup[dependency]) === false);
  const newDependencies = newDependencyNames
    .sort()
    .reduce((deps, dependency) => {
      deps[dependency] = dependencies[dependency];
      return deps;
    }, {});
  packageJson.dependencies = newDependencies;
  return packageJson;
}

/**
 * Returns a lookup table, indicating whether the specified items are in the array.
 *
 * @param items The array from which to genereate the lookup table.
 */
function createLookupTable(items) {
  const lookup = {};
  items.forEach(item => {
    lookup[item] = true;
  });
  return lookup;
}
