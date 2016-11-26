import os from 'os';
import path from 'path';
import fs from 'fs-extra';

const defaultConfig = {
  plugins: [],
  localPlugins: []
};

let config = Object.assign({}, defaultConfig);

const configPath = getConfigPath();
const configFileExists = fs.existsSync(configPath);
if (!configFileExists) {
  fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
}
const contents = fs.readFileSync(configPath, 'utf-8');
config = Object.assign({}, config, JSON.parse(contents));

/**
 * Returns the path to the config file.
 */
function getConfigPath() {
  const configFile = '.rotonde.json';
  if (process.env.NODE_ENV === 'development') {
    return path.resolve(__dirname, `../${configFile}`);
  }
  return path.resolve(os.homedir(), configFile);
}

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