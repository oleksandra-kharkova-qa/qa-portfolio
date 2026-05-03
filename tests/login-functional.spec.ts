import {test, expect} from '@playwright/test';
import { users } from './data/users';

for (const user of users) {
test (`User can login as ${user.name}`, async ({page}) => {
    await page.goto('https://automationexercise.com/login');
    await page.locator('[data-qa="login-email"]').fill(user.email);
    await page.locator('[data-qa="login-password"]').fill(user.password);
    await page.locator('[data-qa="login-button"]').click();
    await expect(page.getByText(`Logged in as ${user.name}`)).toBeVisible();
});
}