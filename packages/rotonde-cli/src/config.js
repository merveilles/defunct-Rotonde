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
  saveConfig(defaultConfig);
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
 * Saves the specified config to the config file.
 *
 * @param config The config to save.
 */
function saveConfig(config) {
  try {
    fs.writeFileSync(getConfigPath(), JSON.stringify(config, null, 2));
  } catch (err) {
    throw err;
  }
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

/**
 * Adds the specified plugin to the config.
 *
 * @param plugin The plugin to add.
 */
export function addPlugin(plugin) {
  const { plugins } = config;
  if (plugins.indexOf(plugin) !== -1) {
    return;
  }
  config.plugins = [...plugins, plugin].sort();
  saveConfig(config);
}
