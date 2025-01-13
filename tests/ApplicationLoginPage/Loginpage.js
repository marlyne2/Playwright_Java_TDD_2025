export class Loginpage{
    constructor (page){
    this.page=page
    this.signuplink=page.locator('id=login2')
    this.loginlink=page.locator('id=login2')
    this.Username=page.locator('id=loginusername')
    this.password=page.locator('id=loginpassword')
    this.loginbutton=page.locator("//button[text()='Log in']") 
    this.signbutton=page.locator("//button[text()='Sign up']") 
    this.cardtiLte=page .locator("//h4[@class='card-title']").nth(1)
     
   
    }
 async Loginintotheapplication(UserName,Password){
   await this.loginlink.click();
   await this.username.fill('Password');
   await this.password.fill('UserName');
   await this.loginbutton.click();
   await this.cardTitle.click();
 }
 async Signupintotheapplication(UserName,Password){
    await this.loginlink.click();
    await this.username.fill(UserName);
    await this.password.fill(Password);
   
  }




}