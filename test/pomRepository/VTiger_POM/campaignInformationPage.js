const { assert } = require("chai");


class campaignInformationPage{

    get campaignNameText()
    {
        return $("//span[@class='dvHeaderText']")
    }

    async assertCampaignName(){
        var savedCampaignInformation = await this.campaignNameText.getText()
        await console.log(savedCampaignInformation);
        await assert.include(savedCampaignInformation,"Campaign","campaign page not found")
    }

}

module.exports = new campaignInformationPage();