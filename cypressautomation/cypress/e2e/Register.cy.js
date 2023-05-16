describe('Register', () => {
    it('login', () => {
        cy.visit("https://automationexercise.com/");
        cy.get('[src="/static/images/home/logo.png"]').should("be.visible");
        cy.get('[href="/login"]').click();
        cy.get('div[class="signup-form"]>h2').contains("New User Signup!");
        cy.get('input[data-qa="signup-name"]').type('Vennela Jogu');
        cy.get('input[data-qa="signup-email"]').type('vennelajogu18@gmail.com');
        cy.get('button[data-qa="signup-button"]').click();
        cy.get('h2[class="title text-center"]').contains('Enter Account Information');
        cy.get('#uniform-id_gender2').click();
        cy.get('#name').clear().type('vennela jogu');
        cy.get('#password').type('Vennela@1224');
        cy.get('#days').select('14').should('have.value','14');
        // cy.get('#months').each(($el,index,$list)=>{
        //     cy.log($el.text())
        //     if($el.text() ===4){
        //         cy.wrap($el).click()
        //     }
        // })
        cy.get('#months').select('4').should('have.value', '4');
        cy.get('#years').select('1999').should('have.value', '1999')
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('[data-qa="first_name"]').type('vennela');
        cy.get('[data-qa="last_name"]').type('jogu');
        cy.get('#company').type('zenq');
        cy.get('#address1').type('sri nagar colony,ramanthapur');
        cy.get('#country').select('India').should('have.value', 'India');
        cy.get('#state').type('Telangana');
        cy.get('#city').type('Hyderabad');
        cy.get('#zipcode').type('500013');
        cy.get('#mobile_number').type('6305248438');
        cy.get('button[data-qa="create-account"]').click();
        cy.get('h2[data-qa="account-created"]').contains('Account Created!');
        cy.get('[data-qa="continue-button"]').click();
        cy.wait(4000);
        cy.get('[class="fa fa-user"]').should('be.visible', ' vennela jogu ')       
        cy.get('i[class="fa fa-trash-o"]').click();
        cy.get('[data-qa="account-deleted"]').contains('Account Deleted!');
        cy.get('[data-qa="continue-button"]').click();
    })
})