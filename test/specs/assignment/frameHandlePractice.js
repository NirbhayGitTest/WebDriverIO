describe("ui vision application" , async () => {
    it("frames" , async () => {
        await browser.url("https://ui.vision/demo/webtest/frames/")
        await browser.maximizeWindow()
        console.log(await browser.getTitle());

        //frame 1
        var frame1 = await $("//frame[@src='frame_1.html']")
        await browser.switchToFrame(frame1)

        var frame1Text = await $("//input[@name='mytext1']") 
        await frame1Text.setValue("this is frame 1")

        await browser.pause(2000)

        await browser.switchToFrame(null)
        //await browser.switchToParentFrame()

        //frame 2
        var frame2 = await $("//frame[@src='frame_2.html']")
        await browser.switchToFrame(frame2)

        var frame2Text = await $("//input[@name='mytext2']") 
        await frame2Text.setValue("this is frame 2")

        await browser.pause(2000)

        await browser.switchToFrame(null)
        // await browser.switchToParentFrame()

        //frame 3
        var frame3 = await $("//frame[@src='frame_3.html']")
        await browser.switchToFrame(frame3)

        var frame3Text = await $("//input[@name='mytext3']") 
        await frame3Text.setValue("this is frame 3")

        await browser.pause(2000)

        var frameInsideFrame3 = await $("//iframe")
        await browser.switchToFrame(frameInsideFrame3)

        var radio = await $("//span[text()='I am a human']")
        await radio.click()

        await browser.pause(2000)

        var scrollPoint = await $("//span[contains(text(),'How do you plan')]")
        await scrollPoint.scrollIntoView()

        var checkBox = await $("//span[text()='Form Autofilling']")
        await checkBox.click()

        await browser.pause(2000)


        var scrollPoint2 = await $("//span[contains(text(),'IDE has a LOOP button?')]")
        await scrollPoint2.scrollIntoView()

        var choose = await $("//span[text()='Choose']")
        await choose.click()

        await browser.pause(2000)

        // var option2 = await $("//div[contains(@class,'ziS7vd')]/following-sibling::span")
        var option2 = await $("//div[contains(@class,'QXL7Te')]/div[@data-value='Well, now I know :-)']")
        await option2.click()

        await browser.pause(2000)

        var nextBtn = await $("//span[text()='Next']")
        await nextBtn.click()
        await browser.pause(4000)

        
        //  async () => {
        //     var waitElement = await $("//div[text()='Some text boxes']")
        //      await waitElement.waitForDisplayed({ timeout: 4000 });
        //  }

        var shortText = await $("//input[contains(@class,'zHQkBf')]")
        await shortText.setValue("welcome to webdriverIO")

        await browser.pause(2000)

        var scrollPoint3 = await $("//span[text()='Enter a long answer']")
        await scrollPoint3.scrollIntoView()

        var longText = await $("//textarea[contains(@class,'tL9Q4c')]")
        await longText.setValue("hello everyone")

        await browser.pause(2000)

        var submitBtn = await $("//span[text()='Submit']")
        await submitBtn.click()

        async () => {
            var waitElement2 = await $("//div[@class='vHW8K']")
            await waitElement2.waitForDisplayed({ timeout: 3000 });
        }

        var msgTxt = await $("//div[contains(text(),'testing the UI')]")
        var savedMsg = await msgTxt.getText()
        console.log("========savedMsg============>>>>>>>>>" +savedMsg);

        await browser.switchToFrame(null)
        // await browser.switchToParentFrame()
      
        //frame 4
        var frame4 = await $("//frame[@src='frame_4.html']")
        await browser.switchToFrame(frame4)

        var frame4Text = await $("//input[@name='mytext4']") 
        await frame4Text.setValue("this is frame 4")

        await browser.pause(2000)


    })
})