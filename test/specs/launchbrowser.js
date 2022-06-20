describe ("launchbrowser", async () => {
    it('sport' , async () => {
        await browser.url("https://www.yonex.com/")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()

        const badmintonLearnMore = await $("//div[@class='badminton half-screen']//h1")
        await badmintonLearnMore.scrollIntoView()
        await browser.$("//div[@class='badminton half-screen']//span[text()='Learn More']").click()
        await (await browser.$("//a[@title='Go to Home Page']")).click()
    })
})
