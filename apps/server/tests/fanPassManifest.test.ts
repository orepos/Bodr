import test from 'node:test';
import assert from 'node:assert/strict';
import { buildFanPassManifest } from '../src/fanPassManifest.js';

test('manifest includes required platform integrations', () => {
  const manifest = buildFanPassManifest({
    port: 8080,
    geminiApiKey: 'demo-key',
    geminiModel: 'gemini-2.5-pro',
    googleProjectId: 'bodr-project',
    googleLocation: 'us-central1',
    agentBuilderAppId: 'agent-app',
    mongodbUri: 'mongodb://localhost:27017',
    mongodbDatabase: 'bodr',
    mongodbMcpCommand: 'npx -y mongodb-mcp-server'
  });

  assert.equal(manifest.product, 'Bodr App');
  assert.equal(manifest.integrations.gemini.provider, 'Google Gemini');
  assert.equal(manifest.integrations.googleCloudAgentBuilder.projectId, 'bodr-project');
  assert.equal(manifest.integrations.mongodbMcpServer.command, 'npx -y mongodb-mcp-server');
  assert.equal(manifest.integrations.gemini.apiKeyConfigured, true);
  assert.equal(manifest.capabilities.length, 3);
});
