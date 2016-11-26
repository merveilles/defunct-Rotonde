import utilInstallPlugins from 'rotonde-util-plugin-manager';
import { getPlugins, getPluginsDirectory } from './config';

export default function installPlugins() {
  return utilInstallPlugins(getPluginsDirectory(), getPlugins());
}
