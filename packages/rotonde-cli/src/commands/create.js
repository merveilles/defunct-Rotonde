import Client from 'socket.io-client';

/**
 * Registers the `create` command.
 *
 * @param vorpal The Vorpal instance.
 */
export function createFactory(vorpal) {
  vorpal
    .command('create')
    .description('Creates a Rotonde instance.')
    .action(function (args, callback) {
      this.prompt({
        type: 'list',
        name: 'service',
        message: 'Where would you like to create your instance?',
        choices: [
          'Local',
          'Server',
          'now',
          'AWS'
        ]
      }, result => {
        console.log(result)
        callback();
      });
    });
}
