export { default as RotondeClientPlugin } from './client';
export { default as RotondeServerPlugin } from './server';

/**
 * The possible plugin types.
 */
export const PLUGIN_TYPE = {

  /**
   * A plugin.
   */
  PLUGIN: 'PLUGIN',

  /**
   * A client adapter for a plugin.
   */
  CLIENT_ADAPTER: 'CLIENT_ADAPTER'

};

/**
 * The possible plugin environments.
 */
export const PLUGIN_ENVIRONMENT = {

  /**
   * An isomorphic plugin that runs on the client and the server.
   */
  ISOMORPHIC: 'ISOMORPHIC',

  /**
   * A server-only plugin.
   */
  SERVER: 'SERVER',

  /**
   * A client-only plugin.
   */
  CLIENT: 'CLIENT'

};
