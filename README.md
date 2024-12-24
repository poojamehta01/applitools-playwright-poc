# Applitools Playwright Visual Testing Framework

## Overview
A visual testing framework using Playwright and Applitools Eyes for automated visual testing. This framework enables reliable visual regression testing with cross-browser and cross-device coverage.

## Features
- Visual regression testing with Applitools Eyes
- Playwright test automation
- Cross-browser testing support
- Configurable test environments
- Easy-to-use test utilities
- Detailed visual test reporting

## Project Structure
```bash
applitools-playwright-poc/
├── tests/
│   ├── visual/
│   │   └── login.visual.spec.ts    # Visual test scenarios
│   └── utils/
│       └── eyes-setup.ts           # Applitools configuration
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Project dependencies
└── .env                           # Environment variables
```

## Prerequisites
- Node.js 14 or higher
- Applitools account and API key
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/poojamehta01/applitools-playwright-poc.git
cd applitools-playwright-poc
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory and add your Applitools API key:
```plaintext
APPLITOOLS_API_KEY=your_api_key_here
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run visual tests only
```bash
npm run test:visual
```

### Run tests in debug mode
```bash
npm run test:debug
```

## Test Configuration

### Playwright Configuration (playwright.config.ts)
```typescript
{
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  }
}
```

### Applitools Configuration (eyes-setup.ts)
```typescript
configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
configuration.setBatch(new BatchInfo('Playwright Visual Tests'));
```

## Writing Visual Tests
Example of a visual test:
```typescript
visualTest('Login page visual test', async ({ page, eyes }) => {
  await eyes.open(page, 'My App', 'Login Page Test');
  await page.goto('/login');
  await eyes.check('Login Page', Target.window().fully());
  await eyes.close();
});
```

## Best Practices
1. **Naming Conventions**
   - Use descriptive test names
   - Follow a consistent naming pattern for test files
   - Use meaningful baseline names

2. **Test Organization**
   - Group tests by feature or page
   - Keep test files focused and maintainable
   - Separate test data from test logic

3. **Visual Testing**
   - Set appropriate viewport sizes
   - Use layout regions when needed
   - Handle dynamic content appropriately
   - Maintain baseline images

4. **Error Handling**
   - Implement proper error handling
   - Use custom error messages
   - Log relevant test information

## Common Issues and Solutions

### Issue: Test Failures Due to Dynamic Content
Solution: Use layout regions or ignore regions for dynamic areas

### Issue: Inconsistent Results Across Browsers
Solution: Configure browser-specific settings in playwright.config.ts

### Issue: Authentication Issues
Solution: Implement proper test setup with authentication helpers

## Reporting
- Playwright HTML reports are generated automatically
- View detailed test results in Applitools Test Manager
- Access visual diffs and test analytics

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author
**Pooja Mehta**
- GitHub: [@poojamehta01](https://github.com/poojamehta01)

## Resources
- [Applitools Documentation](https://applitools.com/docs/)
- [Playwright Documentation](https://playwright.dev/)
- [Applitools-Playwright SDK](https://www.npmjs.com/package/@applitools/eyes-playwright)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Made with ❤️ for QA Engineers and Developers
```

