import Client from 'socket.io-client';
import { NAMESPACES, MESSAGES } from 'rotonde-core-messages';

/**
 * Registers the `connect` command.
 *
 * @param vorpal The Vorpal instance.
 */
export default function connectFactory(vorpal) {
  vorpal
    .command('connect <instance>')
    .description('Connects to a Rotonde instance.')
    .action(function (args, callback) {
      const { instance } = args;
      const socket = new Client(`${instance}${NAMESPACES.ROTONDE_CORE}`);
      socket.on('connect', () => {
        this.log(`Connected to ${instance}`);
      });
      socket.on(MESSAGES.ROTONDE_CORE.ACKNOWLEDGE, payload => {
        console.log(payload);
      });
      callback();
    });
}
