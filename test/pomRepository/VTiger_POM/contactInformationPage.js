class contactInformationPage{


    //create contact button
    get contactLastNameTxt()
    {
        return $("//input[@name='lastname']")
    }

    async contactLastName(){
        await this.contactLastNameTxt.setValue("contactWebDriverIO")
    }


}

module.exports = new contactInformationPage();