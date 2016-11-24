import Client from 'socket.io-client';
import deploy from 'rotonde-deploy';

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
          {
            name: 'Local',
            value: 'local'
          },
          {
            name: 'Server',
            value: 'server'
          },
          {
            name: 'now',
            value: 'now'
          },
          {
            name: 'AWS',
            value: 'aws'
          }
        ]
      }, async result => {
        const { service } = result;
        try {
          await deploy(service);
        } catch (err) {
          throw err;
        }
        callback();
      });
    });
}
