 const { test, expect } = require('@playwright/test');

test('Task 2 - Login and Logout Verification', async ({ page }) => {

  // STEP 1: Navigate to SauceDemo login page
  await page.goto('https://www.saucedemo.com/v1/index.html');

  // Verify login page loaded
  await expect(page.locator('#user-name')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await expect(page.locator('#login-button')).toBeVisible();

  // STEP 2: Enter login credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // STEP 3: Click Login button
  await page.click('#login-button');

  // STEP 4: Verify user is logged in and redirected to inventory page
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();
  await expect(page.locator('.title')).toContainText('Products');

  console.log('Login Successful - Inventory Page Loaded');

  // STEP 5: Verify URL contains inventory.html
  expect(page.url()).toContain('inventory.html');

  // STEP 6: Click menu button (hamburger menu)
  await page.click('#react-burger-menu-btn');

  // Verify hamburger menu opens successfully
  await expect(page.locator('#logout_sidebar_link')).toBeVisible();
  console.log('Hamburger Menu Opened Successfully');

  // STEP 7: Click Logout option
  await page.click('#logout_sidebar_link');

  // STEP 8: Verify user is redirected back to login page
  // Logout aana aprom URL saucedemo.com/ nu varum
  await expect(page).toHaveURL(/saucedemo\.com/);

  // STEP 9: Verify URL contains saucedemo.com
  expect(page.url()).toContain('saucedemo.com');

  // STEP 10: Verify username, password, Login button are visible after logout
  await expect(page.locator('#user-name')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await expect(page.locator('#login-button')).toBeVisible();

  console.log('Logout Successful - Redirected to Login Page');
  console.log('Task 2 Completed Successfully');
});