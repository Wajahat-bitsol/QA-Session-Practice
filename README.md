# Qatar Living Properties QA Automation

This project contains automated tests for the Qatar Living Properties web application using Playwright and TypeScript.

## 🚀 Main Features
- **End-to-End UI Testing**: Automated browser tests for critical user journeys.
- **Playwright Test Runner**: Fast, reliable, and parallel test execution.
- **TypeScript Support**: Type-safe test scripts and selectors.
- **CI/CD Ready**: Includes a GitHub Actions workflow for automated test runs.
- **Code Quality Tools**: ESLint and Prettier for code linting and formatting.

## 🛠️ Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🏃‍♂️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd qlp-qa
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run all tests:**
   ```bash
   npx playwright test
   ```
   Or with a custom reporter:
   ```bash
   npx playwright test --reporter=list
   ```

4. **View test results:**
   - HTML report:
     ```bash
     npx playwright show-report
     ```
   - Failed test artifacts (screenshots, videos) are in the `test-results/` directory.

5. **Lint and format code:**
   ```bash
   npx eslint .
   npx prettier --write .
   ```

## 📁 Project Structure
- `Test/Test Script/` — Playwright test scripts and selectors
- `Test/Test Cases/` — Test case documentation
- `.github/workflows/` — CI/CD configuration
- `eslint.config.js` — ESLint configuration
- `package.json` — Project dependencies and scripts

## 📋 Notes
- Tests are written in TypeScript and use Playwright's recommended best practices.
- Update the test URLs or selectors as the application evolves.
- For more Playwright options, see the [Playwright docs](https://playwright.dev/).

---

For any issues or contributions, please open an issue or pull request. 