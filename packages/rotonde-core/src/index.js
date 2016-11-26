import Server from 'socket.io';
import server from './server';
import { registerHandlers } from './handlers';
import { installPlugins } from './plugins';

const httpServer = server(async app => {
  console.log(`Rotonde listening on ${app.get('host')}:${app.get('port')}`);
  const io = new Server(httpServer);
  try {
    await installPlugins();
  } catch (err) {
    console.error(err);
  }
  registerHandlers(io);
});
