class createContactPage{


    //create contact button
    get contactLastNameTxt()
    {
        return $("//input[@name='lastname']")
    }

    async contactLastName(){
        await this.contactLastNameTxt.setValue("contactWebDriverIO")
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

module.exports = new createContactPage();