const{test , expect} =require('@playwright/test')

test ('Add an item to Chart',async({page})=>{
await page.goto ('https://www.demoblaze.com/index.html')
await page.locator('//h4[@class="card-title"]').nth(2).click();
await page. locator('//a[normalize-space()="Add to cart"]')
await page.locator('//a[@id="cartur"]').click();
// Place order
await page.locator('//button[normalize-space()="Place Order"]').click()
await page.locator ('//input[@id="name"]').fill('Marlyne')
await page.locator ('//input[@id="country"]').fill('France')
await page.locator ('//input[@id="city"]').all('Paris')
await page.locator ('//input[@id="card"]').fill("1234567890")
await page.locator ('//input[@id="month"]').fill('January')
await page.locator ('//input[@id="year"]').fill("2026")
await page.locator ('//input[normalize-space()="Purchase"]')

}



)