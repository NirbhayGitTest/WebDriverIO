const { assert } = require("chai")

describe ("vtiger_Campaign", async () => {
    it('createCampaign' , async () => {
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()

        var userName = "admin"
        var password = "root"
        await browser.$("//input[@name='user_name']").setValue(userName)
        await browser.$("//input[@name='user_password']").setValue(password)
        await browser.$("//input[@id='submitButton']").click()
        await browser.pause(2000)
    

        // Assertion 
        var homepage = await browser.$("//a[@class='hdrLink']").getText()
        await console.log(homepage);
        await assert.include(homepage,"Home","failed login")
       
        var more = await browser.$("//a[text()='More']")
        await more.moveTo()

        await browser.$("//a[text()='Campaigns']").click()
        await browser.pause(2000)

        // Assertion 
        var campaignPage = await browser.$("//a[@class='hdrLink']").getText()
        await console.log(campaignPage);
        await assert.include(campaignPage,"Campaigns","campaign page not found")

        await browser.$("//img[@alt='Create Campaign...']").click()
        await browser.pause(2000)

        // Assertion 
        var createNewcampaignPage = await browser.$("//span[@class='lvtHeaderText']").getText()
        await console.log(createNewcampaignPage);
        await assert.include(createNewcampaignPage,"Campaign","campaign page not found")

        await browser.$("//input[@name='campaignname']").setValue("campaignWebDriverIO")
    

    
        await browser.pause(2000)
        var campaignTypeDrop = await browser.$("//select[@name='campaigntype']")
        campaignTypeDrop.selectByVisibleText("Referral Program")
        await browser.pause(2000)
    
        
    
        await browser.$("//input[@class='crmButton small save']").click()
        await browser.pause(2000)

        // Assertion 
        var campaignInformationPage = await browser.$("//span[@class='dvHeaderText']").getText()
        await console.log(campaignInformationPage);
        await assert.include(campaignInformationPage,"Campaign","campaign page not found")

        const adminImg = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        adminImg.moveTo()

        await browser.$("//a[text()='Sign Out']").click()

        // Assertion 
        var loginPage = await browser.$("//a[text()='vtiger']").getText()
        await console.log(loginPage);
        await assert.include(loginPage,"vtig","login page not found")
    })
    
})