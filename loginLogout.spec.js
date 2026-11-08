const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Login and Logout', () => {

  test('Login and Logout Test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.url()).toContain('inventory.html');
    console.log('Login Successful - Inventory Page Loaded');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshots/task2-login.png', fullPage: true });

    await page.click('#react-burger-menu-btn');
    await expect(page.locator('#logout_sidebar_link')).toBeVisible();
    console.log('Hamburger Menu Opened Successfully');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshots/task2-menu.png', fullPage: true });

    await page.click('#logout_sidebar_link');
    await expect(page).toHaveURL(/saucedemo\.com/);
    await expect(page.locator('#login-button')).toBeVisible();
    console.log('Logout Successful - Back to Login Page');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshots/task2-logout.png', fullPage: true });

  });
});