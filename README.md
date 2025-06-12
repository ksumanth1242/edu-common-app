# Educational Common App

A professional React TypeScript application built with enterprise-level code quality standards, comprehensive testing, security monitoring, and modern development practices. This project features strict ESLint configuration, automated testing with coverage enforcement, environment management, conventional commit standards, and production-ready security and performance monitoring.

## 🚀 Features

- **React 19** with **TypeScript** for type-safe development
- **Comprehensive Testing Suite** with 80% coverage enforcement
- **Environment Configuration** with type-safe validation
- **Conventional Commit Standards** with automated enforcement
- **Security Monitoring** with XSS protection and input sanitization
- **Performance Monitoring** with bundle analysis and web vitals
- **Strict ESLint configuration** with comprehensive rules
- **Pre-commit hooks** that block commits with quality issues
- **Prettier** for consistent code formatting
- **Well-organized project structure** for scalability
- **Custom hooks** and utility functions
- **API service layer** for external integrations
- **Reusable component library**

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Generic components (Button, Input, Modal, etc.)
│   ├── layout/         # Layout components (Header, Footer, Sidebar)
│   └── forms/          # Form-specific components
├── pages/              # Page components (routes)
├── hooks/              # Custom React hooks
├── services/           # API services and external integrations
├── utils/              # Utility functions (including security & performance)
├── types/              # TypeScript type definitions
├── constants/          # Application constants
├── config/             # Environment configuration and validation
├── assets/             # Static assets (images, icons, fonts)
├── styles/             # Global styles and theme configuration
└── tests/              # Test utilities and shared test files
```

## 🛡️ Enterprise-Level Quality Standards

### Strict Code Quality Rules
- **No `any` types allowed** - Ensures complete type safety
- **Explicit function return types** - Improves code readability and maintainability
- **Import/export organization** - Automatically organizes imports
- **React & React Hooks rules** - Enforces React best practices
- **Accessibility checks** - Ensures WCAG compliance
- **TypeScript strict mode** - Maximum type checking

### Automated Quality Gates
When you attempt to commit code, the following checks run automatically:
1. **ESLint** - Code quality and style checks (with auto-fix)
2. **Prettier** - Code formatting
3. **TypeScript** - Type checking
4. **Conventional Commits** - Standardized commit message validation
5. **Test Coverage** - Ensures coverage thresholds are met

**⚠️ Commits are blocked if any check fails, ensuring code quality!**

## 🧪 Testing & Coverage

### Test Coverage Requirements
- **Functions**: 80% minimum
- **Lines**: 80% minimum  
- **Statements**: 80% minimum
- **Branches**: 80% minimum

### Testing Infrastructure
- **Jest** with comprehensive configuration
- **React Testing Library** for component testing
- **Custom test utilities** for consistent testing patterns
- **Coverage reporting** in multiple formats (text, lcov, HTML)
- **CI-ready test scripts**

## 🌍 Environment & Deployment

### Environment Management
- **Type-safe configuration** with validation
- **Environment-specific settings** (development, staging, production)
- **Feature flags** for controlled rollouts
- **API configuration** with timeout and base URL management
- **Security settings** with HTTPS redirect control

### Environment Variables
```bash
REACT_APP_API_BASE_URL=http://localhost:3001/api
REACT_APP_APP_NAME=Educational Common App
REACT_APP_ENVIRONMENT=development
REACT_APP_ENABLE_DEBUG_MODE=true
REACT_APP_ENABLE_ANALYTICS=false
```

## 📋 Commit Standards

### Conventional Commits Enforced
All commits must follow the conventional commit format with automatic validation:

```
<type>[optional scope]: <description>
```

**Supported Types**: feat, fix, docs, style, refactor, perf, test, chore, build, ci, security, deps

**Examples**:
- `feat(auth): add login functionality`
- `fix(button): resolve click handler issue`
- `test(hooks): add useLocalStorage tests`
- `security: fix XSS vulnerability in input component`

## 🔒 Security & Performance

### Security Features
- **XSS Prevention**: Input sanitization utilities
- **URL Validation**: Safe redirect checking
- **Secure ID Generation**: Cryptographically secure random strings
- **CSP Configuration**: Content Security Policy setup
- **Dependency Vulnerability Scanning**: Automated security audits

### Performance Monitoring
- **Bundle Size Analysis**: Webpack bundle analyzer integration
- **Memory Usage Tracking**: Runtime memory monitoring
- **Web Vitals Measurement**: Core web vitals tracking
- **Performance Utilities**: Debounce, throttle, intersection observer
- **Operation Timing**: Performance measurement tools

## 📝 Available Scripts

### Core Development
```bash
npm start                 # Start development server
npm run build            # Build for production
npm test                 # Run tests in watch mode
```

### Testing & Coverage
```bash
npm run test:coverage    # Run tests with coverage report
npm run test:ci          # Run tests for CI (no watch, with coverage)
```

### Code Quality
```bash
npm run lint             # Check for linting errors
npm run lint:fix         # Auto-fix linting errors
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run type-check       # TypeScript type checking
```

### Security & Performance
```bash
npm run analyze          # Bundle size analysis
npm run audit:security   # Security vulnerability check
npm run audit:fix        # Fix security issues
```

### Git & Commits
```bash
npm run commit           # Staged commit helper
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment template:
   ```bash
   cp env.example .env
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view the app

### First Commit Setup
The pre-commit hooks are automatically configured when you run `npm install`. To test them:
```bash
git add .
git commit -m "feat: test commit standards"
```

## 📋 Development Guidelines

### Component Creation
```typescript
import React from 'react';

interface ComponentProps {
  title: string;
  onClick?: () => void;
}

export const Component: React.FC<ComponentProps> = ({ title, onClick }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
```

### Custom Hooks
```typescript
import { useState } from 'react';

export const useCustomHook = (initialValue: string): [string, (value: string) => void] => {
  const [state, setState] = useState<string>(initialValue);
  
  const updateState = (newValue: string): void => {
    setState(newValue);
  };
  
  return [state, updateState];
};
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

### Security Utilities
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

## 🔧 Configuration Files

- **`.eslintrc.json`** - ESLint configuration with strict rules
- **`.prettierrc`** - Prettier formatting configuration
- **`.husky/pre-commit`** - Git pre-commit hook configuration
- **`.husky/commit-msg`** - Git commit message validation
- **`commitlint.config.js`** - Conventional commit configuration
- **`.gitmessage`** - Commit message template
- **`tsconfig.json`** - TypeScript configuration
- **`env.example`** - Environment variables template
- **`DEVELOPMENT.md`** - Detailed development guide
- **`PROJECT_STRUCTURE.md`** - Project structure documentation

## 🧪 Testing

### Running Tests
```bash
npm test                 # Interactive watch mode
npm run test:coverage    # With coverage report
npm run test:ci          # CI mode (no watch)
```

### Test Structure
- Component tests alongside their respective components
- Hook tests in the hooks directory
- Shared test utilities in `src/tests/`
- Coverage reports generated in `coverage/` directory

### Writing Tests
```typescript
// Component testing
import { render, screen, fireEvent } from '../../tests/test-utils';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

// Hook testing
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage Hook', () => {
  it('manages state correctly', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));
    expect(result.current[0]).toBe('initial');
  });
});
```

## 🚀 Building for Production

Create a production build:
```bash
npm run build
```

The build folder will contain the optimized production files ready for deployment.

### Production Deployment Checklist
- [ ] Set appropriate environment variables
- [ ] Run `npm run type-check` to verify types
- [ ] Run `npm run test:ci` to ensure all tests pass
- [ ] Run `npm run lint` to check code quality
- [ ] Run `npm run audit:security` to check for vulnerabilities
- [ ] Run `npm run build` to create production build
- [ ] Deploy `build/` directory to your hosting platform

## 📚 Key Features Implemented

### Utility Functions (`src/utils/`)
- **Security**: Input sanitization, URL validation, secure ID generation
- **Performance**: Memory monitoring, web vitals, debounce/throttle functions
- **General**: Date formatting, email validation, text manipulation

### Custom Hooks (`src/hooks/`)
- `useLocalStorage` - Local storage management with TypeScript

### API Services (`src/services/`)
- Centralized API service with error handling
- TypeScript interfaces for responses
- RESTful operation methods (GET, POST, PUT, DELETE)

### Component Library (`src/components/`)
- Reusable Button component with variants
- Organized in common/, layout/, and forms/ directories

### Type Definitions (`src/types/`)
- User, Course, and ApiResponse interfaces
- Loading state management types

### Configuration (`src/config/`)
- Environment validation and management
- Type-safe configuration access

## 🤝 Contributing

1. Follow the established code quality standards
2. All commits must pass pre-commit checks
3. Use TypeScript strictly (no `any` types)
4. Follow conventional commit format
5. Maintain test coverage above 80%
6. Write tests for new features
7. Update documentation as needed

## 📖 Learn More

- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
- [Jest Documentation](https://jestjs.io/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🔒 Quality Assurance

This project maintains enterprise-level code quality through:
- **Automated linting and formatting** with pre-commit hooks
- **Type checking** on every commit
- **Test coverage enforcement** with 80% thresholds
- **Security vulnerability scanning** with npm audit
- **Performance monitoring** with bundle analysis
- **Consistent code style enforcement** with Prettier
- **Accessibility compliance checking** with jsx-a11y
- **Import organization** and React best practices
- **Conventional commit standards** with automated validation

## 📊 Development Metrics

### Quality Gates
- ✅ ESLint checks (0 errors allowed)
- ✅ TypeScript compilation (strict mode)
- ✅ Prettier formatting (consistent style)
- ✅ Test coverage (80% minimum)
- ✅ Conventional commit format
- ✅ Security audit (no high vulnerabilities)

### Performance Targets
- First Contentful Paint < 2s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- Bundle size monitoring with analysis

## 🎯 Production Ready

Your React TypeScript application is production-ready with:
- **Enterprise-level code quality standards**
- **Comprehensive testing and coverage**
- **Security monitoring and protection**
- **Performance optimization and monitoring**
- **Automated quality gates**
- **Professional development workflow**
- **Complete documentation and guides**

**Happy coding! 🎉**
