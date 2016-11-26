import { PLUGIN_TYPE, PLUGIN_ENVIRONMENT } from 'rotonde-plugin';
import { ClientPlugin as ChatClientPlugin } from 'rotonde-plugin-chat';

function initialize(vorpal) {
  let plugin;
  vorpal
    .mode('chat <instance>')
    .delimiter('SAY>')
    .init(function (args, callback) {
      const { instance } = args;
      plugin = new ChatClientPlugin(instance);
      plugin.handleReceiveMessage(({ message, user }) => {
        this.log(`<${user}>: ${message}`);
      });
      this.log(`Chatting on: ${instance}`);
      callback();
    })
    .action(function (command, callback) {
      const username = 'maxdeviant';
      plugin.sendMessage(username, command);
      this.log(`<${username}>: ${command}`);
      callback();
    });
}

// Plugin export.
export const TYPE = PLUGIN_TYPE.CLIENT_ADAPTER;
export const ENVIRONMENT = PLUGIN_ENVIRONMENT.CLIENT;
export default initialize;
