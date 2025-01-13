const{ test, expect } = require('@playwright/test')

export class CompletePurchase{
constructor (page){

this.page =page 
this.Cardtitleitem =page.locator('//h4[@class="card-title"]').nth(2).click();
this.Cartbutton=page.locator('//a[@id="cartur"]')
this.PlaCeOrderbutton=page.locator('//button[normalize-space()="Place Order"]')
this.Name=page.locator ('//input[@id="name"]')
this.Country=page.locator ('//input[@id="country"]')
this.City=page.locator ('//input[@id="city"]')
this.CardNum=page.locator ('//input[@id="card"]')
this.Month=page.locator ('//input[@id="month"]')
this.Year=page.locator ('//input[@id="year"]')
this.Purchasebutton=page.locator ('//input[normalize-space()="Purchase"]')

}

async Puschasinganitem(Cardtitleitem,Name,Country,City,CardNum,Month,Year){
this.Cardtitleitem.nth(2).click();
this.Cartbutton.click();
this.PlaCeOrderbutton.click();
this.Name.fill('name')
this.Country.fill('Country')
this.City.fill('city')
this.CardNum.fill('card')
this.Month.fill('month')
this.Year.fill('year')
this.Purchasebutton.click();




}


}