import Vorpal from 'vorpal';
import registerCommands from './commands';

const vorpal = new Vorpal();
registerCommands(vorpal);
vorpal.show();
