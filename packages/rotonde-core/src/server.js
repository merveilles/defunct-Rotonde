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
  return server.listen(
    server.get('port'),
    server.get('host'),
    () => callback(server)
  );
};
