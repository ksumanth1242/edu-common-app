# Project Structure

This React TypeScript project follows a well-organized structure with strict code quality standards.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Generic components (Button, Input, Modal, etc.)
│   ├── layout/         # Layout components (Header, Footer, Sidebar)
│   └── forms/          # Form-specific components
├── pages/              # Page components (routes)
├── hooks/              # Custom React hooks
├── services/           # API services and external integrations
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── constants/          # Application constants
├── assets/             # Static assets (images, icons, fonts)
├── styles/             # Global styles and theme configuration
└── tests/              # Test utilities and shared test files
```

## Code Quality Standards

### ESLint Configuration
- Strict TypeScript rules enforced
- React and React Hooks rules
- Import/export organization
- Accessibility (jsx-a11y) checks
- No `any` types allowed
- Explicit function return types required

### Pre-commit Hooks
- ESLint checks (with auto-fix when possible)
- Prettier formatting
- TypeScript type checking
- **Code will be blocked from committing if it doesn't pass these checks**

### File Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase starting with "use" (e.g., `useLocalStorage.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: SCREAMING_SNAKE_CASE for values, camelCase for file names
- **Types**: PascalCase for interfaces, camelCase for file names

### Import Organization
Imports are automatically organized in the following order:
1. Built-in modules (e.g., React)
2. External libraries
3. Internal modules (relative imports)

## Development Scripts

```bash
# Development
npm start                 # Start development server
npm run build            # Build for production
npm test                 # Run tests

# Code Quality
npm run lint             # Check for linting errors
npm run lint:fix         # Fix auto-fixable linting errors
npm run format           # Format code with Prettier
npm run format:check     # Check if code is properly formatted
npm run type-check       # Run TypeScript type checking
```

## Component Guidelines

### Component Structure
```typescript
import React from 'react';

interface ComponentProps {
  // Define props with explicit types
  title: string;
  onClick?: () => void;
}

export const Component: React.FC<ComponentProps> = ({ title, onClick }) => {
  // Component logic
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
};
```

### Custom Hooks
```typescript
import { useState, useEffect } from 'react';

export const useCustomHook = (initialValue: string): [string, (value: string) => void] => {
  const [state, setState] = useState<string>(initialValue);
  
  // Hook logic
  
  return [state, setState];
};
```

## Best Practices

1. **Always use TypeScript** - No `any` types allowed
2. **Explicit return types** - All functions must have explicit return types
3. **Named exports** - Prefer named exports over default exports
4. **Consistent formatting** - Prettier ensures consistent code style
5. **Accessibility** - Follow WCAG guidelines for accessibility
6. **Testing** - Write tests for components and utilities
7. **Documentation** - Comment complex logic and provide JSDoc for public APIs

## Pre-commit Workflow

When you attempt to commit code:
1. **lint-staged** runs on staged files
2. **ESLint** checks for code quality issues and fixes auto-fixable ones
3. **Prettier** formats the code
4. **TypeScript** checks for type errors
5. If any step fails, the commit is blocked

This ensures that only high-quality, properly formatted code enters the repository. 