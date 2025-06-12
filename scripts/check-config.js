#!/usr/bin/env node

/**
 * Utility script to check if specific quality checks are enabled
 * Usage: node scripts/check-config.js <check-name>
 * Returns exit code 0 if enabled, 1 if disabled
 */

require('dotenv').config({ path: '.env.local' });
require('dotenv').config(); // Load default .env as fallback

const checkName = process.argv[2];

if (!checkName) {
  console.error('Usage: node scripts/check-config.js <check-name>');
  process.exit(1);
}

const checks = {
  'eslint': process.env.ENABLE_ESLINT !== 'false',
  'pre-commit': process.env.ENABLE_PRE_COMMIT_HOOKS !== 'false',
  'commit-msg': process.env.ENABLE_COMMIT_MSG_CHECK !== 'false',
  'type-check': process.env.ENABLE_TYPE_CHECK !== 'false',
  'prettier': process.env.ENABLE_PRETTIER_CHECK !== 'false',
  'test-coverage': process.env.ENABLE_TEST_COVERAGE !== 'false'
};

const isEnabled = checks[checkName];

if (isEnabled === undefined) {
  console.error(`Unknown check: ${checkName}`);
  console.error(`Available checks: ${Object.keys(checks).join(', ')}`);
  process.exit(1);
}

if (isEnabled) {
  console.log(`✅ ${checkName} check is enabled`);
  process.exit(0);
} else {
  console.log(`❌ ${checkName} check is disabled`);
  process.exit(1);
} 