import { installPlugins as utilInstallPlugins } from 'rotonde-util-plugin-manager';
import { getPlugins, getPluginsDirectory } from './config';

export function installPlugins() {
  return utilInstallPlugins(getPluginsDirectory(), getPlugins());
}
