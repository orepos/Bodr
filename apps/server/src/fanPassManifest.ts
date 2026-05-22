import type { BodrConfig } from './config.js';

export type FanPassManifest = {
  product: string;
  summary: string;
  integrations: {
    gemini: {
      provider: string;
      model: string;
      apiKeyConfigured: boolean;
    };
    googleCloudAgentBuilder: {
      projectId: string;
      location: string;
      appId: string;
    };
    mongodbMcpServer: {
      uri: string;
      database: string;
      command: string;
    };
  };
  capabilities: string[];
};

export const buildFanPassManifest = (config: BodrConfig): FanPassManifest => ({
  product: 'Bodr App',
  summary: 'Government-sanctioned Digital Fan Pass platform for border, hospitality, and commerce workflows.',
  integrations: {
    gemini: {
      provider: 'Google Gemini',
      model: config.geminiModel,
      apiKeyConfigured: config.geminiApiKey !== 'set-in-env'
    },
    googleCloudAgentBuilder: {
      projectId: config.googleProjectId,
      location: config.googleLocation,
      appId: config.agentBuilderAppId
    },
    mongodbMcpServer: {
      uri: config.mongodbUri,
      database: config.mongodbDatabase,
      command: config.mongodbMcpCommand
    }
  },
  capabilities: [
    'Biometric token-backed border and venue validation workflow',
    'Verified lodging marketplace with anti-cancellation lock rules',
    'Geo-Perks merchant discovery for local small businesses'
  ]
});
