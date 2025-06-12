# Code Quality Checks Configuration

This project includes configurable code quality checks that can be enabled or disabled based on your development needs or environment requirements.

## Available Checks

| Check | Environment Variable | Default | Description |
|-------|---------------------|---------|-------------|
| ESLint | `ENABLE_ESLINT` | `true` | JavaScript/TypeScript linting |
| Pre-commit Hooks | `ENABLE_PRE_COMMIT_HOOKS` | `true` | Runs lint-staged on commit |
| Commit Message | `ENABLE_COMMIT_MSG_CHECK` | `true` | Validates commit messages |
| TypeScript | `ENABLE_TYPE_CHECK` | `true` | TypeScript type checking |
| Prettier | `ENABLE_PRETTIER_CHECK` | `true` | Code formatting checks |
| Test Coverage | `ENABLE_TEST_COVERAGE` | `true` | Test coverage requirements |

## Configuration Methods

### 1. Environment Variables (Recommended)

Create a `.env.local` file in the root directory:

```bash
# Enable all checks (default behavior)
ENABLE_ESLINT=true
ENABLE_PRE_COMMIT_HOOKS=true
ENABLE_COMMIT_MSG_CHECK=true
ENABLE_TYPE_CHECK=true
ENABLE_PRETTIER_CHECK=true
ENABLE_TEST_COVERAGE=true
```

Or disable specific checks:

```bash
# Disable commit message validation
ENABLE_COMMIT_MSG_CHECK=false

# Disable pre-commit hooks
ENABLE_PRE_COMMIT_HOOKS=false
```

### 2. NPM Scripts (Quick Setup)

```bash
# Enable all checks
npm run checks:enable-all

# Disable all checks
npm run checks:disable-all

# Check current status
npm run checks:status
```

### 3. Manual Configuration

You can also set environment variables directly in your shell:

```bash
# Windows (PowerShell)
$env:ENABLE_ESLINT="false"

# Windows (CMD)
set ENABLE_ESLINT=false

# Linux/macOS
export ENABLE_ESLINT=false
```

## Use Cases

### Development Environment
- **Fast iteration**: Disable pre-commit hooks and type checking for quick commits
- **Focus mode**: Disable ESLint warnings to focus on functionality

```bash
ENABLE_PRE_COMMIT_HOOKS=false
ENABLE_TYPE_CHECK=false
ENABLE_ESLINT=false
```

### CI/CD Pipeline
- **Strict quality**: Enable all checks for production builds
- **Performance**: Disable unnecessary checks in specific CI stages

### Team Collaboration
- **Flexible standards**: Allow developers to disable checks locally while maintaining CI requirements
- **Gradual adoption**: Enable checks incrementally for legacy projects

## Check Details

### ESLint (`ENABLE_ESLINT`)
- **When enabled**: Runs ESLint during pre-commit and build
- **When disabled**: Skips linting, code style issues won't be caught
- **Files affected**: `src/**/*.{ts,tsx}`

### Pre-commit Hooks (`ENABLE_PRE_COMMIT_HOOKS`)
- **When enabled**: Runs lint-staged on every commit
- **When disabled**: Commits proceed without automatic fixing
- **Components**: ESLint, Prettier, TypeScript (based on their individual settings)

### Commit Message (`ENABLE_COMMIT_MSG_CHECK`)
- **When enabled**: Validates commit messages against conventional commit format
- **When disabled**: Any commit message format is accepted
- **Rules**: Enforces conventional commits (feat:, fix:, etc.)

### TypeScript (`ENABLE_TYPE_CHECK`)
- **When enabled**: Runs `tsc --noEmit` during pre-commit
- **When disabled**: Type errors won't prevent commits
- **Performance**: Disabling can speed up commit process significantly

### Prettier (`ENABLE_PRETTIER_CHECK`)
- **When enabled**: Formats code automatically and checks formatting
- **When disabled**: Code formatting is not enforced
- **Files affected**: `src/**/*.{ts,tsx,json,css,md}`

### Test Coverage (`ENABLE_TEST_COVERAGE`)
- **When enabled**: Enforces coverage thresholds (80% by default)
- **When disabled**: Tests can pass with any coverage level
- **Configuration**: See `jest.coverageThreshold` in `package.json`

## Troubleshooting

### Checks Not Applying
1. Ensure `.env.local` file is in the project root
2. Restart your development server
3. Check if husky hooks are installed: `npx husky install`

### Permission Issues
If hooks aren't executing:
```bash
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

### Checking Current Configuration
Use the status script to see which checks are currently enabled:
```bash
node scripts/check-config.js eslint
node scripts/check-config.js pre-commit
node scripts/check-config.js commit-msg
```

## Best Practices

1. **Keep CI strict**: Always enable all checks in CI/CD pipelines
2. **Local flexibility**: Allow developers to disable checks locally for development
3. **Gradual adoption**: For legacy projects, enable checks incrementally
4. **Document exceptions**: If disabling checks, document why in commit messages
5. **Regular review**: Periodically review which checks are disabled and why

## Examples

### Disable All Checks for Quick Prototyping
```bash
npm run checks:disable-all
```

### Enable Only Essential Checks
```bash
# .env.local
ENABLE_ESLINT=true
ENABLE_PRE_COMMIT_HOOKS=false
ENABLE_COMMIT_MSG_CHECK=false
ENABLE_TYPE_CHECK=true
ENABLE_PRETTIER_CHECK=true
ENABLE_TEST_COVERAGE=false
```

### Production-Ready Configuration
```bash
# .env.production
ENABLE_ESLINT=true
ENABLE_PRE_COMMIT_HOOKS=true
ENABLE_COMMIT_MSG_CHECK=true
ENABLE_TYPE_CHECK=true
ENABLE_PRETTIER_CHECK=true
ENABLE_TEST_COVERAGE=true
``` 