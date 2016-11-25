export default socket => {
  console.log('Received connection');
  socket.emit('rotonde.acknowledge', {
    message: 'Connected to Rotonde instance.'
  });
};
