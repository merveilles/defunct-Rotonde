import { NAMESPACES } from 'rotonde-core-messages';
import handleConnection from './handleConnection';

export function registerHandlers(io) {
  const core = io.of(NAMESPACES.ROTONDE_CORE);
  core.on('connection', handleConnection);
}
