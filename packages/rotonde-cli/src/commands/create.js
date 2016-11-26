import deploy, {
  isDeploymentTargetSupported
} from 'rotonde-deploy';

/**
 * Registers the `create` command.
 *
 * @param vorpal The Vorpal instance.
 */
export default function createFactory(vorpal) {
  const { chalk } = vorpal;
  vorpal
    .command('create')
    .description('Creates a Rotonde instance.')
    .action(function (args, callback) {
      const choices = [
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
      ].filter(choice => isDeploymentTargetSupported(choice.value));
      this.prompt({
        type: 'list',
        name: 'target',
        message: 'Where would you like to create your instance?',
        choices
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
