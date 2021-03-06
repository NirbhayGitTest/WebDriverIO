const { assert } = require("chai")
const contactPage = require("../../pomRepository/VTiger_POM/contactPage.js")
const createContactPage = require("../../pomRepository/VTiger_POM/createContactPage.js")
const homePage = require("../../pomRepository/VTiger_POM/HomePage.js")
const LoginPage = require("../../pomRepository/VTiger_POM/LoginPage.js")



describe ("vtiger_Contact", async () => {
    it('createContact' , async () => {

      await LoginPage.open()

        // await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()


        await LoginPage.login('admin', 'root');
        // var userName = "admin"
        // var password = "root"
        // var userText = await browser.$("//input[@name='user_name']")
        // await userText.setValue(userName)
        // var passwordText = await browser.$("//input[@name='user_password']")
        // await passwordText.setValue(password)
        // const loginBtn = await browser.$("//input[@id='submitButton']")
        // await loginBtn.click()

        // Assertion
        await expect(browser).toHaveUrlContaining('index&module=Home')
        //********************************************************************************** */
        // intentionally fail  Assertion
        // await expect(browser).toHaveUrlContaining('abc.com')


        //by pom
       await homePage.contacts()
       //by normal
        // var contacts = await browser.$("//a[text()='Contacts']")
        // await contacts.click()

        // Assertion 
        await expect(browser).toHaveUrlContaining('Contacts&action')

        //click on create contact
        await contactPage.createContact()
        // var createContact = await browser.$("//img[@alt='Create Contact...']")
        // await createContact.click()

        // Assertion 
        await expect(browser).toHaveUrlContaining('EditView&return')

        //fill last name
        await createContactPage.contactLastName()
        // var contactNameTxt = await browser.$("//input[@name='lastname']")
        // await contactNameTxt.setValue("contactWebDriverIO")

        //click on save button
        await createContactPage.saveBtn()
        // var saveBtn = await browser.$("//input[@class='crmButton small save']")
        // await saveBtn.click()

        // wait
        // async () => {
        //     const savedContactText = await $("//span[@class='dvHeaderText']")
        //     await savedContactText.waitForDisplayed({ timeout: 5000 });
        // };

        // Assertion 
        var contactInformationPage = await browser.$("//span[@class='dvHeaderText']").getText()
        await console.log(contactInformationPage);
        await assert.include(contactInformationPage,"Contact","contact page not found")

        // Assertion 
        await expect(browser).toHaveUrlContaining('Contacts&parenttab')


        //Logout 
        await homePage.signOut()
        // const adminImg = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        // await adminImg.moveTo()

        // var signOut = await browser.$("//a[text()='Sign Out']")
        // await signOut.click()

        // Assertion 
        await expect(browser).toHaveUrlContaining('Login&module')

    })
})