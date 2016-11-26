import { RotondeClientPlugin } from 'rotonde-plugin';
import { NAMESPACES, MESSAGES } from 'rotonde-plugin-chat-messages';

export class ChatClientPlugin extends RotondeClientPlugin {

  constructor(url) {
    super(`${url}${NAMESPACES.ROTONDE_PLUGIN_CHAT}`);
    this.client.on(MESSAGES.ROTONDE_PLUGIN_CHAT.MESSAGE, ({ user, message }) => {
      console.log(`<${user}>: ${message}`);
    });
  }

  sendMessage(user, message) {
    this.client.emit(MESSAGES.ROTONDE_PLUGIN_CHAT.MESSAGE, {
      user,
      message
    });
  }

}
