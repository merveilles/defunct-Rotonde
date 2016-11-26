import path from 'path';
import { initializeConfig, getConfig, getPluginsDirectory } from 'rotonde-util-config-manager';

const defaultConfig = {
  plugins: [],
  localPlugins: []
};

initializeConfig(defaultConfig);

/**
 * Returns the list of plugins.
 */
export function getPlugins() {
  return getConfig().plugins;
}

/**
 * Returns the path to the local plugins directory.
 */
export function getLocalPluginsDirectory() {
  return path.join(getPluginsDirectory(), 'local');
}

/**
 * Returns the list of local plugins.
 */
export function getLocalPlugins() {
  return getConfig().localPlugins;
}
