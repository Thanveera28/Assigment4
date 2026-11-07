const { test, expect } = require('@playwright/test');

const LOGIN_URL = 'https://freelance-learn-automation.vercel.app/login';

test.describe('Task 3 - Playwright Login Form Validation Tests', () => {

  test('Test Case 1: Empty Login Attempt', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
    await page.getByRole('button', { name: /sign in/i }).click();
    await expect(page.getByText('Email and Password is required')).toBeVisible();
    console.log('Test Case 1 Passed');
  });

  test('Test Case 2: Login with Email Only', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.locator('input[type="email"], input[name="email"]').first().fill('sibi@gmail.com');
    await page.getByRole('button', { name: /sign in/i }).click();
    await expect(page.getByText('Password is required')).toBeVisible();
    console.log('Test Case 2 Passed');
  });

  test('Test Case 3: Login with Password Only', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.locator('input[type="password"]').first().fill('sibi@gmail.com');
    await page.getByRole('button', { name: /sign in/i }).click();
    await expect(page.getByText('Email is required')).toBeVisible();
    console.log('Test Case 3 Passed');
  });

  test('Test Case 4: Login with Invalid Credentials', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.locator('input[type="email"], input[name="email"]').first().fill('sibi@gmail.com');
    await page.locator('input[type="password"]').first().fill('sibi@gmail.com');
    await page.getByRole('button', { name: /sign in/i }).click();
    // Invalid login na, login page la ye irukanum - dashboard ku poga koodathu
    await expect(page).toHaveURL(/login/);
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
    console.log('Test Case 4 Passed - Invalid login blocked, stayed on login page');
  });

});