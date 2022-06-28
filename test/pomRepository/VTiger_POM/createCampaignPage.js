class createCampaignPage{


    //create contact button
    get campaignNameTxt()
    {
        return $("//input[@name='campaignname']")
    }

    async campaignName(){
        await this.campaignNameTxt.setValue("campaignWebDriverIO")
    }

    //click on save button  
    get clickSaveBtn()
    {
        return $("//input[@class='crmButton small save']")
    }

    async saveBtn(){
        await this.clickSaveBtn.click()
    }

}

module.exports = new createCampaignPage();