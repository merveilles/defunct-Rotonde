import connectFactory from './connect';
import createFactory from './create';

/**
 * Registers commands with Vorpal.
 *
 * @param vorpal The Vorpal instance.
 */
export default function registerCommands(vorpal) {
  const commandFactories = [
    connectFactory,
    createFactory
  ];
  commandFactories.forEach(commandFactory => {
    commandFactory(vorpal);
  });
}
