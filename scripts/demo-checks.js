#!/usr/bin/env node

/**
 * Demo script to show the current status of all quality checks
 */

require('dotenv').config({ path: '.env.local' });
require('dotenv').config(); // Load default .env as fallback

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

const checks = [
  { name: 'ESLint', key: 'ENABLE_ESLINT', description: 'JavaScript/TypeScript linting' },
  { name: 'Pre-commit Hooks', key: 'ENABLE_PRE_COMMIT_HOOKS', description: 'Runs lint-staged on commit' },
  { name: 'Commit Message', key: 'ENABLE_COMMIT_MSG_CHECK', description: 'Validates commit messages' },
  { name: 'TypeScript', key: 'ENABLE_TYPE_CHECK', description: 'TypeScript type checking' },
  { name: 'Prettier', key: 'ENABLE_PRETTIER_CHECK', description: 'Code formatting checks' },
  { name: 'Test Coverage', key: 'ENABLE_TEST_COVERAGE', description: 'Test coverage requirements' }
];

console.log(`${colors.bold}${colors.blue}📋 Code Quality Checks Status${colors.reset}\n`);

let enabledCount = 0;
let totalCount = checks.length;

checks.forEach(check => {
  const isEnabled = process.env[check.key] !== 'false';
  const status = isEnabled ? 
    `${colors.green}✅ Enabled${colors.reset}` : 
    `${colors.red}❌ Disabled${colors.reset}`;
  
  if (isEnabled) enabledCount++;
  
  console.log(`${colors.bold}${check.name}${colors.reset}`);
  console.log(`  Status: ${status}`);
  console.log(`  Description: ${check.description}`);
  console.log(`  Environment: ${check.key}=${process.env[check.key] || 'true (default)'}`);
  console.log('');
});

const percentage = Math.round((enabledCount / totalCount) * 100);
const summaryColor = percentage === 100 ? colors.green : 
                    percentage >= 50 ? colors.yellow : colors.red;

console.log(`${colors.bold}Summary:${colors.reset}`);
console.log(`${summaryColor}${enabledCount}/${totalCount} checks enabled (${percentage}%)${colors.reset}`);

if (percentage < 100) {
  console.log(`\n${colors.yellow}💡 To enable all checks: npm run checks:enable-all${colors.reset}`);
  console.log(`${colors.yellow}💡 To disable all checks: npm run checks:disable-all${colors.reset}`);
}

console.log(`\n${colors.blue}📚 For more information, see: docs/CODE_QUALITY_CHECKS.md${colors.reset}`); 