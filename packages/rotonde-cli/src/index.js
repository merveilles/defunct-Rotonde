import Vorpal from 'vorpal';
import { registerCommands } from './commands';

const vorpal = Vorpal();
registerCommands(vorpal);
vorpal.show();
