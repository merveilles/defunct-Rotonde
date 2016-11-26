import { loadClientAdapters } from './config';

export default function registerClientAdapters(vorpal) {
  const clientAdapters = loadClientAdapters();
  clientAdapters.forEach(clientAdapter => clientAdapter.default(vorpal));
}
