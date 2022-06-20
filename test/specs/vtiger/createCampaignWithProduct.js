const { assert } = require("chai")

describe ("vtiger_CampaignWithProduct", async () => {
    it('login' , async () => {
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()

        var userName = "admin"
        var password = "root"
        await browser.$("//input[@name='user_name']").setValue(userName)
        await browser.$("//input[@name='user_password']").setValue(password)
        await browser.$("//input[@id='submitButton']").click()
        await browser.pause(2000)
    })

    it('create campaign with product' , async () => {  
        
        await browser.$("//a[text()='Products']").click()
        await browser.pause(2000)

        await browser.$("//img[@alt='Create Product...']").click()
        await browser.pause(2000)

        await browser.$("//input[@name='productname']").setValue("productWebDriverIO")
    
        
    
        await browser.$("//input[@name='productname']/../../preceding-sibling::tr/preceding-sibling::tr/td/div/input[@class='crmbutton small save']").click()
        await browser.pause(2000)

        // Assertion 
        var productNameSaved = await browser.$("//span[@id='dtlview_Product Name']").getText()
        console.log(productNameSaved);
        assert.include(productNameSaved,"product","product not saved")
        // assert.equal(productNameSaved,"productWebDriverIO","product not saved")

    
        var more = await browser.$("//a[text()='More']")
        await more.moveTo()

        await browser.$("//a[text()='Campaigns']").click()
        await browser.pause(2000)

        await browser.$("//img[@alt='Create Campaign...']").click()
        await browser.pause(2000)

        await browser.$("//input[@name='campaignname']").setValue("campaignWebDriverIO")

        //click on createProduct inside Campaign
        await browser.$("//input[@name='product_name']/following-sibling::img").click()
        await browser.pause(2000)
        await browser.switchWindow('Products&action')
        await browser.pause(2000)
        await browser.$("//input[@id='search_txt']").setValue(productNameSaved)
        await browser.pause(2000)
        await browser.$("//input[@name='search']").click()

        await browser.pause(2000)

        await browser.$("//a[text()='"+productNameSaved+"']").click()
        // await browser.$("//a[@id='1']").click()

        await browser.switchWindow('Campaigns&action')

        await browser.$("//input[@class='crmButton small save']").click()
        await browser.pause(2000)

        // Assertion 
        var campaignInformationPage = await browser.$("//span[@class='dvHeaderText']").getText()
        await console.log(campaignInformationPage);
        await assert.include(campaignInformationPage,"Campaign","campaign page not found")

        const adminImg = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        adminImg.moveTo()

        await browser.$("//a[text()='Sign Out']").click()

    })
})