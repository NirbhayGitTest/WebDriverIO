const { assert } = require("chai")

describe ("vtiger_Contact", async () => {
    it('createContact' , async () => {
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle())

        var userName = "admin"
        var password = "root"
        await browser.$("//input[@name='user_name']").setValue(userName)
        await browser.$("//input[@name='user_password']").setValue(password)
        await browser.$("//input[@id='submitButton']").click()

        await browser.pause(2000)

        await browser.$("//a[text()='Contacts']").click()
        await browser.pause(2000)

        await browser.$("//img[@alt='Create Contact...']").click()
        await browser.pause(2000)

        await browser.$("//input[@name='lastname']").setValue("contactWebDriverIO")

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