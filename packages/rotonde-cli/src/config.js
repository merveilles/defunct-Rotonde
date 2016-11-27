import path from 'path';
import { homedir } from 'os';
import { initializeConfig, getConfig, getPluginsDirectory } from 'rotonde-util-config-manager';
import { PLUGIN_TYPE } from 'rotonde-plugin';

const configDirectory = process.env.NODE_ENV === 'development' ? path.join(__dirname, '../') : homedir();
const defaultConfig = {
  plugins: [],
  localPlugins: []
};

initializeConfig(configDirectory, defaultConfig);

/**
 * Returns the list of plugins.
 */
export function getPlugins() {
  return getConfig().plugins;
}

/**
 * Returns the list of local plugins.
 */
export function getLocalPlugins() {
  return getConfig().localPlugins;
}

/**
 * Returns all of the plugins.
 */
export function getAllPlugins() {
  return {
    plugins: getPlugins(),
    localPlugins: getLocalPlugins()
  };
}

export function getPluginPaths() {
  return {
    plugins: getPlugins().map(name => path.resolve(getPluginsDirectory(), 'node_modules', name.split('#')[0])),
    localPlugins: getLocalPlugins().map(name => path.resolve(__dirname, '../', name))
  };
}

export function loadPlugin(plugin) {
  try {
    // eslint-disable-next-line import/no-dynamic-require
    return require(plugin);
  } catch (err) {
    return undefined;
  }
}

export function loadPlugins() {
  const { plugins, localPlugins } = getPluginPaths();
  return [...plugins, ...localPlugins]
    .map(loadPlugin)
    .filter(plugin => Boolean(plugin));
}

export function getClientAdapters(plugins) {
  return plugins.filter(plugin => plugin.TYPE === PLUGIN_TYPE.CLIENT_ADAPTER);
}

export function loadClientAdapters() {
  return getClientAdapters(loadPlugins());
}
