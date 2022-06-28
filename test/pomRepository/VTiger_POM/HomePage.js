class HomePage 
{
    //Contact
    get contactLink() {
        return $("//a[text()='Contacts']")
    }

    async contacts(){
        await this.contactLink.click()
    }

    //campaign
    get campaignLink() {
        return $("//a[text()='Campaigns']")
    }

    async campaign(){
        await this.moreDropdown.moveTo()
        await this.campaignLink.click()
    }

    //organization
    get organizationLink() {
        return $("//td[@class='tabUnSelected']/a[text()='Organizations']")
    }

    async organization(){
        await this.organizationLink.click()
    }

    //product
    get productLink() {
        return $("//a[text()='Products']")
    }

    async product(){
        await this.productLink.click()
    }

    //document
    get documentLink() {
        return $("//td[@class='tabUnSelected']/a[text()='Documents']")
    }

    async document(){
        await this.documentLink.click()
    }


    //More dropdown
    get moreDropdown() {
        return $("//a[text()='More']")
    }

    async moreDrpdwn(){
        await this.moreDropdown.moveTo()
    }

    //admin img for sign out
    get adminImg() {
        return $("//img[@src='themes/softed/images/user.PNG']")
    }

    //Sign out
    get signOutLink() {
        return $("//a[text()='Sign Out']")
    }

    async signOut(){
        await this.adminImg.moveTo()
        await this.signOutLink.click()
    }

}

module.exports = new HomePage();