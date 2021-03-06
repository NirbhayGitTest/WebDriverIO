const { assert } = require("chai")

describe ("vtiger_Organization", async () => {
    it('createOrganization' , async () => {
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()

        var randomNum = Math.round(Math.random()*1000)

        var userName = "admin"
        var password = "root"
        const userText = await browser.$("//input[@name='user_name']")
        await userText.setValue(userName)
        const passwordText = await browser.$("//input[@name='user_password']")
        await passwordText.setValue(password)
        const loginBtn = await browser.$("//input[@id='submitButton']")
        await loginBtn.click()

        // Assertion
        await expect(browser).toHaveUrlContaining('index&module=Home')

        var organization = await browser.$("//td[@class='tabUnSelected']/a[text()='Organizations']")
        await organization.click()

        // Assertion 
        await expect(browser).toHaveUrlContaining('Accounts&action')
        

        var createOrganization = await browser.$("//img[@alt='Create Organization...']")
        await createOrganization.click()

         // Assertion 
         await expect(browser).toHaveUrlContaining('EditView&return')
        

         var orgNameTxt = await browser.$("//input[@name='accountname']")
         await orgNameTxt.setValue("organizationWebDriverIO"+randomNum)

         var saveBtn = await browser.$("//td[@class='dvtCellInfo']//input[@name='accountname']/../../preceding-sibling::tr/td/div/input[@title='Save [Alt+S]']")
         await saveBtn.click()
        

        // wait
        async () => {
            const savedOrganizationText = await $("//span[@class='dvHeaderText']")
            await savedOrganizationText.waitForDisplayed({ timeout: 5000 });
        };

        // Assertion
        var organizationInformationPage = await browser.$("//span[@class='dvHeaderText']").getText()
        await console.log(organizationInformationPage);
        await assert.include(organizationInformationPage,"Organization","organization page not found")

         // Assertion 
         await expect(browser).toHaveUrlContaining('Accounts&parenttab')

        const adminImg = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        await adminImg.moveTo()

        var signOut = await browser.$("//a[text()='Sign Out']")
        await signOut.click()


        // Assertion 
        await expect(browser).toHaveUrlContaining('Login&module')


    })
})