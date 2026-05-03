import {test, expect} from '@playwright/test';
import { users } from './data/users';
import { LoginPage } from './pages/LoginPage';

for (const user of users) {
test (`User can login as ${user.name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(user.email, user.password);
    await expect(page.getByText(`Logged in as ${user.name}`)).toBeVisible();
});
}