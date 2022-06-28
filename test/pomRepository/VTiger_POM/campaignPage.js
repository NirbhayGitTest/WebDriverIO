class campaignPage{

     //create contact button
     get createCampaignLink()
     {
         return $("//img[@alt='Create Campaign...']")
     }
 
     async createCampaign(){
         await this.createCampaignLink.click()
     }
 
 }
 
 module.exports = new campaignPage();