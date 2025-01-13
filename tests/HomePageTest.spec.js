const { test, expect } = require('@playwright/test');

test('Home page',async({page})=>{
 
    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle=page.title();
     console.log('page title is:', pageTitle);
     
     await expect(page).toHaveTitle('STORE');

    const PageURL= page.url();
    console.log ('page url is:',PageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();

})