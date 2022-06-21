const { assert } = require("chai")

describe ("vtiger_Product", async () => {
    it('login' , async () => {
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()

        var userName = "admin"
        var password = "root"
        const userText = await browser.$("//input[@name='user_name']")
        await userText.setValue(userName)
        const passwordText = await browser.$("//input[@name='user_password']")
        await passwordText.setValue(password)
        const loginBtn = await browser.$("//input[@id='submitButton']")
        await loginBtn.click()
    })

    it('createProduct' , async () => {  

        // Assertion
        await expect(browser).toHaveUrlContaining('index&module=Home')
        
        var product = await browser.$("//a[text()='Products']")
        await product.click()

        // Assertion 
        await expect(browser).toHaveUrlContaining('Products&action')

        var createProduct = await browser.$("//img[@alt='Create Product...']")
        await createProduct.click()

        // Assertion 
        await expect(browser).toHaveUrlContaining('EditView&return')

        var productNameTxt = await browser.$("//input[@name='productname']")
        await productNameTxt.setValue("productWebDriverIO")
    })
       
    // it('upload file' , async () => {  

    //     const filePath = 'E:/TestYantra Soft/Selenium Notes Sir/framework.png'
    //     const remoteFilePath = await browser.uploadFile(filePath)
    //     await browser.$("//input[@id='my_file_element']").setValue(remoteFilePath)
    // })


    it('save and logout' , async () => { 
        var saveBtn = await browser.$("//input[@name='productname']/../../preceding-sibling::tr/preceding-sibling::tr/td/div/input[@class='crmbutton small save']")
        await saveBtn.click()
        
        // wait
        async () => {
            const savedProductText = await $("//span[@class='lvtHeaderText']")
            await savedProductText.waitForDisplayed({ timeout: 3000 });
        };

        // Assertion
        var productInformationPage = await browser.$("//span[@class='lvtHeaderText']").getText()
        await console.log(productInformationPage);
        await assert.include(productInformationPage,"Product","product page not found")

        // Assertion 
        await expect(browser).toHaveUrlContaining('Products&record')

        const adminImg = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        await adminImg.moveTo()

        var signOut = await browser.$("//a[text()='Sign Out']")
        await signOut.click()

    })
})