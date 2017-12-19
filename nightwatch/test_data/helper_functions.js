module.exports = {
    /**
     * enterValue takes a selecter, input value and browser object. 
     * It clears thefield, enters the value and verifies the input is in the field
     * 
     * @param {string} selector a string to specify the css selector the value is to be entered in
     * @param {string} value the value to be entered into the field specified for the 
     * @param {browser} browser a nightwatch browser obeject that contains the selector we are interacting with
     * **/
    enterValue : (selector, value, browser) => {
        browser
            .clearValue(selector)
            .setValue(selector, value)
            .expect.element(selector).to.have.value.that.equals(value)
    },
    enterFilteredValue : (selector, value, filteredValue, browser) => {
        browser
            .clearValue(selector)
            .setValue(selector, value)
            .expect.element(selector).to.have.value.that.equals(filteredValue)
    }

}