const { test, expect } = require('@playwright/test');

test('Part Assignment 4 - Flight Purchase Automation', async ({ page }) => {

  // STEP 1: Paris to London
  await page.goto('https://blazedemo.com/');
  await page.selectOption('select[name="fromPort"]', 'Paris');
  await page.selectOption('select[name="toPort"]', 'London');
  await page.locator('input[value="Find Flights"]').click();
  await page.screenshot({ path: 'screenshots/task1-flight-list.png' });

  // STEP 2: First flight ah click pannu - edhu vaanalum okay
  const firstRow = page.locator('table tbody tr').first();
  await firstRow.locator('input[value="Choose This Flight"]').click();
  await page.waitForURL(/purchase\.php/);

  // STEP 3: Purchase page vandhucha nu mattum paaru
  await expect(page.locator('h2')).toContainText('Your flight');
  await page.screenshot({ path: 'screenshots/task1-purchase-form.png' });

  // STEP 4: Thanveera details
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

  // STEP 5: Purchase
  await page.locator('input[value="Purchase Flight"]').click();

  // STEP 6: Confirmation mattum check pannu - Idhu than mukkiyam
  await expect(page.locator('h1')).toContainText('Thank you for your purchase');
  await page.screenshot({ path: 'screenshots/task1-confirmation.png' });
  console.log('Task 1 Flight Purchase Passed');
});