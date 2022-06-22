describe("chercher application" , async () => {
    it("frames" , async () => {
        await browser.url("https://chercher.tech/practice/frames")
        await browser.maximizeWindow()
        console.log(await browser.getTitle());

        var frame1=await $("//iframe[@id='frame1']") 
        await browser.switchToFrame(frame1)

        var frame1Text = await $("//b[@id='topic']/following-sibling::input")
        await frame1Text.setValue("this is frame 1")


        var frame3=await $("//iframe[@id='frame3']") 
        await browser.switchToFrame(frame3)

        var frame3Radio = await $("//input[@id='a']")
        await frame3Radio.click()

        await browser.switchToFrame(null)

        var frame2=await $("//iframe[@id='frame2']") 
        await browser.switchToFrame(frame2)

        var dropFrame2 = await $("//select[@id='animals']")
        await dropFrame2.selectByVisibleText('Big Baby Cat');


        await browser.switchToFrame(null)
        await browser.switchToFrame(frame1)
        
        const frame1Textvalue = await frame1Text.getValue();
        console.log(frame1Textvalue);

    })
})