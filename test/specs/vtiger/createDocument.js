const { assert } = require("chai")

describe ("vtiger_Document", async () => {

    // var randomNum = Math.round(Math.random()*1000)

    it('login' , async () => {
        await browser.url("http://localhost:8888/")
        await browser.maximizeWindow()
        await console.log(browser.getTitle())

        var userName = "admin"
        var password = "root"
        const userText = await browser.$("//input[@name='user_name']")
        await userText.setValue(userName)
        const passwordText = await browser.$("//input[@name='user_password']")
        await passwordText.setValue(password)
        const loginBtn = await browser.$("//input[@id='submitButton']")
        await loginBtn.click()
    })
    it('fill Document details' , async () => {
        
        // Assertion
        await expect(browser).toHaveUrlContaining('index&module=Home')

        var document = await browser.$("//td[@class='tabUnSelected']/a[text()='Documents']")
        await document.click()
       

        // Assertion 
        await expect(browser).toHaveUrlContaining('Documents&action')

        var createDocument = await browser.$("//img[@alt='Create Document...']")
        await createDocument.click()

        // Assertion 
        await expect(browser).toHaveUrlContaining('EditView&return')
       

        var documentNameTxt = await browser.$("//input[@name='notes_title']")
        await documentNameTxt.setValue("documentWebDriverIO")

    })

    it('UploadFile' , async () => {

        const filePath = 'E:/TestYantra Soft/Selenium Notes Sir/agile_2022.docx'
        const remoteFilePath = await browser.uploadFile(filePath)
        await browser.$("#filename_I__").setValue(remoteFilePath)
        
    })

    it('Write Paragraph' , async () => {
        
        await browser.switchToFrame(0)

        var msgAreaText = await browser.$("//body[@class='cke_show_borders']")
        await msgAreaText.setValue("Welcome to the WebdriverIO documentation. It will help you to get started fast. If you run into problems, you can find help and answers on our Gitter Channel or you can hit me on Twitter.")
        
        await browser.keys(['Control', 'a'])
        await browser.keys(['Control', 'c'])
       

        await browser.switchToFrame(null)

        var boldbtn = await browser.$("//a[@class='cke_off cke_button_bold']")
        await boldbtn.click()
       
        var italicbtn = await browser.$("//a[@class='cke_off cke_button_italic']")
        await italicbtn.click()
       
        var strikebtn = await browser.$("//a[@class='cke_off cke_button_strike']")
        await strikebtn.click()
        

    })

    it('save and Logout' , async () => {
        var saveBtn = await browser.$("//div[@id='basicTab']/table[@class='dvtContentSpace']//table[@class='small']//input[@title='Save [Alt+S]']")
        await saveBtn.click()

        // wait
        async () => {
            const savedDocumentText = await $("//span[@class='dvHeaderText']")
            await savedDocumentText.waitForDisplayed({ timeout: 5000 });
        };
        

        // Assertion 
        await expect(browser).toHaveUrlContaining('Documents&parenttab')

        // Assertion
        var documentInformationPage = await browser.$("//span[@class='dvHeaderText']").getText()
        await console.log(documentInformationPage);
        await assert.include(documentInformationPage,"Document","document page not found")

        

        const adminImg = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        await adminImg.moveTo()

        var signOut = await browser.$("//a[text()='Sign Out']")
        await signOut.click()
    })
})