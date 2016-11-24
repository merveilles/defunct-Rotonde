import Server from 'socket.io';
import server from './server';

const httpServer = server(app => {
  console.log(`Rotonde listening on ${app.get('host')}:${app.get('port')}`);
  const io = Server(httpServer);
  io.on('connection', socket => {
    console.log('Received connection');
  });
});
