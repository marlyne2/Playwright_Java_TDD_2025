const { test, expect } = require('@playwright/test');
const { Signuppage } = require('./ApplicationLoginPage/Signuppage');
const { Login } = require('./ApplicationLoginPage/Login');

test ('Signup with all the Details',async({page})=>{

await page.goto ('./index.html')
// to check the URL 
await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
await page.getByRole('link', { name: 'Sign up' }).click();

const signUp= new Signuppage (page);
signUp.Signupintodemo('Testing_2026','12345')

//const Username= await page.locator('//input[@id="sign-username"]')..;
//await Username.fill('Testing_2026');
//await expect(Username).toHaveValue("Testing_2026");
//const password= await page.locator('//input[@id="sign-password"]');
//await password.fill("12345");
//await expect(password).toHaveValue("12345");
const signButton= await page.locator ("//button[text()='Sign up']");
await expect(signButton).toHaveAttribute('type','button');
await page.goBack()
})


/*
test('Signup with Misssing Details',async({page})=>{

await page.goto ('https://www.demoblaze.com/index.html')
await page.getByRole('link', { name: 'Sign up' }).click();

const signUp= new Signuppage (page);
signUp.Signupintodemo('Testing_2026','12345')

const loginUsername= await page.locator('//input[@id="sign-username"]');
await loginUsername.fill('Testing_2026');
await expect(loginUsername).toHaveValue("Testing_2026");
const password= await page.locator('//input[@id="sign-password"]');
await password.fill();
await expect(password).toHaveValue();
const signButton= await page.locator ("//button[text()='Sign up']");
await expect(signButton).toHaveAttribute('type','button');   

})
*/



test('Login with Valid Credential',async({page})=>{
//await page.goto ('https://www.demoblaze.com/index.html')
await page.getByRole('link', { name: 'Log in' }).click();

const Login = new Login(page);
Login.Loginintodemo('Testing_2026','12345')

//const login=await page.locator('//input[@id="loginusername"]');
//await login.fill("Testing_2026");
//await expect(login).toHaveValue("Testing_2026")
//const loginpassword= await page.locator('//input[@id="loginpassword"]');
//await loginpassword.fill('12345');
//await expect (loginpassword).toHaveValue('12345');
const loginbutton= await page.locator('//button[text()="Log in"]');
await expect (loginbutton).toHaveAttribute('type','button');
})



test('Login with Invalid Credential',async({page})=>{
await page.goto ('https://www.demoblaze.com/index.html')
await page.getByRole('link', { name: 'Log in' }).click();
const login=await page.locator('//input[@id="loginusername"]');
await login.fill("Testing_2026");
await expect(login).toHaveValue("Testing_2026")
const loginpassword= await page.locator('//input[@id="loginpassword"]');
await loginpassword.fill('123456');
await expect (loginpassword).toHaveValue('123456');
const loginbutton= await page.locator('//button[text()="Log in"]');
await expect (loginbutton).toHaveAttribute('type','button');

})