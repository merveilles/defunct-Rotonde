import Server from 'socket.io';
import server from './server';
import { registerHandlers } from './handlers';

const httpServer = server(app => {
  console.log(`Rotonde listening on ${app.get('host')}:${app.get('port')}`);
  const io = new Server(httpServer);
  registerHandlers(io);
});
