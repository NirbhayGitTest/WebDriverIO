const { assert } = require("chai")

describe ("vtiger_Contact", async () => {
    it('createContact' , async () => {
        await browser.url("http://localhost:8888/")
        await browser.maximizeWindow()
        await console.log(browser.getTitle())

         var randomNum = Math.round(Math.random()*1000)

         var userName = "admin"
         var password = "root"
         await browser.$("//input[@name='user_name']").setValue(userName)
         await browser.$("//input[@name='user_password']").setValue(password)
        await browser.$("//input[@id='submitButton']").click()

        await browser.pause(2000)
        //
        await browser.$("//td[@class='tabUnSelected']/a[text()='Organizations']").click()
        await browser.pause(2000)

        await browser.$("//img[@alt='Create Organization...']").click()
        await browser.pause(2000)

        
        await browser.$("//input[@name='accountname']").setValue("organizationWebDriverIO"+ randomNum)

        await browser.$("//td[@class='dvtCellInfo']//input[@name='accountname']/../../preceding-sibling::tr/td/div/input[@title='Save [Alt+S]']").click()
        await browser.pause(2000)

        var organizationNameSaved = await browser.$("//span[@id='dtlview_Organization Name']").getText()
        //
        await browser.$("//a[text()='Contacts']").click()
        await browser.pause(2000)

        await browser.$("//img[@alt='Create Contact...']").click()
        await browser.pause(2000)

        await browser.$("//input[@name='lastname']").setValue("contactWebDriverIO")

        //click on createOrg inside Contacts
        await browser.$("//img[@src='themes/softed/images/select.gif']").click()
        await browser.pause(2000)
        await browser.switchWindow('Accounts&action')
        await browser.pause(2000)
        await browser.$("//input[@id='search_txt']").setValue(organizationNameSaved)
        await browser.pause(2000)
        await browser.$("//input[@name='search']").click()

        await browser.pause(2000)

        // await browser.$("//a[@id='1']").click()
        await browser.$("//a[text()='"+organizationNameSaved+"']").click()

        await browser.switchWindow('Contacts&action')

        await browser.$("//input[@class='crmButton small save']").click()
        await browser.pause(2000)

        // Assertion 
        var contactInformationPage = await browser.$("//span[@class='dvHeaderText']").getText()
        await console.log(contactInformationPage);
        await assert.include(contactInformationPage,"Contact","contact page not found")

        const adminImg = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        adminImg.moveTo()

        await browser.$("//a[text()='Sign Out']").click()

    })
})