const { test, expect } = require('@playwright/test');

test ('Login and send message ',async({page})=>{
await page.goto ('https://www.demoblaze.com/index.html');

//Login into Demo account
await page.locator('id=login2').click();
await page.locator('id=loginusername').fill('Testing_2024');
await page.locator('id=loginpassword').fill('1234');
await page.click("//button[normalize-space()='Log in']");
//Send message
await page. locator ("a[data-target='#exampleModal']").click();
await page.locator ('id=recipient-email'). fill('marlyne@yahoo.com');
await page.locator('id=recipient-name').fill('Marlyne');
await page.locator ('id=message-text').fill('Hello Hope you are well!');
await page.locator ("//button[normalize-space()='Send message']").click();
await page.getByText ('Home').click();







})
