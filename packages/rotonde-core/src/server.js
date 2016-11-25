import path from 'path';
import express from 'express';
import morgan from 'morgan';

require('dotenv').config();

export default callback => {
  const server = express();
  server.set('env', process.env.NODE_ENV || 'development');
  server.set('host', process.env.HOST || '0.0.0.0');
  server.set('port', process.env.PORT || 3000);
  server.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
  server.use('/', (req, res, next) => {
    return res.send(`
        <script src="/socket.io/socket.io.js"></script>
        <script>
          var socket = io(window.location.origin);
          socket.on('connect', () => {
            console.log('Connected')
          });
          socket.on('rotonde.acknowledge', payload => {
            console.log('ack', payload)
          });
        </script>
    `)
  });
  return server.listen(
    server.get('port'),
    server.get('host'),
    () => callback(server)
  );
};
