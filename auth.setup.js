import { test as setup , expect } from'@playwright/test'
const Filename= 'playwright/.auth/user.json'

setup('authentication',async ({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //await page.getByRole('link', { name: 'Login' }).click();
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill("admin123");
    await page. locator('//button[normalize-space()="Login"]').click();
    const Admin= await page.locator ('//aside[@class="oxd-sidepanel"]//li[1]')
    await expect(Admin).toBeVisible() 
    await page.context().storageState({path:Filename})  
})
