export type BodrConfig = {
  port: number;
  geminiApiKey: string;
  geminiModel: string;
  googleProjectId: string;
  googleLocation: string;
  agentBuilderAppId: string;
  mongodbUri: string;
  mongodbDatabase: string;
  mongodbMcpCommand: string;
};

const envOrDefault = (name: string, fallback: string): string => process.env[name] ?? fallback;

export const loadConfig = (): BodrConfig => ({
  port: Number.parseInt(envOrDefault('PORT', '8080'), 10),
  geminiApiKey: envOrDefault('GEMINI_API_KEY', 'set-in-env'),
  geminiModel: envOrDefault('GEMINI_MODEL', 'gemini-2.5-pro'),
  googleProjectId: envOrDefault('GOOGLE_CLOUD_PROJECT', 'set-in-env'),
  googleLocation: envOrDefault('GOOGLE_CLOUD_LOCATION', 'global'),
  agentBuilderAppId: envOrDefault('AGENT_BUILDER_APP_ID', 'set-in-env'),
  mongodbUri: envOrDefault('MONGODB_URI', 'mongodb://localhost:27017'),
  mongodbDatabase: envOrDefault('MONGODB_DATABASE', 'bodr'),
  mongodbMcpCommand: envOrDefault('MONGODB_MCP_COMMAND', 'npx -y mongodb-mcp-server')
});
