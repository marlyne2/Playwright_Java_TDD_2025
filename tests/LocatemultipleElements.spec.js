const { test, expect } = require('@playwright/test');

test('LocatemultipleElements',async({page})=>{


await page.goto ('https://www.demoblaze.com/index.html')
//locateMultipleElements on the page 
/*

const links = await page.$$('a');

for(const link of links)
{

     const linktext= await link.textContent();
     console.log(linktext);

}
*/
//locate multiple products on the page 
page. waitForSelector("//div[@id='tbodyid']//div//h4//a");
const products = await page.$$("//div[@id='tbodyid']//div//h4//a");

for (const product of products){

     const prodName= await product.textContent();
     console.log(prodName);
}

})