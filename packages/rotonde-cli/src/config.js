import path from 'path';
import fs from 'fs-extra';

const defaultConfig = {
  plugins: [],
  localPlugins: []
};

let config = Object.assign({}, defaultConfig);

const configFile = path.join(__dirname, '../.rotonde.json');
const contents = fs.readFileSync(configFile, 'utf-8');
config = Object.assign({}, config, JSON.parse(contents));

/**
 * Returns the config.
 */
export function getConfig() {
  return config;
}

/**
 * Returns the path to the plugins directory.
 */
export function getPluginsDirectory() {
  return path.join(__dirname, '../.rotonde_plugins');
}

/**
 * Returns the list of plugins.
 */
export function getPlugins() {
  return getConfig().plugins;
}