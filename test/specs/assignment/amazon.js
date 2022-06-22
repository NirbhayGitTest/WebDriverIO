describe("amazon application" , async () => {
    it("click on help" , async () => {
        await browser.url("https://www.amazon.in/")
        await browser.maximizeWindow()
        console.log(await browser.getTitle());

        var help = await $("//a[text()='Help']")

        await help.scrollIntoView()

        await help.click()

    })
})