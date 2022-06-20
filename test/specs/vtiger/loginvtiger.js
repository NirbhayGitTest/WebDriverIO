describe ("launchbrowser", async () => {
    it('crm' , async () => {
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle())

        await browser.$("//input[@name='user_name']").setValue("admin")
        await browser.$("//input[@name='user_password']").setValue("root")
        await browser.$("//input[@id='submitButton']").click()
    })
})