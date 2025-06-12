require('dotenv').config({ path: '.env.local' });
require('dotenv').config(); // Load default .env as fallback

const isEslintEnabled = process.env.ENABLE_ESLINT !== 'false';
const isPrettierEnabled = process.env.ENABLE_PRETTIER_CHECK !== 'false';
const isTypeCheckEnabled = process.env.ENABLE_TYPE_CHECK !== 'false';

const config = {};

// TypeScript/JavaScript files
const tsCommands = [];
if (isEslintEnabled) {
  tsCommands.push('eslint --fix');
}
if (isPrettierEnabled) {
  tsCommands.push('prettier --write');
}
if (isTypeCheckEnabled) {
  tsCommands.push(() => 'tsc --noEmit');
}

if (tsCommands.length > 0) {
  config['src/**/*.{ts,tsx}'] = tsCommands;
}

// Other files (JSON, CSS, MD)
if (isPrettierEnabled) {
  config['src/**/*.{json,css,md}'] = ['prettier --write'];
}

// If no checks are enabled, return an empty configuration
if (Object.keys(config).length === 0) {
  console.log('⚠️  All lint-staged checks are disabled');
}

module.exports = config; 