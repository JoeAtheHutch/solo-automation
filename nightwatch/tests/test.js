/*
    Pulling in resources: 
    data used in test cases
    the selectors for interacting with the app
    helper functions
*/
const data = require('../test_data/test_data');
const selectors = require('../test_data/css_selectors');
const functions = require('../test_data/helper_functions')

module.exports = {
    //preconditions to be loaded before the run of each test
    beforeEach: browser => {
        browser.url('http://localhost:3000');
    },
    //conditions to be run after the running of all tests
    after: browser => {
        browser.end();
    },
    'Page loading. I want to make sure we can see the things. JP-44': browser => {
        //In this test we load the page and wait for the evenOdd input field to be visible
        browser
            .waitForElementVisible(selectors.evenOdd.input, 5000)
        //Check for the expected data in the text boxes for our two filter boxes
        browser.expect.element(selectors.objFilter.textBox).text.to.contain(data.goodData.objFilter.name.textBox);
        browser.expect.element(selectors.strFilter.textBox).text.to.contain(data.goodData.strFilter.textBox);
    },
    'Testing odd and even number splitting. JP-45': browser => {
        //Now we're checking the OddEven segemnt for valid data
        functions.enterValue(selectors.evenOdd.input, data.goodData.evenOdd.input, browser) //input good data
        browser
            .click(selectors.evenOdd.button) //click the split button
        browser.expect.element(selectors.evenOdd.evenResults).text.to.contain(data.goodData.evenOdd.evenResults) //verify eve results
        browser.expect.element(selectors.evenOdd.oddResults).text.to.contain(data.goodData.evenOdd.oddResults) //verify odd results
        functions.enterValue(selectors.evenOdd.input, data.badData.evenOdd.input, browser) //enter bad data
        browser
            .click(selectors.evenOdd.button) //Click the button again
        browser.expect.element(selectors.evenOdd.evenResults).text.to.contain(data.badData.evenOdd.evenResults) //verify even results
        browser.expect.element(selectors.evenOdd.oddResults).text.to.contain(data.badData.evenOdd.oddResults) //verify odd results
    },
    'How well does the filter based on object properties work? JP-46': browser => {
        for( var key in data.goodData.objFilter) {
            if( data.goodData.objFilter.hasOwnProperty(key)) {
                functions.enterValue(selectors.objFilter.input, data.goodData.objFilter[key].input, browser)
                browser
                    .click(selectors.objFilter.button)
                    .expect.element(selectors.objFilter.results).text.to.contain(data.goodData.objFilter[key].results)
            }
        }
        for( var key in data.badData.objFilter) {
            if( data.badData.objFilter.hasOwnProperty(key)) {
                functions.enterValue(selectors.objFilter.input, data.badData.objFilter[key].input, browser)
                browser
                    .click(selectors.objFilter.button)
                    .expect.element(selectors.objFilter.results).text.to.contain(data.badData.objFilter[key].results)
            }
        }
    },
    'Substring filter tests. JP-47': browser => {
        functions.enterValue(selectors.strFilter.input, data.goodData.strFilter.input, browser)
        browser.click(selectors.strFilter.button)
            .expect.element(selectors.strFilter.results).text.to.contain(data.goodData.strFilter.results)
        functions.enterValue(selectors.strFilter.input, data.badData.strFilter.input, browser)
        browser.click(selectors.strFilter.button)
            .expect.element(selectors.strFilter.results).text.to.contain(data.badData.strFilter.results)
    },
    'testing the palindrome detector. JP-48': browser => {
        functions.enterValue(selectors.palindrome.input, data.goodData.palindrome.input, browser)
        browser.click(selectors.palindrome.button)
            .expect.element(selectors.palindrome.results).text.to.contain(data.goodData.palindrome.results)
        functions.enterValue(selectors.palindrome.input, data.badData.palindrome.input, browser)
        browser.click(selectors.palindrome.button)
            .expect.element(selectors.palindrome.results).text.to.contain(data.badData.palindrome.results)
    },
    'Testing the sum functionality. JP-49': browser => {
        functions.enterValue(selectors.sum.input1, data.goodData.sum.input1, browser)
        functions.enterValue(selectors.sum.input2, data.goodData.sum.input2, browser)
        browser.click(selectors.sum.button)
            .expect.element(selectors.sum.results).text.to.contain(data.goodData.sum.results)
        functions.enterFilteredValue(selectors.sum.input1, data.badData.sum.input1, '3', browser)
        functions.enterFilteredValue(selectors.sum.input2, data.badData.sum.input2, '51', browser)
        browser.click(selectors.sum.button)
            .expect.element(selectors.sum.results).text.to.contain(data.badData.sum.results)
    }
}