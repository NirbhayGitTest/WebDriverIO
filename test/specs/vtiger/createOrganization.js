const { assert } = require("chai")

describe ("vtiger_Organization", async () => {
    it('createOrganization' , async () => {
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle())

        var userName = "admin"
        var password = "root"
        await browser.$("//input[@name='user_name']").setValue(userName)
        await browser.$("//input[@name='user_password']").setValue(password)
        await browser.$("//input[@id='submitButton']").click()

        await browser.pause(2000)

        await browser.$("//td[@class='tabUnSelected']/a[text()='Organizations']").click()
        await browser.pause(2000)

        await browser.$("//img[@alt='Create Organization...']").click()
        await browser.pause(2000)

        await browser.$("//input[@name='accountname']").setValue("organizationWebDriverIO")

        await browser.$("//td[@class='dvtCellInfo']//input[@name='accountname']/../../preceding-sibling::tr/td/div/input[@title='Save [Alt+S]']").click()
        await browser.pause(2000)

        // Assertion
        var organizationInformationPage = await browser.$("//span[@class='dvHeaderText']").getText()
        await console.log(organizationInformationPage);
        await assert.include(organizationInformationPage,"Organization","organization page not found")

        const adminImg = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        adminImg.moveTo()

        await browser.$("//a[text()='Sign Out']").click()


    })
})