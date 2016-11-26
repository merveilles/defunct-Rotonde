import { addPlugin, addLocalPlugin, removePlugin, getPlugins } from '../config';
import installPlugins from '../plugins';

/**
 * Registers the `plugins` commands.
 *
 * @param vorpal The Vorpal instance.
 */
export default function pluginsFactory(vorpal) {
  const { chalk } = vorpal;
  vorpal
    .command('plugins install <plugin>')
    .option('-l, --local', 'Installs a local plugin.')
    .alias('plugins i')
    .description('Installs a plugin.')
    .action(async function (args, callback) {
      const { plugin, options: { local } } = args;
      if (local) {
        addLocalPlugin(plugin);
        return callback();
      }
      addPlugin(plugin);
      try {
        await installPlugins();
      } catch (err) {
        this.log(chalk.red(err.message));
      }
      callback();
    });
  vorpal
    .command('plugins list')
    .alias('plugins ls')
    .description('Lists installed plugins.')
    .action(function (args, callback) {
      const plugins = getPlugins();
      this.log(`Installed Plugins (${plugins.length}):`);
      this.log(plugins.map(plugin => `    * ${plugin}`).join('\n'));
      callback();
    });
  vorpal
    .command('plugins remove <plugin>')
    .alias('plugins rm')
    .description('Removes a plugin.')
    .action(async function (args, callback) {
      const { plugin } = args;
      removePlugin(plugin);
      try {
        await installPlugins();
      } catch (err) {
        this.log(chalk.red(err.message));
      }
      callback();
    });
}
