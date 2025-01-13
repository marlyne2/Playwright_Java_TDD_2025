const { test, expect } = require('@playwright/test');
test.use({ viewport:{width:920,height:500}})
test('Register into a account',async({page})=>{

    await page.goto('https://facebook.com/');
    expect(await page .getByText('Create new account')).toHaveText('Create  new');
    await page .getByText('Create new account').click();
    expect(await page.locator("//input[@name ='firstname']")).toBeVisible();
    await page.locator("//input[@name ='firstname']").fill("Marlyne");
    await page.locator("//input[@name='lastname']").fill("Kay");
    await page.getByLabel("female").check();
    await page.locator ("select#day").selectOption("25");
    await page.locator ("select#month").selectOption("Sep");
    await page.locator ("select#year").selectOption("1986");
    await page.locator("//input[@name='reg_email__']").fill("marlyne@hothmail.com");
    await page.getByLabel("Password").fill("secret");
    expect(2).toEqual (2);
    







})