import handleConnection from './handleConnection';

export function registerHandlers(io) {
  io.on('connection', handleConnection);
}
