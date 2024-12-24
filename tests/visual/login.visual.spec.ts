// tests/visual/login.visual.spec.ts
import { test } from '@playwright/test';
import { EyesSetup } from '../utils/eyes-setup';
import { Target } from '@applitools/eyes-playwright';

test.describe('Login Page Visual Tests', () => {
  let eyesSetup: EyesSetup;

  test.beforeAll(async () => {
    eyesSetup = new EyesSetup();
  });

  test('verify login page layout', async ({ page }) => {
    const eyes = await eyesSetup.openEyes('Login Page Layout Test');
    
    try {
      await page.goto('https://demo.applitools.com/hackathon.html');
      await page.waitForLoadState('networkidle');
      
      await eyes.open(page);
      
      // Take screenshot of the entire login page
      await eyes.check('Login Page', Target.window().fully());
      
      // Check specific elements with better selectors
      await eyes.check('Username Field', Target.region(page.locator('#username')));
      await eyes.check('Login Button', Target.region(page.locator('#log-in')));
      
      await eyes.close(false);
    } catch (error) {
      console.error('Test error:', error);
      await eyes.abortIfNotClosed();
      throw error;
    }
  });

  test('verify login error state', async ({ page }) => {
    const eyes = await eyesSetup.openEyes('Login Error State Test');
    
    try {
      await page.goto('https://demo.applitools.com/hackathon.html');
      await page.waitForLoadState('networkidle');
      
      await eyes.open(page);
      
      // Enter invalid credentials
      await page.locator('#username').fill('invalid@example.com');
      await page.locator('#password').fill('wrongpassword');
      await page.locator('#log-in').click();
      
      // Wait for error message
      await page.waitForTimeout(1000);
      
      // Check error message appearance
      await eyes.check('Login Error State', Target.window().fully());
      
      await eyes.close(false);
    } catch (error) {
      console.error('Test error:', error);
      await eyes.abortIfNotClosed();
      throw error;
    }
  });

  test.afterAll(async () => {
    const runner = eyesSetup.getRunner();
    const results = await runner.getAllTestResults(false);
    console.log('Visual test results:', results);
  });
});