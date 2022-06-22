const { assert } = require("chai")

describe ("vtiger_Contact", async () => {
    it('createContact' , async () => {
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
        
         var savedOrg = await browser.$("//span[@id='dtlview_Organization Name']").getText()

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
        //
        var contacts = await browser.$("//a[text()='Contacts']")
        await contacts.click()

        // Assertion 
        await expect(browser).toHaveUrlContaining('Contacts&action')

        var createContact = await browser.$("//img[@alt='Create Contact...']")
        await createContact.click()

        // Assertion 
        await expect(browser).toHaveUrlContaining('EditView&return')

        var contactNameTxt = await browser.$("//input[@name='lastname']")
        await contactNameTxt.setValue("contactWebDriverIO")

        //click on createOrg inside Contacts
        var createOrgLinkInContact = await browser.$("//img[@src='themes/softed/images/select.gif']")
        await createOrgLinkInContact.click()
        
        await browser.switchWindow('Accounts&action')
        // Assertion 
        await expect(browser).toHaveUrlContaining('Accounts&action')
        
        var searchText = await browser.$("//input[@id='search_txt']")
        await searchText.setValue(savedOrg)
        
        var searchBtn = await browser.$("//input[@name='search']")
        await searchBtn.click()

        // wait
        async () => {
            const savedOrganization = await $("//a[text()='"+savedOrg+"']")
            await savedOrganization.waitForDisplayed({ timeout: 5000 });
        };

        // await browser.$("//a[@id='1']").click()
        var savedOrgSearch = await browser.$("//a[text()='"+savedOrg+"']")
        await savedOrgSearch.click()

        await browser.switchWindow('Contacts&action')
        // Assertion 
        await expect(browser).toHaveUrlContaining('Contacts&action')

        var saveBtn = await browser.$("//input[@class='crmButton small save']")
        await saveBtn.click()
       

        // Assertion 
        var contactInformationPage = await browser.$("//span[@class='dvHeaderText']").getText()
        await console.log(contactInformationPage);
        await assert.include(contactInformationPage,"Contact","contact page not found")

        const adminImg = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        await adminImg.moveTo()

        var signOut = await browser.$("//a[text()='Sign Out']")
        await signOut.click()

    })
})