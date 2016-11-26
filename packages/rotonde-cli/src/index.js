import Vorpal from 'vorpal';
import { installPlugins } from 'rotonde-util-plugin-manager';
import { getPlugins, getPluginsDirectory } from './config';
import { registerCommands } from './commands';

installPlugins(getPluginsDirectory(), getPlugins());

const vorpal = Vorpal();
registerCommands(vorpal);
vorpal.show();
