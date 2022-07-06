describe("alertHandle" , () => {
    it("acceptAlert" , async () => {
        await browser.url("C:/Users/Nirbhay The Omen/Desktop/WebDriverIO_Workspace/test/specs/popup/alert.html")
        // await browser.maximizeWindow()
        var alertText = await browser.getAlertText()
        console.log("==============alertText===========" + alertText);

        await browser.acceptAlert()
        var promptText = await browser.getAlertText()
        console.log("=============promptAlert==========" + promptText);

        await browser.sentAlertText("Enter Something")

        await browser.acceptAlert()
    })
})