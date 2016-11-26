import { MESSAGES } from 'rotonde-core-messages';

export default socket => {
  console.log('Received connection');
  socket.emit(MESSAGES.ROTONDE_CORE.ACKNOWLEDGE, {
    message: 'Connected to Rotonde instance.'
  });
};
