/*
    Test data for the solo-automation app
    Data is split into good/bad sections, then subdivided based on the portion the data is testing
*/
module.exports = {
    goodData: {
        evenOdd: {
            //data for testing that integers are split appropriately for even/odd
            input: '1,2,3,4,12345678,987654321',
            evenResults: 'Evens: [2,4,12345678]',
            oddResults: 'Odds: [1,3,987654321]'
        },
        objFilter: {
            name: {
                //text box is used to verify that correct text is loading
                textBox: 'Original: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]',
                //filter based on the 'title' property
                input: 'name',
                //expected results, based on the app's sample data
                results: 'Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]'
            },
            title: {
                //text box is used to verify that correct text is loading
                textBox: 'Original: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]',
                //filter based on the 'title' property
                input: 'title',
                //expected results, based on the app's sample data
                results: 'Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]'
            },
            age: {
                //text box is used to verify that correct text is loading
                textBox: 'Original: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]',
                //filter based on the 'title' property
                input: 'age',
                //expected results, based on the app's sample data
                results: 'Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]'
            },
            hairColor: {
                //text box is used to verify that correct text is loading
                textBox: 'Original: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]',
                //filter based on the 'title' property
                input: 'hairColor',
                //expected results, based on the app's sample data
                results: 'Filtered: [ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]'
            }
        },
        strFilter: {
            //text box is used to verify that correct text is loading
            textBox: 'Names: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]',
            //filter based on the substring, 'es'
            input: 'es',
            //expected results for this substring:
            results: 'Filtered Names: [ "James", "Jessica" ]'
        },
        palindrome: {
            //Just quick and lazy palindrome for true test
            input: 'tacocat',
            results: 'Palindrome: true'
        },
        sum: {
            //just quick and lazy inputs for sum test
            input1: '4',
            input2: '5',
            results: 'Sum: 9'
        }
    },
    badData: {
        //Invalid data is admittedly sparse
        //TODO increase amount of bad data for testing
        evenOdd: {
            input: '5, 8, -12, A, B,   |',
            evenResults: 'Evens: [8,-12]',
            oddResults: 'Odds: [5,null,null,null]'
        },
        objFilter: {
            namae: {
                //text box is used to verify that correct text is loading
                textBox: 'Original: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]',
                //filter based on the 'title' property
                input: 'namae',
                //expected results, based on the app's sample data
                results: 'Filtered: []'
            },
            tit45le: {
                //text box is used to verify that correct text is loading
                textBox: 'Original: []',
                //filter based on the 'title' property
                input: 'titl45e',
                //expected results, based on the app's sample data
                results: 'Filtered: []'
            },
            blank: {
                //text box is used to verify that correct text is loading
                textBox: 'Original: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]',
                //filter based on the 'title' property
                input: '',
                //expected results, based on the app's sample data
                results: 'Filtered: []'
            },
            eyeColor: {
                //text box is used to verify that correct text is loading
                textBox: 'Original: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]',
                //filter based on the 'title' property
                input: 'eyeColor',
                //expected results, based on the app's sample data
                results: 'Filtered: []'
            }
        },
        strFilter: {
            //text box is used to verify that correct text is loading
            textBox: 'Names: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]',
            //filter based on the substring, 'es'
            input: 'kl',
            //expected results for this substring:
            results: 'Filtered Names: []'

        },
        palindrome: {
            //Just quick and lazy palindrome for true test
            input: 'Palindrome',
            results: 'Palindrome: false'

        },
        sum: {
            //just quick and lazy inputs for sum test
            input1: '!!3',
            input2: 'a 5  @#$1',
            results: 'Sum: 54'
        }
    }
}
