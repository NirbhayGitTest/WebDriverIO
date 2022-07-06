const { assert } = require("chai")
const campaignInformationPage = require("../../pomRepository/VTiger_POM/campaignInformationPage")
const campaignPage = require("../../pomRepository/VTiger_POM/campaignPage")
const createCampaignPage = require("../../pomRepository/VTiger_POM/createCampaignPage")

const HomePage = require("../../pomRepository/VTiger_POM/HomePage")
// const LoginPage = require("../../pomRepository/VTiger_POM/LoginPage")  // pasted in beforeTest hook so no need now

describe ("vtiger_Campaign", async () => {
    it('createCampaign -Smoke' , async () => {
        
        // await LoginPage.open()

        // await console.log(browser.getTitle())
        // await browser.maximizeWindow()

        // await LoginPage.login('admin', 'root');
    

        // Assertion
        await expect(browser).toHaveUrlContaining('index&module=Home')
       
        await HomePage.campaign()

        // Assertion 
        await expect(browser).toHaveUrlContaining('Campaigns&action')

        await campaignPage.createCampaign()


        // Assertion 
        await expect(browser).toHaveUrlContaining('EditView&return')

        await createCampaignPage.campaignName()

        

        await createCampaignPage.saveBtn()

        

        // var campaignTypeDrop = await browser.$("//select[@name='campaigntype']")
        // await campaignTypeDrop.selectByVisibleText("Referral Program")

        // wait
        async () => {
            const savedCampaignText = await $("//span[@class='dvHeaderText']")
            await savedCampaignText.waitForDisplayed({ timeout: 5000 });
        };

        // Assertion 
        // var campaignInformationPage = await browser.$("//span[@class='dvHeaderText']").getText()
        // await console.log(campaignInformationPage);
        // await assert.include(campaignInformationPage,"Campaign","campaign page not found")

        await campaignInformationPage.assertCampaignName()

        // Assertion 
        await expect(browser).toHaveUrlContaining('Campaigns&record')

        // await HomePage.signOut()

        // Assertion 
        // var loginPage = await browser.$("//a[text()='vtiger']").getText()
        // await console.log(loginPage);
        // await assert.include(loginPage,"vtig","login page not found")

        // Assertion 
        // await expect(browser).toHaveUrlContaining('Login&module')
    })
    
})