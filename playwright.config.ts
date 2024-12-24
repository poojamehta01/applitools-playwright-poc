import { PlaywrightTestConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 60000, // Increased timeout
  use: {
    baseURL: 'https://demo.applitools.com',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 30000,
    navigationTimeout: 30000,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }
  ],
  reporter: [['list'], ['html']]
};

export default config;