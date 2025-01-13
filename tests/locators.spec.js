const { test, expect } = require('@playwright/test');

test. describe ('verify login functionality',()=>{
    test.beforeEach('open',()=>{
        console.log('this is before each method')
    })
    test('Login with valid credentials',async({page})=>{
        await page.goto('https://en-gb.facebook.com/login')
        })   
    
   test ('Login with invalid credentials',async({page})=>{
            await page.goto('https://en-gb.facebook.com/login')
            }) 
    test.afterEach('open',()=>{
                console.log('this is after each method')
            })
})

