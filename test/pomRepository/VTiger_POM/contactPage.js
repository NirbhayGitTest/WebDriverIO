class contactPage{


    //create contact button
    get createContactLink()
    {
        return $("//img[@alt='Create Contact...']")
    }

    async createContact(){
        await this.createContactLink.click()
    }

}

module.exports = new contactPage();