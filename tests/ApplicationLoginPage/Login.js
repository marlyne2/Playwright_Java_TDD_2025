const { test, expect } = require('@playwright/test');

export class  Login{
constructor (page){
this. page=page 
this.loginlink=page.locator('id=login2')
this.username=page.locator('//input[@id="loginusername"]')
this.password=page.locator('//input[@id="loginpassword"]')
this.loginbutton=page.locator("//button[text()='Log in']")  
}

async Loginintodemo(UserName,Password){
    
await expect (loginbutton).toHaveAttribute('type','button');
await this.username.fill(UserName);
await this.password.fill(Password);
await this.loginbutton.click();
expect(this.password).toHaveValue(Password);
expect(this.username).toHaveValue(UserName);
}


}