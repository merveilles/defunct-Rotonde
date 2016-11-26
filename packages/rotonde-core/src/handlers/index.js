import { NAMESPACES } from 'rotonde-core-messages';
import handleConnection from './handle-connection';

export default function registerHandlers(io) {
  const core = io.of(NAMESPACES.ROTONDE_CORE);
  core.on('connection', handleConnection);
  const messages = io.of('/rotonde-plugin-chat');
  messages.on('connection', socket => {
    console.log('User connected to chat');
    socket.on('message', payload => {
      console.log(payload);
      socket.broadcast.emit('message', payload);
    });
  });
}
