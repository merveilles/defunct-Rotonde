import Client from 'socket.io-client';

/**
 * Registers the `connect` command.
 *
 * @param vorpal The Vorpal instance.
 */
export function connectFactory(vorpal) {
  vorpal
    .command('connect <host>')
    .action(function (args, callback) {
      const { host } = args;
      const socket = Client(host);
      socket.on('connect', () => {
        this.log(`Connected to ${host}`);
      });
      callback();
    });
}
