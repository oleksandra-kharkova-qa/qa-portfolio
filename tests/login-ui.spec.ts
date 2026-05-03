import {test, expect} from '@playwright/test';

test ('login form elements are visible', async ({page}) => {
    await page.goto('https://automationexercise.com/login');
    await expect(page.getByText('Login to your account')).toBeVisible();
    await expect(page.locator('[data-qa="login-email"]')).toBeVisible();
    await expect(page.locator('[data-qa="login-password"]')).toBeVisible();
    await expect(page.locator('[data-qa="login-button"]')).toBeVisible();

});