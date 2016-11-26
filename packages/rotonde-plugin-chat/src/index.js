import { PLUGIN_TYPE } from 'rotonde-plugin';

export const TYPE = PLUGIN_TYPE.ISOMORPHIC;
export { default as ChatClientPlugin } from './client';
export { default as ChatServerPlugin } from './server';
