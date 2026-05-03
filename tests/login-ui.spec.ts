import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test ('login form elements are visible', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.isLoaded();

});

