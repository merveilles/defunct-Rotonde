import Vorpal from 'vorpal';
import { installPlugins } from './plugins';
import { registerCommands } from './commands';

installPlugins().then(() => {
  const vorpal = Vorpal();
  registerCommands(vorpal);
  vorpal.show();
}).catch(err => {
  console.error(err);
});
