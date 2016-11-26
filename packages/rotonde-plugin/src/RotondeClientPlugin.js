import Client from 'socket.io-client';

/**
 * The base class for a Rotonde client plugin.
 */
export class RotondeClientPlugin {

  /**
   * Creates a new Rotonde client plugin instance.
   *
   * @param url The URL to which to connect.
   */
  constructor(url) {
    this._client = new Client(url);
  }

  /**
   * The Socket.IO client instance.
   */
  get client() {
    return this._client;
  }

}
