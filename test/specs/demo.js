describe ("test suite 1" , () => {
    it('tc_01' , () => {
        console.log("tc_01 executed");
    })

    xit('tc_02' , () => {
        console.log("tc_02 executed");
    })

    it('tc_03' , () => {
        console.log("tc_03 executed");
    })
})


describe ("test suite 2" , () => {
    it('tc_04' , () => {
        console.log("tc_04 executed");
    })

    it.skip('tc_05' , () => {
        console.log("tc_05 executed");
    })

    it('tc_06' , () => {
        console.log("tc_06 executed");
    })
})


