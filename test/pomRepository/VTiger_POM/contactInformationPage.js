const { assert } = require("chai");

class contactInformationPage{


    //create contact button
    get contactNameText()
    {
        return $("//span[@class='dvHeaderText']")
    }

    async assertContactName(){
        var savedContactInformation = await this.contactNameText.getText()
        await console.log(savedContactInformation);
        await assert.include(savedContactInformation,"Contact","contact page not found")
    }

}

module.exports = new contactInformationPage();