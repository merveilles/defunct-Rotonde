import Client from 'socket.io-client';

/**
 * The base class for a Rotonde client plugin.
 */
export default class RotondeClientPlugin {

  /**
   * Creates a new Rotonde client plugin instance.
   *
   * @param url The URL to which to connect.
   */
  constructor(url) {
    this._client = new Client(url);
  }

  /**
   * Publishes a message.
   *
   * @param messageId The ID of the message.
   * @param payload The message payload.
   */
  publish(messageId, payload) {
    this._client.emit(messageId, payload);
  }

  /**
   * Returns a promise the resolves when a message with the specified ID is received.
   *
   * @param messageId The ID of the message to which to subscribe.
   */
  subscribe(messageId) {
    return new Promise(resolve => {
      this._client.on(messageId, payload => {
        resolve(payload);
      });
    });
  }

}
