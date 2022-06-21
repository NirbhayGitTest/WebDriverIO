// describe ("errorMsg", async () => {
//     it('open vtiger' , async () => {
//         await browser.url("http://localhost:8888/")
//         console.log(await browser.getTitle())
//         await browser.maximizeWindow()
//         await expect(browser).toHaveTitleContaining("vtiger CRM 5 -")
//     })

//     it('fetching errorMsg' , async () => {
//         await browser.pause(2000)
//         const userName = await browser.$("//input[@name='user_name']")
//         userName.setValue("admin")
//         await browser.pause(2000)
//         const password = await browser.$("//input[@name='user_password']")
//         password.setValue("12345")
//         await browser.pause(2000)
//         const loginBtn = await browser.$("//input[@id='submitButton']")
//         loginBtn.click()
//         await browser.pause(2000)
//         const errormsg = await $("//div[@class='errorMessage']")
//         // console.log(errormsg.getText());
//         await browser.pause(2000)
//         await expect(errormsg).toHaveTextContaining("You must specify a ")
//     })
// })


//by  waitUntil():-

// describe ("errorMsg", async () => {
//     it('open vtiger' , async () => {
//         await browser.url("http://localhost:8888/")
//         console.log(await browser.getTitle())
//         await browser.maximizeWindow()
//         await expect(browser).toHaveTitleContaining("vtiger CRM 5 -")
//     })

//     it('fetching errorMsg' , async () => {
//         await browser.pause(2000)
//         const userName = await browser.$("//input[@name='user_name']")
//         userName.setValue("admin")
//         await browser.pause(2000)
//         const password = await browser.$("//input[@name='user_password']")
//         password.setValue("12345")
//         await browser.pause(2000)
//         const loginBtn = await browser.$("//input[@id='submitButton']")
//         loginBtn.click()
        
//         const errormsg = await $("//div[@class='errorMessage']")
//         await browser.waitUntil(async () => (await (errormsg).getText()) === 'You must specify a valid username and password.',
//             {
//                 timeout: 5000,
//                 timeoutMsg: 'expected text to be different after 5s'
//             } );
//         // var errormsg = await $("//div[@class='errorMessage']")
//         // const errormsg = await $("//div[@class='errorMessage']")
         
//         // console.log(errormsg.getText());
//         // await browser.pause(2000)
//         await expect(errormsg).toHaveTextContaining("You must specify a ")
//     })
// })


//by  getAttributeValue(() :-

describe ("errorMsg", async () => {
    it('open vtiger' , async () => {
        await browser.url("http://localhost:8888/")
        console.log(await browser.getTitle())
        await browser.maximizeWindow()
        await expect(browser).toHaveTitleContaining("vtiger CRM 5 -")
    })

    it('fetching errorMsg' , async () => {
        await browser.pause(2000)
        const userName = await browser.$("//input[@name='user_name']")
        userName.setValue("admin")
        await browser.pause(2000)
        const password = await browser.$("//input[@name='user_password']")
        password.setValue("12345")
        await browser.pause(2000)
        const loginBtn = await browser.$("//input[@id='submitButton']")
        loginBtn.click()
        
        // const errormsg = await $("//div[@class='errorMessage']")
        await browser.waitUntil(async () => (await $(".errorMessage").getAttribute("class")) === 'errorMessage',
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            } );
        // var errormsg = await $("//div[@class='errorMessage']")
        // const errormsg = await $("//div[@class='errorMessage']")
        
        // console.log(errormsg.getText());
        // await browser.pause(2000)
        // await expect(errormsg).toHaveTextContaining("You must specify a ")
    })
})