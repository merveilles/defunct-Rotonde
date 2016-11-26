import { NAMESPACES } from 'rotonde-core-messages';
import handleConnection from './handle-connection';

export default function registerHandlers(io) {
  const core = io.of(NAMESPACES.ROTONDE_CORE);
  core.on('connection', handleConnection);
}
