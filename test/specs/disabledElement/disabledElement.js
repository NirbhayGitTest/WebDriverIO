describe("disable_suite" , async () => {
    it("disable" , async () => {
        await browser.url("C:/Users/Nirbhay The Omen/Desktop/WebDriverIO_Workspace/test/specs/disabledElement/disabledElement.html")

        const fnameTxtField = await $("//input[@id='fname']")
        await fnameTxtField.setValue("nirbhay")

        const fnameValue = await fnameTxtField.getValue()
        console.log("============fnameValue=========>>>>" + fnameValue);

        const lnameTxtField = await $("//input[@id='lname']")
        await browser.execute((lnameValue) => {
                document.getElementById("lname").setAttribute("value" , lnameValue)
        },"kumar")

        const lnameValue = await lnameTxtField.getValue()
        console.log("============lnameValue=========>>>>" + lnameValue);
        
        await browser.debug()

    })
})