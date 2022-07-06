const { assert } = require("chai")

const fs = require('fs')
const credentials = JSON.parse(fs.readFileSync("test/testData/organization.json"))

describe ("vtiger_Organization", async () => {

    var randomNum = Math.round(Math.random()*1000)

    it('createOrganization' , async () => {
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()

       // var randomNum = Math.round(Math.random()*1000)

        var userName = "admin"
        var password = "root"
        const userText = await $("//input[@name='user_name']")
        await userText.setValue(userName)
        const passwordText = await $("//input[@name='user_password']")
        await passwordText.setValue(password)
        const loginBtn = await $("//input[@id='submitButton']")
        await loginBtn.click()

        // Assertion
        await expect(browser).toHaveUrlContaining('index&module=Home')

        var organization = await $("//td[@class='tabUnSelected']/a[text()='Organizations']")
        await organization.click()

    })


    credentials.forEach(({org}) => {
    it('org json' , async() => {

        

        // Assertion 
        await expect(browser).toHaveUrlContaining('Accounts&action')
        

        var createOrganization = await $("//img[@alt='Create Organization...']")
        await createOrganization.click()

         // Assertion 
         await expect(browser).toHaveUrlContaining('EditView&return')
        

         var orgNameTxt = await $("//input[@name='accountname']")
         await orgNameTxt.setValue(org+randomNum)

         var saveBtn = await $("//td[@class='dvtCellInfo']//input[@name='accountname']/../../preceding-sibling::tr/td/div/input[@title='Save [Alt+S]']")
         await saveBtn.click()

         // wait
        async () => {
            const savedOrganizationText = await $("//span[@class='dvHeaderText']")
            await savedOrganizationText.waitForDisplayed({ timeout: 5000 });
        }

        
        
    })
})
        it('org signout' , async() => {

        // Assertion
        var organizationInformationPage = await $("//span[@class='dvHeaderText']").getText()
        await console.log(organizationInformationPage);
        await assert.include(organizationInformationPage,"Organization","organization page not found")

         // Assertion 
         await expect(browser).toHaveUrlContaining('Accounts&parenttab')

        const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
        await adminImg.moveTo()

        var signOut = await $("//a[text()='Sign Out']")
        await signOut.click()


        // Assertion 
        await expect(browser).toHaveUrlContaining('Login&module')

    })
 })

    
