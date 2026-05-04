import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";

test.describe("login negative scenarios", () => {
    test("email field is required", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fieldIsRequired("email");
});
test("password field is required", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fieldIsRequired("password");
});
test('cannot login with empty email', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await page.evaluate (() => {
        document.querySelector('[data-qa="login-email"]')?.removeAttribute('required');
         });
    await loginPage.login('', 'somepassword');
    await expect(page).toHaveURL(/login/);
});
});


test.describe("login form - bypass browser validation", () => {
    test('cannot login with both fields empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await page.evaluate (() => {
        document.querySelector('[data-qa="login-email"]')?.removeAttribute('required');
        document.querySelector('[data-qa="login-password"]')?.removeAttribute('required');
         });
    await loginPage.login('', '');
    await expect(page).toHaveURL(/login/);
  });
});
