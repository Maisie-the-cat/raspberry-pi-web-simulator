# Raspberry Pi Web Client Simulator

[![CI Pipeline](https://github.com/Maisie-the-cat/raspberry-pi-web-simulator/actions/workflows/ci.yml/badge.svg)](https://github.com/Maisie-the-cat/raspberry-pi-web-simulator/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Note**: This repository has been modernized and updated to support current web standards and build tools.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended: 20.x)
- npm 9+ or yarn 1.22+

### Installation

```bash
# Clone the repository
git clone https://github.com/Maisie-the-cat/raspberry-pi-web-simulator.git
cd raspberry-pi-web-simulator

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`

### Production Build

```bash
# Create optimized production build
npm run build

# Serve the build locally
npx serve -s build
```

## 📖 Usage

1. **Replace the connection string** with your Azure IoT hub device connection string
2. Click the `Run` button or type `npm start` in the console

The simulator will:
- Send messages to IoT hub
- Receive C2D messages from IoT hub
- Receive device methods from IoT hub
- Blink the LED in the left part
- Print messages in the console

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
# Azure IoT Hub Connection String
REACT_APP_IOT_HUB_CONNECTION_STRING=your_connection_string_here

# Development server port
PORT=3000

# Enable HTTPS
HTTPS=true
```

### Customizing the Code

- Edit the sample code in `src/data/sample.js`
- The editor supports syntax highlighting and basic autocompletion
- Changes are saved to localStorage automatically

## 🛠️ Development

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reloading |
| `npm run build` | Create production build |
| `npm run start` | Run production build locally |
| `npm test` | Run tests in watch mode |
| `npm run lint` | Run ESLint on source files |
| `npm run lint:fix` | Fix ESLint issues automatically |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

### Project Structure

```
raspberry-pi-web-simulator/
├── config/           # Webpack and build configuration
├── public/           # Static files
├── scripts/          # Build and start scripts
├── src/              # Application source code
│   ├── component/    # React components
│   ├── data/         # Sample code and data
│   ├── lib/          # Utility libraries
│   ├── localization/ # Localization support
│   ├── index.js      # Main application entry
│   └── index.css     # Global styles
├── .github/          # GitHub Actions workflows
└── package.json      # Project dependencies and scripts
```

### Code Quality

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **Jest** for testing

All pull requests must pass linting and tests before merging.

## 🚀 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. **Test Deployment**: Push to `source` branch deploys to `/test` path
2. **Production Deployment**: Create a version tag (e.g., `v1.0.0`) deploys to root

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to any static hosting service
# The build folder contains all the necessary files
```

## 📦 Dependencies

### Core Dependencies

- **React 18+**: Modern React with hooks support
- **Webpack 5**: Module bundler with tree shaking and code splitting
- **Babel 7**: JavaScript compiler with modern presets
- **Azure IoT Device SDK**: For IoT Hub communication
- **Paho MQTT**: MQTT client for WebSockets

### Development Dependencies

- **ESLint 8**: Code linting
- **Prettier**: Code formatting
- **Jest**: Testing framework
- **Webpack Dev Server**: Development server with hot reloading

## 🔒 Security

This project implements:

- **Content Security Policy (CSP)**: Protects against XSS attacks
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **HTTPS Support**: Recommended for production
- **Input Sanitization**: Basic protection against injection attacks

### Security Best Practices

1. Always use HTTPS in production
2. Keep dependencies updated
3. Use environment variables for secrets
4. Regularly audit dependencies with `npm audit`
5. Enable branch protection in GitHub

## 🌍 Localization

The simulator supports multiple languages:

- English (default)
- Japanese

To add a new language:
1. Create a new localization file in `src/localization/`
2. Add the language to the localization configuration
3. Update the language switcher component

## 🤝 Contributing

### Before You Start

1. Read this README
2. Check the existing issues and pull requests
3. Ensure your Node.js version is 18+

### Development Workflow

1. Fork the repository
2. Create a feature branch from `source`
3. Make your changes
4. Run `npm run lint` and `npm run format`
5. Run tests with `npm test`
6. Commit your changes with descriptive messages
7. Push to your fork and create a pull request

### Pull Request Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Keep commits atomic and focused
- Use descriptive commit messages

### Code Review Process

1. All pull requests require at least one approval
2. CI checks must pass (lint, tests, build)
3. Security scans must pass
4. Code must be properly formatted

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions and support:

- Open an issue in this repository
- Check the [Azure IoT Documentation](https://docs.microsoft.com/azure/iot-hub/)

## 🎯 Roadmap

### Short-term Goals

- [x] Modernize build system (Webpack 5, Babel 7)
- [x] Update React to version 18
- [x] Add GitHub Actions CI/CD
- [x] Improve security headers
- [x] Add code formatting with Prettier
- [ ] Add TypeScript support (optional)
- [ ] Improve accessibility
- [ ] Add more samples and tutorials

### Long-term Goals

- Add support for more IoT protocols
- Improve performance and bundle size
- Add offline support with service workers
- Implement progressive web app features
- Add more localization options

## 📊 Telemetry

This project uses Azure Application Insights for telemetry to help improve the product. Telemetry is anonymous and does not collect any personal information.

You can opt-out by setting the `REACT_APP_DISABLE_TELEMETRY=true` environment variable.

---

**Maintained by**: Maisie-the-cat  
**Original Repository**: [azure-samples/raspberry-pi-web-simulator](https://github.com/azure-samples/raspberry-pi-web-simulator)  
**Status**: Modernized and actively maintained
