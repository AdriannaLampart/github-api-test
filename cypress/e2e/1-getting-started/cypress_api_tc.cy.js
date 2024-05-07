//cypress/e2e/1-getting-started/cypress_api_tc.cy.js
describe("GET, https://api.github.com/users/octocat", () => {
    it("Getting users data", () => {
        cy.request("GET", "https://api.github.com/users/octocat").then((response) => {
            // Check the response status
            expect(response.status).to.equal(200);

            // Check if the user login value matches string
            expect(response.body.login).to.eq("octocat");

            //Chech if the user Id value is not null
            expect(response.body.id).to.be.not.null;

            //Check if the localization value matches the string
            expect(response.body.location).to.eq("San Francisco");

            //Check if the email value is null
            expect(response.body.email).to.be.null;

            // Check if the public repository is greater than 0
            expect(response.body.public_repos).to.be.greaterThan(0);

            //Check if the url value includes the string
            expect(response.body.url).to.include("https://api.github.com")
        });
    });
});
