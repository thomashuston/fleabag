it('has no tickets available', () => {
  cy.readFile('cypress/data/tickets.json').then(data => cy.visit(data.url));
  cy.get('#salesFrame').should('have.attr', 'src').then(src => cy.visit('https://tickets.vendini.com' + src));
  cy.wait(5000);
  cy.get('#performances > div').as('performances');
  cy.get('@performances').each($performance => cy.wrap($performance).contains('SOLD OUT'));
});
