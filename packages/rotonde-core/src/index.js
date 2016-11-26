import Server from 'socket.io';
import { getPluginsDirectory } from 'rotonde-util-config-manager';
import installPlugins from 'rotonde-util-plugin-manager';
import server from './server';
import { getPlugins } from './config';
import registerHandlers from './handlers';

const httpServer = server(async app => {
  console.log(`Rotonde listening on ${app.get('host')}:${app.get('port')}`);
  const io = new Server(httpServer);
  try {
    await installPlugins(getPluginsDirectory(), getPlugins());
  } catch (err) {
    console.error(err);
  }
  registerHandlers(io);
});
