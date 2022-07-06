const { assert } = require("chai")
const contactInformationPage = require("../../pomRepository/VTiger_POM/contactInformationPage.js")
const contactPage = require("../../pomRepository/VTiger_POM/contactPage.js")
const createContactPage = require("../../pomRepository/VTiger_POM/createContactPage.js")
const homePage = require("../../pomRepository/VTiger_POM/HomePage.js")
// const LoginPage = require("../../pomRepository/VTiger_POM/LoginPage.js")

describe ("vtiger_Contact", async () => {
    it('createContact -Smoke', async () => {
        
        // await LoginPage.open()

        // await console.log(browser.getTitle())
        // await browser.maximizeWindow()

        // await LoginPage.login('admin', 'root');

        // Assertion
        await expect(browser).toHaveUrlContaining('index&module=Home')

        await homePage.contacts()

        // Assertion 
        await expect(browser).toHaveUrlContaining('Contacts&action')

        //click on create contact
        await contactPage.createContact()

        // Assertion 
        await expect(browser).toHaveUrlContaining('EditView&return')

        //fill last name
        await createContactPage.contactLastName()

        //click on save button
        
        await createContactPage.saveBtn()

        // Assertion 
        // var contactInformationPage = await browser.$("//span[@class='dvHeaderText']").getText()
        // await console.log(contactInformationPage);
        // await assert.include(contactInformationPage,"Contact","contact page not found")
        await contactInformationPage.assertContactName()

        // Assertion 
        await expect(browser).toHaveUrlContaining('Contacts&parenttab')

        //Logout 
        // await homePage.signOut()

         // Assertion 
        //  await expect(browser).toHaveUrlContaining('Login&module')

    })
})