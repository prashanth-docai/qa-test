/// <reference types="cypress" />

// parse json file with test data
const tests = require('../fixtures/registration_form_dataset.json')

// test suite
describe('Test login form', () => {
    // opens page befor every test
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    // iterate through each test from json file
    tests.forEach(test => {
        it(test.name, function () {
            // type into field
            cy.get('input[name=firstName]').type(test.firstName)
                // verify string is in the field
                .should('have.value', test.firstName)
            cy.get('input[name=lastName]').type(test.lastName)
                .should('have.value', test.lastName)
            cy.get('input[name=emailAddress]').type(test.emailAddress)
                .should('have.value', test.emailAddress)
            cy.get('input[name=streetAddress]').type(test.streetAddress)
                .should('have.value', test.streetAddress)
            cy.get('input[name=city]').type(test.city)
                .should('have.value', test.city)
            cy.get('button[title=Open]').click()
            // hardcoded State to Alabama. Can be randomly chosen from the list
            cy.get('li')
                .should('have.length', 59)
                .contains('Alabama')
                .click()
            cy.get('input[name=zip]')
                .type(test.zip)
                .should('have.value', test.zip)
            cy.get('input[name=phoneNumber]')
                .type(test.phoneNumber)
                .should('have.value', test.phoneNumber)

            if (test.dateOfBirth === 'minor') {
                var dob = customdate()
            } else {
                var dob = test.dateOfBirth
            }
            cy.get('input[name=dateOfBirth]')
                .clear()
                .type(dob)

            cy.get('button[type=submit]').click()
            // Verify error msgs are present

            if (test.name === 'Happy path') {
                cy.get('#outlined-basic-helper-text')
                   .should('not.exist')
            } else { 
            cy.get('#outlined-basic-helper-text')
                .should('exist')
                .should('have.text', test.expected_error_msg) }

        });
    });
})

// dynamically generate DOB for < 18 year old test
var customdate = function () {
    var today = new Date();
    var day = String(today.getDate() - 1).padStart(2, '0')
    var month = String(today.getMonth() + 1).padStart(2, '0')
    var year = today.getFullYear() - 18
    var date = month + day + year
    return (date)
};
