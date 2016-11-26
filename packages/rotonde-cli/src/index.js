import Vorpal from 'vorpal';
import installPlugins from './plugins';
import registerCommands from './commands';
import registerClientAdapters from './client-adapters';

installPlugins().then(() => {
  const vorpal = new Vorpal();
  registerCommands(vorpal);
  registerClientAdapters(vorpal);
  vorpal.show();
}).catch(err => {
  console.error(err);
});
