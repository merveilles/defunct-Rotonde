import { NAMESPACES } from 'rotonde-core-messages';
import handleConnection from './handleConnection';

export function registerHandlers(io) {
  const core = io.of(NAMESPACES.ROTONDE_CORE);
  core.on('connection', handleConnection);
  if (process.env.NODE_ENV === 'development') {
    const { ChatServerPlugin } = require('../../.rotonde_plugins/local/rotonde-plugin-chat');
    const { ChatClientPlugin } = require('../../.rotonde_plugins/local/rotonde-plugin-chat');
    const clientPlugin = new ChatClientPlugin('http://localhost:3000');
    const plugin = new ChatServerPlugin(io);
    setInterval(() => {
      plugin.sendMessage('maxdeviant', 'blah');
    }, 1000);
  }
}
