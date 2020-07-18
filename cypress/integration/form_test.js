

describe('Test Text Entering', function() {
    it('Visits a new site', function () {

        cy.visit("index.html");

        cy.visit("./pizza")
        cy.get('.name-field').type('Name')
    })
})


describe('Multiple Toppings Test', function() {
    it('Visits a new site', function () {

        cy.visit("index.html");
        cy.visit("./pizza")

        cy.get('.olives-topping').check()
        cy.get('.sausage-topping').check()
        cy.get('.pepperoni-topping').check()
        cy.get('.pineapple-topping').check()
    })
})

describe('Submit Form', function() {
    it('Visits a new site', function () {

        cy.visit("index.html");
        cy.visit("./pizza")

        cy.get('.name-field').type('Name')

     
        cy.get('.pepperoni-topping').check()
        cy.get('.pineapple-topping').check()

        cy.get('form').submit()
    })
})