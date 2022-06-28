
const basePage = require("./basePage");


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends basePage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("//input[@name='user_name']");
    }



    get inputPassword () {
        return $("//input[@name='user_password']");
    }

    get btnSubmit () {
        return $("//input[@id='submitButton']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (userName, password) {
        await this.inputUsername.setValue(userName);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
