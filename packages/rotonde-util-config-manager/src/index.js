import os from 'os';
import path from 'path';
import fs from 'fs-extra';

let config = {};

/**
 * Initializes the config.
 *
 * @param defaultConfig The default configuration.
 */
export function initializeConfig(defaultConfig = {}) {
  const configPath = getConfigPath();
  const configFileExists = fs.existsSync(configPath);
  if (!configFileExists) {
    saveConfig(defaultConfig);
  }
  const contents = fs.readFileSync(configPath, 'utf8');
  config = Object.assign({}, config, JSON.parse(contents));
}

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
  const pluginsDirectory = '.rotonde_plugins';
  if (process.env.NODE_ENV === 'development') {
    return path.join(__dirname, `../${pluginsDirectory}`);
  }
  return path.join(os.homedir(), pluginsDirectory);
}

/**
 * Adds the specified plugin to the config.
 *
 * @param plugin The plugin to add.
 */
export function addPlugin(plugin) {
  config.plugins = addPluginHelper(config.plugins, plugin);
  saveConfig(config);
}

/**
 * Adds the specified local plugin to the config.
 *
 * @param plugin The plugin to add.
 */
export function addLocalPlugin(plugin) {
  config.localPlugins = addPluginHelper(config.localPlugins, plugin);
  saveConfig(config);
}

/**
 * Returns the list of plugins after adding the specified plugin.
 *
 * @param plugins The list of plugins.
 * @param plugin The plugin to add.
 */
function addPluginHelper(plugins, plugin) {
  if (plugins.indexOf(plugin) !== -1) {
    return plugins;
  }
  return [...plugins, plugin].sort();
}

/**
 * Removes the specified plugin from the config.
 *
 * @param plugin The plugin to remove.
 */
export function removePlugin(plugin) {
  config.plugins = removePluginHelper(config.plugins, plugin);
  saveConfig(config);
}

/**
 * Removes the specified local plugin from the config.
 *
 * @param plugin The plugin to remove.
 */
export function removeLocalPlugin(plugin) {
  config.localPlugins = removePluginHelper(config.localPlugins, plugin);
  saveConfig(config);
}

/**
 * Returns the list of plugins after removing the specified plugin.
 *
 * @param plugins The list of plugins.
 * @param plugin The plugin to remove.
 */
function removePluginHelper(plugins, plugin) {
  const pluginIndex = plugins.indexOf(plugin);
  if (pluginIndex === -1) {
    return plugins;
  }
  return [
    ...plugins.slice(0, pluginIndex),
    ...plugins.slice(pluginIndex + 1)
  ].sort();
}
