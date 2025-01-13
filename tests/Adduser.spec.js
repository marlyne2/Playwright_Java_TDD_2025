const { test , expect } = require('@playwright/test')

test.skip({storageState:'playwright/.auth/user.json'})
test(' Add user', async ({page})=> {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//await page.getByRole('link', { name: 'Login' }).click();
await page.locator('//input[@placeholder="Username"]').fill('Admin');
await page.locator('//input[@placeholder="Password"]').fill("admin123");
await page. locator('//button[normalize-space()="Login"]').click();
const Admin= await page.locator ('//aside[@class="oxd-sidepanel"]//li[1]')
await expect(Admin).toBeVisible()

//Select  buttton
//await page .locator('//aside[@class=!oxd-sidepanel"]//li[1]').click();
await page.getByText('Admin').click();
// complete the details in
await page.locator('(//input[@placeholder="Type for hints..."])[1]').fill('Marl');
await page. locator('(//input[@placeholder="Type for hints..."])[2]').fill('012345')



})
test.skip ({storageState:'playwright/.auth/user.json'})
test(' Add userto', async ({page})=> {

/*await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//await page.getByRole('link', { name: 'Login' }).click();
await page.locator('//input[@placeholder="Username"]').fill('Admin');
await page.locator('//input[@placeholder="Password"]').fill("admin123");
await page. locator('//button[normalize-space()="Login"]').click();
const Admin= await page.locator ('//aside[@class="oxd-sidepanel"]//li[1]')
await expect(Admin).toBeVisible()
*/

//Select  buttton
//await page .locator('//aside[@class=!oxd-sidepanel"]//li[1]').click();
await page.getByText('Admin').click();
// complete the details in
await page.locator('(//input[@placeholder="Type for hints..."])[1]').fill('Marl');
await page. locator('(//input[@placeholder="Type for hints..."])[2]').fill('012345')



})
