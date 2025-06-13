#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ENV_FILE = '.env.local';
const ENV_PATH = path.join(process.cwd(), ENV_FILE);

const checks = {
  'eslint': 'ENABLE_ESLINT',
  'pre-commit': 'ENABLE_PRE_COMMIT_HOOKS',
  'commit-msg': 'ENABLE_COMMIT_MSG_CHECK',
  'type-check': 'ENABLE_TYPE_CHECK',
  'prettier': 'ENABLE_PRETTIER_CHECK',
  'test-coverage': 'ENABLE_TEST_COVERAGE'
};

function writeEnvFile(env) {
  const content = Object.entries(env)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n') + '\n';
  
  fs.writeFileSync(ENV_PATH, content);
  console.log('✅ Configuration saved to .env.local');
}

function enableAll() {
  const env = {};
  Object.values(checks).forEach(key => {
    env[key] = 'true';
  });
  writeEnvFile(env);
  console.log('✅ All checks enabled');
}

function disableAll() {
  const env = {};
  Object.values(checks).forEach(key => {
    env[key] = 'false';
  });
  writeEnvFile(env);
  console.log('❌ All checks disabled');
}

const action = process.argv[2];

switch (action) {
  case 'enable-all':
    enableAll();
    break;
  case 'disable-all':
    disableAll();
    break;
  default:
    console.error(`Unknown action: ${action}`);
    process.exit(1);
} 