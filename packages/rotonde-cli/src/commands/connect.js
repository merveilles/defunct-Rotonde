import Client from 'socket.io-client';

/**
 * Registers the `connect` command.
 *
 * @param vorpal The Vorpal instance.
 */
export function connectFactory(vorpal) {
  vorpal
    .command('connect <instance>')
    .description('Connects to a Rotonde instance.')
    .action(function (args, callback) {
      const { instance } = args;
      const socket = Client(instance);
      socket.on('connect', () => {
        this.log(`Connected to ${instance}`);
      });
      socket.on('rotonde.acknowledge', payload => {
        console.log(payload);
      });
      callback();
    });
}
