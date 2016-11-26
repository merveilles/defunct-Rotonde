import { PLUGIN_TYPE, PLUGIN_ENVIRONMENT } from 'rotonde-plugin';
import ChatClientPlugin from './client';
import ChatServerPlugin from './server';

export {
  ChatClientPlugin,
  ChatServerPlugin
};

// Plugin export.
export const TYPE = PLUGIN_TYPE.PLUGIN;
export const ENVIRONMENT = PLUGIN_ENVIRONMENT.ISOMORPHIC;
export const ClientPlugin = ChatClientPlugin;
export const ServerPlugin = ChatServerPlugin;
