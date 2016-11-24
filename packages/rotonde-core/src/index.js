import server from './server';

server(app => {
  console.log(`Rotonde listening on ${app.get('host')}:${app.get('port')}`);
});
