it('get tickets URL', () => {
  cy.visit('https://www.sohoplayhouse.com/fleabag');
  cy.get('a').contains('BUY TICKETS').should('have.attr', 'href').then(href => {
    cy.writeFile('cypress/data/tickets.json', { url: href });
  });
});
