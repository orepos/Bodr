import { createServer } from './server.js';
import { loadConfig } from './config.js';

const config = loadConfig();

const server = createServer();

server.listen(config.port, () => {
  process.stdout.write(`Bodr server listening on :${config.port}\n`);
});
