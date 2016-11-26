import { RotondeClientPlugin } from 'rotonde-plugin';
import { NAMESPACES, MESSAGES } from 'rotonde-plugin-chat-messages';

export default class ChatClientPlugin extends RotondeClientPlugin {

  constructor(url) {
    super(`${url}${NAMESPACES.ROTONDE_PLUGIN_CHAT}`);
  }

  sendMessage(user, message) {
    this.client.emit(MESSAGES.ROTONDE_PLUGIN_CHAT.MESSAGE, {
      user,
      message
    });
  }

  handleReceiveMessage(callback) {
    this.client.on(MESSAGES.ROTONDE_PLUGIN_CHAT.MESSAGE, payload => {
      callback(payload);
    });
  }

}
