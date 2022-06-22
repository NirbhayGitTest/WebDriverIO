describe("jquery application" , async () => {
    it("click on radio 'two'" , async () => {
        await browser.url("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/")
        await browser.maximizeWindow()
        await console.log(browser.getTitle());

        await expect(browser).toHaveUrlContaining('checkboxradio-radio')


        async () => {
            const radioTwoBtn = await $("//label[@for='radio-choice-0b']")
            await radioTwoBtn.waitForDisplayed({ timeout: 3000 });
        }

        const radioTwoBtn = await $("//label[@for='radio-choice-0b']")
        await radioTwoBtn.click()
        // const radioOneBtn = await $("//input[@id='radio-choice-0a']")
        // await radioOneBtn.click()


        // await browser.isElementSelected("//label[@for='radio-choice-0b']")

        await radioTwoBtn.isSelected();

       // await browser.debug()


    })
})