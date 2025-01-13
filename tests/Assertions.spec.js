const { test, expect } = require('@playwright/test');

test('Assertions',async({page})=>{

await page.goto ('https://demo.nopcommerce.com/register')

// this is an assertions to verify if this url exist- expect this to work

await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

// verify the page title

await expect(page).toHaveTitle('nopCommerce demo store. Register')

// to verify if the element is visible
const logoElement=await page.locator('.header-logo')
await expect(logoElement).toBeVisible()

// to verify if the  element is enabled
const searchstorebox=await page.locator('#small-searchterms')
await expect(searchstorebox).toBeEnabled ()

// to verify if the  element is disabled
const searchstoreboxs=await page.locator('#small-searchterms')
await expect(searchstoreboxs).toBeDisabled ()

// to verify if the Radio/Checkbox is checked
const maleRadioButton= await page .locator ('#gender-male')
await maleRadioButton.click()// to select
await expect(maleRadioButton).toBeChecked()

const locator = page.locator('input[type=number]');
await expect(locator).toHaveValue(/[0-9]/);

})