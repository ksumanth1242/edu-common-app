# Development Guide

This guide covers the enhanced development workflow and all available tools for the Educational Common App.

## 🧪 Testing & Coverage

### Running Tests
```bash
# Run tests in watch mode
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests for CI (no watch, with coverage)
npm run test:ci
```

### Coverage Requirements
- **Functions**: 60% minimum
- **Lines**: 60% minimum  
- **Statements**: 60% minimum
- **Branches**: 50% minimum

### Testing Structure
```
src/
├── tests/
│   └── test-utils.tsx     # Custom render with providers
├── components/
│   └── Button.test.tsx    # Component tests
└── hooks/
    └── useLocalStorage.test.ts  # Hook tests
```

### Writing Tests
```typescript
// Component testing example
import { render, screen, fireEvent } from '../../tests/test-utils';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

// Hook testing example
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage Hook', () => {
  it('manages state correctly', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));
    expect(result.current[0]).toBe('initial');
  });
});
```

## 🌍 Environment Configuration

### Environment Files
- `env.example` - Template for environment variables
- Create local `.env` files for different environments

### Environment Variables
```bash
# API Configuration
REACT_APP_API_BASE_URL=http://localhost:3001/api
REACT_APP_API_TIMEOUT=10000

# Application Configuration
REACT_APP_APP_NAME=Educational Common App
REACT_APP_APP_VERSION=1.0.0
REACT_APP_ENVIRONMENT=development

# Feature Flags
REACT_APP_ENABLE_DEBUG_MODE=true
REACT_APP_ENABLE_ANALYTICS=false
```

### Using Environment Configuration
```typescript
import { env, isDevelopment, isProduction } from './config/environment';

// Access configuration
console.log(env.apiBaseUrl);

// Environment checks
if (isDevelopment()) {
  console.log('Running in development mode');
}
```

## 📋 Commit Standards

### Conventional Commits
All commits must follow the conventional commit format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks
- **build**: Build system changes
- **ci**: CI configuration changes
- **security**: Security fixes
- **deps**: Dependency updates

### Examples
```bash
feat(auth): add login functionality
fix(button): resolve click handler issue
docs: update README with new setup
test(hooks): add useLocalStorage tests
chore: update dependencies
```

### Git Hooks
- **Pre-commit**: Runs ESLint, Prettier, and TypeScript checks
- **Commit-msg**: Validates commit message format

### Using Commit Template
```bash
# Set up git commit template
git config commit.template .gitmessage

# Now git commit will open with helpful template
git commit
```

## 🔒 Security & Performance

### Security Features
- **Input Sanitization**: XSS prevention utilities
- **URL Validation**: Safe URL checking
- **Secure ID Generation**: Cryptographically secure random strings
- **CSP Configuration**: Content Security Policy setup

```typescript
import { sanitizeInput, isSafeUrl, generateSecureId } from './utils/security';

// Sanitize user input
const cleanInput = sanitizeInput(userInput);

// Validate URLs
const isSafe = isSafeUrl(url, ['trusted-domain.com']);

// Generate secure IDs
const secureId = generateSecureId(32);
```

### Performance Monitoring
- **Performance Measurement**: Track operation timing
- **Memory Usage**: Monitor memory consumption
- **Web Vitals**: Core web vitals measurement
- **Optimization Utils**: Debounce, throttle, intersection observer

```typescript
import { PerformanceMonitor, getMemoryUsage } from './utils/performance';

// Measure performance
const monitor = PerformanceMonitor.getInstance();
monitor.startMeasurement('api-call');
// ... do work
const duration = monitor.endMeasurement('api-call');

// Check memory usage
const memory = getMemoryUsage();
console.log(`Memory usage: ${memory?.percentage}%`);
```

### Bundle Analysis
```bash
# Analyze bundle size
npm run analyze
```

### Security Auditing
```bash
# Check for security vulnerabilities
npm run audit:security

# Fix security issues
npm run audit:fix
```

## 🛠️ Development Scripts

### Core Development
```bash
npm start              # Start development server
npm run build          # Build for production
npm test               # Run tests in watch mode
```

### Code Quality
```bash
npm run lint           # Check for linting errors
npm run lint:fix       # Auto-fix linting errors
npm run format         # Format code with Prettier
npm run format:check   # Check code formatting
npm run type-check     # TypeScript type checking
```

### Testing
```bash
npm run test:coverage  # Run tests with coverage
npm run test:ci        # Run tests for CI
```

### Security & Performance
```bash
npm run analyze        # Bundle size analysis
npm run audit:security # Security vulnerability check
npm run audit:fix      # Fix security issues
```

### Git & Commits
```bash
npm run commit         # Staged commit helper
```

## 🔧 IDE Configuration

### VS Code Settings
Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.workingDirectories": ["src"],
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

### Recommended Extensions
- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Jest
- GitLens

## 📊 Quality Metrics

### Code Quality Gates
All code must pass:
- ✅ ESLint checks (0 errors allowed)
- ✅ TypeScript compilation
- ✅ Prettier formatting
- ✅ Test coverage thresholds
- ✅ Conventional commit format

### Performance Targets
- First Contentful Paint < 2s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- Bundle size monitoring

### Security Standards
- No XSS vulnerabilities
- Input sanitization required
- URL validation enforced
- Dependencies regularly audited

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment-Specific Builds
1. Set appropriate environment variables
2. Run build command
3. Deploy `build/` directory

### CI/CD Integration
The project is ready for CI/CD with:
- Automated testing (`npm run test:ci`)
- Code quality checks (`npm run lint`)
- Security auditing (`npm run audit:security`)
- Type checking (`npm run type-check`)

## 🔍 Troubleshooting

### Common Issues

**ESLint Errors**
```bash
npm run lint:fix  # Auto-fix many issues
```

**Type Errors**
```bash
npm run type-check  # Get detailed type errors
```

**Test Failures**
```bash
npm test -- --verbose  # Detailed test output
```

**Commit Message Rejected**
- Follow conventional commit format
- Check `.gitmessage` template for examples

**Performance Issues**
- Use `npm run analyze` to check bundle size
- Monitor with performance utilities
- Check memory usage in development

This development setup ensures code quality, security, and performance while maintaining developer productivity. 