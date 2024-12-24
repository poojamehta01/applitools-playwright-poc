// tests/utils/eyes-setup.ts
import * as dotenv from 'dotenv';
import { Eyes, ClassicRunner, Configuration, BatchInfo } from '@applitools/eyes-playwright';

// Load environment variables
dotenv.config();

export class EyesSetup {
  private eyes: Eyes;
  private runner: ClassicRunner;
  
  constructor() {
    const apiKey = process.env.APPLITOOLS_API_KEY;
    if (!apiKey) {
      throw new Error('APPLITOOLS_API_KEY is not set in .env file');
    }

    this.runner = new ClassicRunner();
    this.eyes = new Eyes(this.runner);
    
    const configuration = new Configuration();
    configuration.setApiKey(apiKey);
    configuration.setBatch(new BatchInfo('Playwright Demo'));
    configuration.setAppName('Demo App');
    configuration.setTestName('Applitools Demo Test');
    
    this.eyes.setConfiguration(configuration);
  }

  async openEyes(testName: string) {
    await this.eyes.setConfiguration(this.eyes.getConfiguration().setTestName(testName));
    return this.eyes;
  }

  getEyes() {
    return this.eyes;
  }

  getRunner() {
    return this.runner;
  }
}