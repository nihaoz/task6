describe("todolist test", () => {
    it("user add todo list", () => {
        cy.visit("http://localhost:8080");
        cy.wait(1000);
        cy.get('#app > div > form > input').type('one');
        cy.wait(1000);
        cy.get('#app > div > form > button').click();
    });
    it("user add todo list", () => {
        cy.wait(1000);
        cy.get('#app > div > form > input').type('two');
        cy.wait(1000);
        cy.get('#app > div > form > button').click();
    });
    it("user edit todo list", () => {
        cy.wait(1000);
        cy.get('#app > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(1)').click();
        cy.wait(1000);
        cy.get('#app > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > form > input').clear();
        cy.wait(1000);
        cy.get('#app > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > form > input').type('be diligent');
        cy.wait(1000);
        cy.get('#app > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(1)').click();
    });
    it("user delete todo list", () => {
        cy.wait(1000);
        cy.get('#app > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > button.delete-btn').click();
    });
    after(() => {
      cy.clearCookies();
    });
});
