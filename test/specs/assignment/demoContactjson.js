const { assert } = require("chai")


const LoginPage = require("../../pomRepository/VTiger_POM/LoginPage")
const fs = require('fs')
const credentials = JSON.parse(fs.readFileSync("test/testData/login.json"))




describe ("vtiger_Contact", async () => {
    it('createContact' , async () => {

        await browser.url("http://localhost:8888/")
        console.log(browser.getTitle());
        await browser.maximizeWindow()

        await expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')


    })

    credentials.forEach(({userName,password}) => {

        it('login page credentials' , async() => {
    
            await LoginPage.login(userName,password)
    
            //grab the text present on the html editor ==> erro message
    
            console.log("=============================");
    
            const error_msg = await $(".errorMessage")
            await expect(error_msg).toHaveTextContaining("You must specify")
        })
})

});
    


