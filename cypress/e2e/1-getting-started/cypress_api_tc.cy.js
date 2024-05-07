//cypress/e2e/1-getting-started/cypress_api_tc.cy.js
describe("GET, https://api.github.com/users/octocat", () => {
    it("pobiera dane użytkownika", () => {
        cy.request("GET", "https://api.github.com/users/octocat").then((response) => {
            // Weryfikacja statusu odpowiedzi
            expect(response.status).to.equal(200);

            // Weryfikacja loginu użytkownika
            expect(response.body.login).to.eq("octocat");

            //Weryfikacja czy użytkownik posiada id
            expect(response.body.id).to.be.not.null;

            //Weryfikacji lokalizacji użytkownika
            expect(response.body.location).to.eq("San Francisco");

            //Weryfikacja emaila czy wynosi null
            expect(response.body.email).to.be.null;

            // Weryfikacja liczby publicznych repozytoriów
            expect(response.body.public_repos).to.be.greaterThan(0);

            //Weryfikacja czy url zawiera podany string
            expect(response.body.url).to.include("https://api.github.com")
        });
    });
});