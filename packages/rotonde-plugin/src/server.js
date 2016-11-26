/**
 * The base class for a Rotonde server plugin.
 */
export default class RotondeServerPlugin {

  /**
   * Creates a new Rotonde server plugin instance.
   *
   * @param server The Socket.IO server instance.
   */
  constructor(server) {
    this._server = server;
  }

  /**
   * The Socket.IO server instance.
   */
  get server() {
    return this._server;
  }

}
