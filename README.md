# Assignment 4 - Playwright Automation Testing

This project contains automated end-to-end tests using Playwright
for Flight Purchase, Login-Logout, and Login Validation scenarios.

## 1. Tools Used
- Node.js
- Playwright
- JavaScript
- VS Code

## 2. Project Structure

Assignment4/
├── tests/
│   ├── flightPurchase.spec.js
│   ├── loginLogout.spec.js
│   └── loginValidation.spec.js
├── playwright.config.js
├── package.json
└── README.md

## 3. Installation Instructions

1. Install Node.js from https://nodejs.org
2. Open the project folder in VS Code
3. Install dependencies:

   npm install

4. Install Playwright browsers:

   npx playwright install

## 4. Test Files Description

### 1. flightPurchase.spec.js
Tests the flight booking flow.
Verifies searching flights, selecting a flight,
filling passenger details and confirming purchase.

### 2. loginLogout.spec.js
Tests valid login and logout functionality.
Verifies user can login with valid credentials,
dashboard is visible, and logout returns to login page.

### 3. loginValidation.spec.js
Tests login form validation.
- Test Case 1: Login with Email Only
- Test Case 2: Login with Password Only
- Test Case 3: Login with Invalid Credentials
- Test Case 4: Invalid login blocked, stayed on login page

## 5. How to Run Tests

Run all tests:

   npx playwright test

Run a single test file:

   npx playwright test loginValidation.spec.js

Run in headed mode (browser visible):

   npx playwright test loginValidation.spec.js --headed --workers=1

Run in headed mode for all tests:

   npx playwright test --headed

View HTML Report:

   npx playwright show-report

## 6. Test Execution Results

- loginValidation.spec.js: 4 passed
- loginLogout.spec.js: Passed
- flightPurchase.spec.js: Passed

Screenshots of terminal execution are included in the
project as evidence.

## 7. Author
Thanveera Banu. A
