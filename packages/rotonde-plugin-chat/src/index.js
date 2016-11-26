import { PLUGIN_TYPE } from 'rotonde-plugin';
import ChatClientPlugin from './client';
import ChatServerPlugin from './server';

export {
  ChatClientPlugin,
  ChatServerPlugin
};

// Plugin export.
export const TYPE = PLUGIN_TYPE.ISOMORPHIC;
export const ClientPlugin = ChatClientPlugin;
export const ServerPlugin = ChatServerPlugin;
