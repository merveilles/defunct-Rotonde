import connectFactory from './connect';
import createFactory from './create';
import pluginsFactory from './plugins';

/**
 * Registers commands with Vorpal.
 *
 * @param vorpal The Vorpal instance.
 */
export default function registerCommands(vorpal) {
  const commandFactories = [
    connectFactory,
    createFactory,
    pluginsFactory
  ];
  commandFactories.forEach(commandFactory => {
    commandFactory(vorpal);
  });
}
