describe ("vtiger" , async () => {
    it("vtiger_contactRadio" , async () => {
        await browser.url("http://localhost:8888/")
        await browser.maximizeWindow()

        var userName = "admin"
        var password = "root"
        var userText = await browser.$("//input[@name='user_name']")
        await userText.setValue(userName)
        var passwordText = await browser.$("//input[@name='user_password']")
        await passwordText.setValue(password)
        const loginBtn = await browser.$("//input[@id='submitButton']")
        await loginBtn.click()

        // Assertion
        await expect(browser).toHaveUrlContaining('index&module=Home')

        var contacts = await browser.$("//a[text()='Contacts']")
        await contacts.click()

        // Assertion 
        await expect(browser).toHaveUrlContaining('Contacts&action')

        var contactCheckbox = await $("//td[text()='CON5 ']/preceding-sibling::td/input[@type='checkbox']")
        await contactCheckbox.click()

        await contactCheckbox.isSelected()
    })
})