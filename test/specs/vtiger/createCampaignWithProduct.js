const { assert } = require("chai")

describe ("vtiger_CampaignWithProduct", async () => {
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

    it('create campaign with product' , async () => {  
        
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
    
       var saveBtn = await browser.$("//input[@name='productname']/../../preceding-sibling::tr/preceding-sibling::tr/td/div/input[@class='crmbutton small save']")
       await saveBtn.click()

       // wait
       async () => {
        const savedProductText = await $("//span[@class='lvtHeaderText']")
        await savedProductText.waitForDisplayed({ timeout: 3000 });
        };


       var savedProduct = await browser.$("//span[@id='dtlview_Product Name']").getText()
       
       

       // Assertion
       var productInformationPage = await browser.$("//span[@class='lvtHeaderText']").getText()
       await console.log(productInformationPage);
       await assert.include(productInformationPage,"Product","product page not found")

       // Assertion 
       await expect(browser).toHaveUrlContaining('Products&record')

    //campaign
    var more = await browser.$("//a[text()='More']")
    await more.moveTo()

    var campaigns = await browser.$("//a[text()='Campaigns']")
    await campaigns.click()

    // Assertion 
    await expect(browser).toHaveUrlContaining('Campaigns&action')

    var createCampaign = await browser.$("//img[@alt='Create Campaign...']")
    await createCampaign.click()

       // Assertion 
       await expect(browser).toHaveUrlContaining('EditView&return')

       var campaignNameTxt = await browser.$("//input[@name='campaignname']")
       await campaignNameTxt.setValue("campaignWebDriverIO")

        //click on createProduct inside Campaign
        var productLinkInsideCampaign = await browser.$("//input[@name='product_name']/following-sibling::img")
        await productLinkInsideCampaign.click()
        
        await browser.switchWindow('Products&action')
        // Assertion 
       await expect(browser).toHaveUrlContaining('Products&action')
        
        var searchText  = await browser.$("//input[@id='search_txt']")
        await searchText.setValue(savedProduct)
        
        var searchBtn = await browser.$("//input[@name='search']")
        await searchBtn.click()

         // wait
         async () => {
            const savedOrganization = await $("//a[text()='"+savedProduct+"']")
            await savedOrganization.waitForDisplayed({ timeout: 3000 });
        };

        var savedProductSearch = await browser.$("//a[text()='"+savedProduct+"']")
        await savedProductSearch.click()
        // await browser.$("//a[@id='1']").click()

        await browser.switchWindow('Campaigns&action')
        // Assertion 
       await expect(browser).toHaveUrlContaining('Campaigns&action')

       var saveBtn = await browser.$("//input[@class='crmButton small save']")
       await saveBtn.click()

       // wait
       async () => {
           const savedCampaignText = await $("//span[@class='dvHeaderText']")
           await savedCampaignText.waitForDisplayed({ timeout: 3000 });
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