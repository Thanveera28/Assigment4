const { test, expect } = require('@playwright/test');

test('Part Assignment 4 - Flight Purchase Automation', async ({ page }) => {

  
  await page.goto('https://blazedemo.com/');
  await page.selectOption('select[name="fromPort"]', 'Paris');
  await page.selectOption('select[name="toPort"]', 'London');
  await page.locator('input[value="Find Flights"]').click();
  await page.screenshot({ path: 'screenshots/task1-flight-list.png' });

  
  const firstRow = page.locator('table tbody tr').first();
  await firstRow.locator('input[value="Choose This Flight"]').click();
  await page.waitForURL(/purchase\.php/);

  
  await expect(page.locator('h2')).toContainText('Your flight');
  await page.screenshot({ path: 'screenshots/task1-purchase-form.png' });

  
  await page.fill('#inputName', 'Thanveera');
  await page.fill('#address', 'Chennai');
  await page.fill('#city', 'Chennai');
  await page.fill('#state', 'Tamil Nadu');
  await page.fill('#zipCode', '600001');
  await page.selectOption('#cardType', 'Visa');
  await page.fill('#creditCardNumber', '1234567812345678');
  await page.fill('#creditCardMonth', '12');
  await page.fill('#creditCardYear', '2027');
  await page.fill('#nameOnCard', 'Thanveera');

  
  await page.locator('input[value="Purchase Flight"]').click();


  await expect(page.locator('h1')).toContainText('Thank you for your purchase');
  await page.screenshot({ path: 'screenshots/task1-confirmation.png' });
  console.log('Task 1 Flight Purchase Passed');
});