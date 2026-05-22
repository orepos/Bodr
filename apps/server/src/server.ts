import { createServer as createHttpServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { buildFanPassManifest } from './fanPassManifest.js';
import { loadConfig } from './config.js';

const json = (res: ServerResponse, statusCode: number, payload: unknown): void => {
  res.writeHead(statusCode, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
};

const handler = (req: IncomingMessage, res: ServerResponse): void => {
  if (req.method === 'GET' && req.url === '/health') {
    json(res, 200, { ok: true });
    return;
  }

  if (req.method === 'GET' && req.url === '/api/v1/fan-pass/manifest') {
    json(res, 200, buildFanPassManifest(loadConfig()));
    return;
  }

  json(res, 404, { error: 'Not Found' });
};

export const createServer = () => createHttpServer(handler);
