

# throttle-system

## Description

This project demonstrates a concurrency control mechanism using a throttle function to limit the number of concurrent tasks executed in parallel. It utilizes the debug library for logging and simulates asynchronous tasks with random delays.

## Installation

Ensure you have Node.js and your preferred package manager (`yarn`, `pnpm`, or `npm`) installed on your machine.

1. Clone the repository:

```bash
git clone https://github.com/joaoSouza-js/throttle-system
```

2. Navigate to the project directory:

```bash
cd throttle-system
```

3. Install dependencies:

```bash
# Using Yarn
yarn 

# Using pnpm
pnpm install

# Using npm
npm install
```

## Usage

To run the code, you can use the provided scripts in the `package.json` file.

### Development

To start the development server:

```bash
# Using Yarn
yarn dev

# Using pnpm
pnpm dev

# Using npm
npm run dev
```

This command will start the development server and watch for changes in the `src/server.ts` file.

### Linting

Linting is configured with ESLint and Prettier. To lint your code:

```bash
# Check for linting errors
yarn lint

# Automatically fix linting errors
yarn eslint:fix
```

### Formatting

To format your code using Prettier:

```bash
# Format all files
yarn format
```

### Pre-commit Hook

A pre-commit hook is configured using Husky and lint-staged to run linting and formatting before commits.


