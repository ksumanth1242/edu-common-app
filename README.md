# Educational Common App

A professional React TypeScript application built with strict code quality standards and modern development practices. This project features comprehensive ESLint configuration, pre-commit hooks, and a well-organized project structure suitable for educational applications.

## 🚀 Features

- **React 19** with **TypeScript** for type-safe development
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
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── constants/          # Application constants
├── assets/             # Static assets (images, icons, fonts)
├── styles/             # Global styles and theme configuration
└── tests/              # Test utilities and shared test files
```

## 🛡️ Code Quality Standards

### Strict ESLint Rules
- **No `any` types allowed** - Ensures complete type safety
- **Explicit function return types** - Improves code readability and maintainability
- **Import/export organization** - Automatically organizes imports
- **React & React Hooks rules** - Enforces React best practices
- **Accessibility checks** - Ensures WCAG compliance
- **TypeScript strict mode** - Maximum type checking

### Pre-commit Protection
When you attempt to commit code, the following checks run automatically:
1. **ESLint** - Code quality and style checks (with auto-fix)
2. **Prettier** - Code formatting
3. **TypeScript** - Type checking
4. **lint-staged** - Only runs on staged files for performance

**⚠️ Commits are blocked if any check fails, ensuring code quality!**

## 📝 Available Scripts

### Development
```bash
npm start                 # Start development server
npm run build            # Build for production
npm test                 # Run tests in watch mode
```

### Code Quality
```bash
npm run lint             # Check for linting errors
npm run lint:fix         # Fix auto-fixable linting errors
npm run format           # Format code with Prettier
npm run format:check     # Check if code is properly formatted
npm run type-check       # Run TypeScript type checking
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
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the app

### First Commit Setup
The pre-commit hooks are automatically configured when you run `npm install`. To test them:
```bash
git add .
git commit -m "Test commit"
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

### File Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useLocalStorage.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase for interfaces (e.g., `User`, `ApiResponse`)

## 🔧 Configuration Files

- **`.eslintrc.json`** - ESLint configuration with strict rules
- **`.prettierrc`** - Prettier formatting configuration
- **`.husky/pre-commit`** - Git pre-commit hook configuration
- **`tsconfig.json`** - TypeScript configuration
- **`PROJECT_STRUCTURE.md`** - Detailed project structure documentation

## 🧪 Testing

Run tests with:
```bash
npm test
```

Tests are located in:
- `src/tests/` - Shared test utilities
- Component tests alongside their respective components

## 🚀 Building for Production

Create a production build:
```bash
npm run build
```

The build folder will contain the optimized production files ready for deployment.

## 📚 Key Features Implemented

### Utility Functions (`src/utils/`)
- Date formatting
- Email validation
- Text truncation
- Debounce function
- Unique ID generation

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

## 🤝 Contributing

1. Follow the established code quality standards
2. All commits must pass pre-commit checks
3. Use TypeScript strictly (no `any` types)
4. Follow the naming conventions
5. Write tests for new features
6. Update documentation as needed

## 📖 Learn More

- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)

## 🔒 Quality Assurance

This project maintains high code quality through:
- Automated linting and formatting
- Type checking on every commit
- Consistent code style enforcement
- Accessibility compliance checking
- Import organization
- React best practices enforcement

**Happy coding! 🎉**
