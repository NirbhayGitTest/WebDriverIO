const { assert } = require("chai")

describe ("vtiger_Campaign", async () => {
    it('createCampaign' , async () => {
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle())
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
        // var homepage = await browser.$("//a[@class='hdrLink']").getText()
        // await console.log(homepage);
        // await assert.include(homepage,"Home","failed login")
        await expect(browser).toHaveUrlContaining('index&module=Home')
       
        var more = await browser.$("//a[text()='More']")
        await more.moveTo()

        var campaigns = await browser.$("//a[text()='Campaigns']")
        await campaigns.click()

        // Assertion 
        await expect(browser).toHaveUrlContaining('Campaigns&action')

        // Assertion 
        // var campaignPage = await browser.$("//a[@class='hdrLink']").getText()
        // await console.log(campaignPage);
        // await assert.include(campaignPage,"Campaigns","campaign page not found")

        var createCampaign = await browser.$("//img[@alt='Create Campaign...']")
        await createCampaign.click()

        // Assertion 
        // var createNewcampaignPage = await browser.$("//span[@class='lvtHeaderText']").getText()
        // await console.log(createNewcampaignPage);
        // await assert.include(createNewcampaignPage,"Campaign","campaign page not found")

        // Assertion 
        await expect(browser).toHaveUrlContaining('EditView&return')

        var campaignNameTxt = await browser.$("//input[@name='campaignname']")
        await campaignNameTxt.setValue("campaignWebDriverIO")

        var campaignTypeDrop = await browser.$("//select[@name='campaigntype']")
        await campaignTypeDrop.selectByVisibleText("Referral Program")
 
    
        var saveBtn = await browser.$("//input[@class='crmButton small save']")
        await saveBtn.click()

        // wait
        async () => {
            const savedCampaignText = await $("//span[@class='dvHeaderText']")
            await savedCampaignText.waitForDisplayed({ timeout: 5000 });
        };

        // Assertion 
        var campaignInformationPage = await browser.$("//span[@class='dvHeaderText']").getText()
        await console.log(campaignInformationPage);
        await assert.include(campaignInformationPage,"Campaign","campaign page not found")

        // Assertion 
        await expect(browser).toHaveUrlContaining('Campaigns&record')

        const adminImg = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        await adminImg.moveTo()

        var signOut = await browser.$("//a[text()='Sign Out']")
        await signOut.click()

        // Assertion 
        // var loginPage = await browser.$("//a[text()='vtiger']").getText()
        // await console.log(loginPage);
        // await assert.include(loginPage,"vtig","login page not found")

        // Assertion 
        await expect(browser).toHaveUrlContaining('Login&module')
    })
    
})