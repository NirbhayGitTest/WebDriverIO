const { assert } = require("chai")

describe ("vtiger_Document", async () => {

    // var randomNum = Math.round(Math.random()*1000)

    it('login' , async () => {
        await browser.url("http://localhost:8888/")
        await browser.maximizeWindow()
        await console.log(browser.getTitle())

        

        var userName = "admin"
        var password = "root"
        await browser.$("//input[@name='user_name']").setValue(userName)
        await browser.$("//input[@name='user_password']").setValue(password)
        await browser.$("//input[@id='submitButton']").click()
    })
    it('fill Document details' , async () => {
        await browser.pause(2000)

        await browser.$("//td[@class='tabUnSelected']/a[text()='Documents']").click()
        await browser.pause(2000)

        await browser.$("//img[@alt='Create Document...']").click()
        await browser.pause(2000)

        await browser.$("//input[@name='notes_title']").setValue("documentWebDriverIO")

    })

    it('UploadFile' , async () => {

        const filePath = 'E:/TestYantra Soft/Selenium Notes Sir/agile_2022.docx'
         const remoteFilePath = await browser.uploadFile(filePath)
        var file = await browser.$("#filename_I__").setValue(remoteFilePath)

        await browser.pause(2000)
        
    })

    it('Write Paragraph' , async () => {
        browser.switchToFrame(0)
        await browser.$("//body[@class='cke_show_borders']").setValue("Welcome to the WebdriverIO documentation. It will help you to get started fast. If you run into problems, you can find help and answers on our Gitter Channel or you can hit me on Twitter.")
        await browser.pause(2000)
        await browser.keys(['Control', 'a'])
        await browser.keys(['Control', 'c'])
        await browser.pause(2000)

        browser.switchToFrame(null)

        await browser.$("//a[@class='cke_off cke_button_bold']").click()
        await browser.pause(2000)
        await browser.$("//a[@class='cke_off cke_button_italic']").click()
        await browser.pause(2000)
        await browser.$("//a[@class='cke_off cke_button_strike']").click()
        await browser.pause(2000)

    })

    it('save and Logout' , async () => {
        await browser.$("//div[@id='basicTab']/table[@class='dvtContentSpace']//table[@class='small']//input[@title='Save [Alt+S]']").click()
        await browser.pause(2000)

        // Assertion
        var documentInformationPage = await browser.$("//span[@class='dvHeaderText']").getText()
        await console.log(documentInformationPage);
        await assert.include(documentInformationPage,"Document","document page not found")

        const adminImg = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        adminImg.moveTo()

        await browser.$("//a[text()='Sign Out']").click()
    })
})