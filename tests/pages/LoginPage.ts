import { Page, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    private emailInput(){return this.page.locator('[data-qa="login-email"]')};
    private passwordInput(){return this.page.locator('[data-qa="login-password"]')};
    private loginButton(){return this.page.locator('[data-qa="login-button"]')};

    async navigate() {
        await this.page.goto('https://automationexercise.com/login');
    };
    async login(email: string, password: string) {
        await this.emailInput().fill(email);
        await this.passwordInput().fill(password);
        await this.loginButton().click();
    }
    async isLoaded() {
        await expect(this.page.getByText('Login to your account')).toBeVisible();
        await expect(this.emailInput()).toBeVisible();
        await expect(this.passwordInput()).toBeVisible();
        await expect(this.loginButton()).toBeVisible();
    }
}

