/**
 * The base class for a Rotonde plugin.
 */
export class RotondePlugin {

  /**
   * Creates a new Rotonde plugin instance.
   *
   * @param io The Socket.IO client instance.
   */
  constructor(io) {
    this._io = io;
  }

  /**
   * The Socket.IO client instance.
   */
  get io() {
    return this._io;
  }

}
