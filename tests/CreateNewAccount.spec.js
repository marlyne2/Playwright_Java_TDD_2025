const { test, expect } = require('@playwright/test');
const { Loginpage } = require('./ApplicationLoginPage/Loginpage');

test('Sign up',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');
    /*//positive test cases for Sign up 
    *await page.locator('id=signin2').click();
    await page.fill('#sign-username','Testing_2024');
    await page.fill("input[id='sign-password']",'1234');
    await page.click ("//button[normalize-space()='Sign up']");
    //await page.close();
    */
    
   //negative test cases for Sugn up
 
   const Login= new Loginpage (page);
   Login.Loginintotheapplication('Testing_2024','1234')
   
    //Login page
    /*await page.locator('id=login2').click();
    await page.locator('id=loginusername').fill('Testing_2024');
    await page.locator('id=loginpassword').fill('1234');
    await page.click("//button[normalize-space()='Log in']")
    await page .locator("//h4[@class='card-title']").nth(1).click();
   await page.close();
   */
    



})
test.skip( 'Should not be able login with invalide data',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    const Login= new Loginpage (page);
    Login.Loginintotheapplication('Testing_2024','1204')

    await page.locator('id=signin2').click();
    await page.fill('#sign-username','Testing_2024');
   // await page.fill("input[id='sign-password']",'1204');
    //await page.click ("//button[normalize-space()='Sign up']");
    //page.on('dialog',dialog=>console.log (dialog.accept()))
    //page.on('dialog',dialog=>dialog.accept())
    await page.getByRole('button').click();
   // await page.close();

})
test .skip( 'Should not be able log data',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.locator('id=signin2').click();
    await page.fill('#sign-username','Testing_2024');
    await page.fill("input[id='sign-password']",'12034');
    await page.click ("//button[normalize-space()='Sign up']");

   // await page.close();

})