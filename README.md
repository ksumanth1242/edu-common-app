# React Component Library & Demo

This project is a comprehensive showcase of a reusable React component library built with TypeScript, Material UI, and styled-components. It features a complete routing system, a full demo of all components, and a unique embeddable layout mode.

## 🚀 Core Features

-   **Extensive Component Library**: A wide range of reusable components including Buttons, Cards, Dialogs, Dropdowns, Badges, Icons, and more.
-   **React Router 6**: A complete routing system with nested routes and a full navigation layout.
-   **Embeddable Layout**: A unique layout mode, controlled by an environment variable, that allows the application to be embedded in other sites without the navigation.
-   **TypeScript & Type Safety**: Fully typed codebase for robust and maintainable components.
-   **Material UI & Styled-Components**: A powerful combination for building beautiful and flexible UI components.
-   **Automated Quality Gates**: Pre-commit hooks for linting, formatting, and type-checking to maintain code quality.
-   **Comprehensive Demo**: A multi-page demo application showcasing all components and features.

## 🏗️ Project Structure

The project is organized into a clean and scalable structure:

```
src/
├── components/     # Reusable UI components (Button, Card, etc.)
├── layouts/        # Application layouts (Main, Embedded)
├── pages/          # Page components for different routes
├── routes/         # React Router configuration
├── styles/         # Global styles, theme, and design tokens
└── ...
```

## 🛠️ Tech Stack

-   **React 19** & **React Router 6**
-   **TypeScript**
-   **Material UI** & **Styled-Components**
-   **Jest** & **React Testing Library**
-   **ESLint** & **Prettier**
-   **Husky** & **lint-staged** for pre-commit hooks

## 🚦 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies**:
    ```bash
h
    npm install
    ```

3.  **Set up environment variables**:
    Copy the `.env.example` to a new `.env` file and customize as needed.
    ```bash
    cp env.example .env
    ```

4.  **Start the development server**:
    ```bash
    npm start
    ```

The application will be running at `http://localhost:3000`.

## 📖 Available Scripts

-   `npm start`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm test`: Runs the tests in watch mode.
-   `npm run lint`: Checks for linting errors.
-   `npm run type-check`: Runs the TypeScript compiler to check for type errors.
-   `npm run format`: Formats the code with Prettier.

## 📦 Component Library

This project features a rich library of reusable components, all built with TypeScript and styled-components.

### Components Included:

-   **AppButton**: A versatile button component with multiple variants, sizes, and states.
-   **AppCard**: A flexible card component for displaying content in a structured way.
-   **AppDialog**: A modal dialog component with backdrop and ESC key handling.
-   **AppDropdown**: A customizable dropdown select component.
-   **AppBadge**: A badge component for notifications and status indicators.
-   **AppIcon**: A generic icon component that can be used with any icon font or SVG.
-   **AppTabs**: A tab navigation component for organizing content.
-   **AppTextField**: A standard text input field.
-   **AppTextArea**: A multi-line text input area.
-   **AppSearchField**: A search input with integrated search button.

### Usage Example:

```tsx
import { AppButton, AppCard } from './components/common';

const MyComponent = () => (
    <AppCard header="My Card">
        <p>This is a card with a button.</p>
        <AppButton variant="primary">Click me</AppButton>
    </AppCard>
);
```

## 🌐 Embeddable Layout Mode

This application can be run in two different layout modes, controlled by an environment variable.

-   **Standalone Mode** (`REACT_APP_EMBEDDED=false`): The default mode, which includes the main navigation layout with a sidebar and header.
-   **Embedded Mode** (`REACT_APP_EMBEDDED=true`): A minimal layout that renders only the content, perfect for embedding in other applications via an iframe or similar technology.

To switch between modes, change the `REACT_APP_EMBEDDED` variable in your `.env` file and restart the development server.

## ✅ Code Quality

This project enforces strict code quality standards through automated checks:

-   **ESLint**: For identifying and fixing code quality issues.
-   **Prettier**: For consistent code formatting.
-   **TypeScript**: For static type checking.
-   **Pre-commit Hooks**: Automatically run checks before every commit to ensure quality.

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and conventions. All commits are validated against conventional commit standards.
