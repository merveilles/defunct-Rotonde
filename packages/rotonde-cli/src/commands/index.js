import { connectFactory } from './connect';

/**
 * Registers commands with Vorpal.
 *
 * @param vorpal The Vorpal instance.
 */
export function registerCommands(vorpal) {
  const commandFactories = [
    connectFactory
  ];
  commandFactories.forEach(commandFactory => {
    commandFactory(vorpal);
  });
}
