# ⚙️Tauri PlayToys 

This repository is a collection of experimental tools and utilities built using the [Tauri](https://tauri.app/) framework, [Rust](https://www.rust-lang.org/), and Typescript. These tools leverage Rust's low-level access to operating system features and expose them through a modern JavaScript API, enabling lightweight, secure, and cross-platform desktop applications. It serves as a playground for exploring the capabilities of Tauri and Rust plugins.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Development](#development)
  - [Scripts](#scripts)
  - [Building for Production](#building-for-production)
- [Recommended IDE Setup](#recommended-ide-setup)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a boilerplate for building cross-platform desktop applications using the [Tauri](https://tauri.app/) framework, [React](https://reactjs.org/), and [TypeScript](https://www.typescriptlang.org/). It leverages [Vite](https://vitejs.dev/) for fast builds and hot module replacement.

## Features

- **Cross-Platform**: Build apps for Windows, macOS, and Linux.
- **Lightweight**: Tauri apps are smaller and faster than traditional Electron apps.
- **Modern Frontend**: Powered by React and TypeScript.
- **Fast Development**: Vite ensures quick builds and live reloading.
- **Secure**: Tauri provides a secure environment for your app.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites/)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-repo/tauri-playtoys.git
cd tauri-playtoys
npm install
```

### Running the App

Start the development server:

```bash
npm run dev
```

This will launch the app in development mode with hot module replacement.

## Project Structure

```plaintext
.
├── public/                 # Static assets
├── src/                    # React source code
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # Reusable React components
│   ├── pages/              # Page components
│   ├── App.tsx             # Main React component
│   ├── main.tsx            # React entry point
├── src-tauri/              # Tauri configuration and Rust backend
│   ├── src/                # Rust source code
│   ├── tauri.conf.json     # Tauri configuration
├── package.json            # Node.js dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

## Development

### Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the app for production.
- **`npm run preview`**: Preview the production build.
- **`npm run tauri`**: Run Tauri commands.

### Building for Production

To create a production build of your app:

```bash
npm run build
```

The output will be in the `dist` directory.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
  - [Tauri Extension](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
  - [Rust Analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```
