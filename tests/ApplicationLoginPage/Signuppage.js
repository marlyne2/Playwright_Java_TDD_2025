const { test, expect } = require('@playwright/test');

export class Signuppage {
constructor (page){
this.page=page
this.signuplink=page.locator('id=signin2')
this.username=page.locator('//input[@id="sign-username"]')
this.password=page.locator('//input[@id="sign-password"]')
this.signButton=page.locator("//button[text()='Sign up']")
}

async Signupintodemo(UserName,Password){
await expect(this.signButton).toHaveAttribute('type','button');
await this.username.fill(UserName);
await this.password.fill(Password);
await this.signButton.click();


}

}


