import Client from 'socket.io-client';
import deploy from 'rotonde-deploy';

/**
 * Registers the `create` command.
 *
 * @param vorpal The Vorpal instance.
 */
export function createFactory(vorpal) {
  const { chalk } = vorpal;
  vorpal
    .command('create')
    .description('Creates a Rotonde instance.')
    .action(function (args, callback) {
      this.prompt({
        type: 'list',
        name: 'target',
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
        const { target } = result;
        try {
          await deploy(target);
        } catch (err) {
          this.log(chalk.red(err.message));
        }
        callback();
      });
    });
}
