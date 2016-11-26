import { addPlugin, addLocalPlugin, removePlugin } from 'rotonde-util-config-manager';
import { getAllPlugins } from '../config';
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
    .option('-a, --adapter <adapter>', 'Specify a specific client adapter.')
    .option('-l, --local', 'Installs a local plugin.')
    .alias('plugins i')
    .description('Installs a plugin.')
    .action(async function (args, callback) {
      const { plugin, options: { local, adapter } } = args;
      if (local) {
        addLocalPlugin(plugin);
        if (adapter) {
          addLocalPlugin(adapter);
        }
        return callback();
      }
      addPlugin(plugin);
      if (adapter) {
        addPlugin(adapter);
      }
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
      const { plugins, localPlugins } = getAllPlugins();
      this.log(`Installed Plugins (${plugins.length + localPlugins.length}):`);
      if (plugins.length > 0) {
        this.log(plugins.map(plugin => `    * ${plugin}`).join('\n'));
      }
      if (localPlugins.length > 0) {
        this.log(localPlugins.map(plugin => `    * (LOCAL) ${plugin}`).join('\n'));
      }
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
