import { getPluginsDirectory } from 'rotonde-util-config-manager';
import utilInstallPlugins from 'rotonde-util-plugin-manager';
import { getPlugins } from './config';

export default function installPlugins() {
  return utilInstallPlugins(getPluginsDirectory(), getPlugins());
}
