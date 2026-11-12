'use strict';

process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({ silent: true });

const jest = require('jest');
const argv = process.argv.slice(2);

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}

// Add --runInBand for serial test execution to avoid issues with shared state
if (argv.indexOf('--runInBand') < 0) {
  argv.push('--runInBand');
}

// Set test environment to jsdom
if (argv.indexOf('--env=jsdom') < 0 && argv.indexOf('--testEnvironment=jsdom') < 0) {
  argv.push('--testEnvironment=jsdom');
}

jest.run(argv);
