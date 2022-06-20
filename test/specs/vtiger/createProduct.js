const { assert } = require("chai")

describe ("vtiger_Product", async () => {
    it('login' , async () => {
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle())

        var userName = "admin"
        var password = "root"
        await browser.$("//input[@name='user_name']").setValue(userName)
        await browser.$("//input[@name='user_password']").setValue(password)
        await browser.$("//input[@id='submitButton']").click()
        await browser.pause(2000)
    })

    it('createProduct' , async () => {  
        
        await browser.$("//a[text()='Products']").click()
        await browser.pause(2000)

        await browser.$("//img[@alt='Create Product...']").click()
        await browser.pause(2000)

        await browser.$("//input[@name='productname']").setValue("productWebDriverIO")
    })
       
    it('upload file' , async () => {  

        const filePath = 'E:/TestYantra Soft/Selenium Notes Sir/framework.png'
        const remoteFilePath = await browser.uploadFile(filePath)
        await browser.$("//input[@id='my_file_element']").setValue(remoteFilePath)

        await browser.pause(2000)
    })


    it('save and logout' , async () => { 
        await browser.$("//input[@name='productname']/../../preceding-sibling::tr/preceding-sibling::tr/td/div/input[@class='crmbutton small save']").click()
        await browser.pause(2000)

        // Assertion
        var productInformationPage = await browser.$("//span[@class='lvtHeaderText']").getText()
        await console.log(productInformationPage);
        await assert.include(productInformationPage,"Product","product page not found")

        const adminImg = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        adminImg.moveTo()

        await browser.$("//a[text()='Sign Out']").click()

    })
})