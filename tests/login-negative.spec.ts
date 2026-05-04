import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
test.describe("Login negative scenarios", () => {
    test("Email field is required", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fieldIsRequired("email");
});
test("Password field is required", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fieldIsRequired("password");
});
});
