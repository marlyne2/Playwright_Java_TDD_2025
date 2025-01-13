const { test, expect} =require('@playwright/test')

test.only('Add New Claim', async ({page})=> {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//await page.getByRole('link', { name: 'Login' }).click();
//await page.locator('//input[@placeholder="Username"]').fill('Admin');
//await page.locator('//input[@placeholder="Password"]').fill("admin123");
//await page. locator('//button[normalize-space()="Login"]').click();
//const Admin= await page.locator ('//aside[@class="oxd-sidepanel"]//li[1]')
//await expect(Admin).toBeVisible()

//Select  buttton
//await page .locator('//aside[@class=!oxd-sidepanel"]//li[1]').click();
await page.getByText('Performance').click();
// complete the details in
//await page.getByPlaceholder('//label[normalize-space()="Employee Name"]').fill('aymen akil');
await page. locator('//label[text()="Employee Name"]/following::input[1]').fill('Radha  Gupta')
await page. locator('//label[text()="Reference Id"]/following::input[1]').fill('Radha  Gupta')
await page.locator('//div[contains(text(),"Account Assistant")]').fill('Account Assistant');
await page. selectOption ('//div[contains(text(),"Accommodation")])[1]')
const selectValue = await page.$eval('//div[contains(text()',(element)=> element.value);
expect (selectValue).toContain('Accommodation')
await page.locator("oxd-select-text-input").selectOption("Submitted")
await page.locator('oxd-input oxd-input--active').selectOption('2025-10-01')
await page.locator('(//input[@placeholder=yyyy-dd-mm"])[2]').selectOption('2025-20-06')
await page . locator('/div[contains(text(),"Current and Past Employees")]').selectOption('Current and Past Employees')





})   