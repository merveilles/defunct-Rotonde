import { RotondeServerPlugin } from 'rotonde-plugin';
import { NAMESPACES, MESSAGES } from 'rotonde-plugin-chat-messages';

export class ChatServerPlugin extends RotondeServerPlugin {

  constructor(server, options) {
    super(server);
    this.namespace = this.server.of(NAMESPACES.ROTONDE_PLUGIN_CHAT);
  }

  sendMessage(user, message) {
    this.namespace.emit(MESSAGES.ROTONDE_PLUGIN_CHAT.MESSAGE, {
      user,
      message
    });
  }

}