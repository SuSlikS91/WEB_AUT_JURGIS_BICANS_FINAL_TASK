describe('DemoQA', () => {
    it('passes', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
      
      // Vards
      cy.get('#firstName').type('John');
  
      // Uzvards
      cy.get('#lastName').type('Doe');
  
      // e-pasts
      cy.get('#userEmail').type('john.doe@example.com');
  
      // dzimums
      cy.get('label[for="gender-radio-1"]').click();

      
      // tel. nr.
      cy.get('#userNumber').type('1234567890');
  
      // dzimšanas datums
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__year-select').select('1930');
      cy.get('.react-datepicker__month-select').select('1'); // Month February
      cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();
  
      // Priekšmets
      cy.get('#subjectsInput').type('Economics{enter}');
  
      // Hobiji
      cy.get('label[for="hobbies-checkbox-3"]').click();
  
      // Augšuplādē attēlu
      cy.get('#uploadPicture').selectFile('cypress/fixtures/TESTdevLAB.png');
  
      // Reģions
      cy.get('#state').click();
      cy.get('#react-select-3-input').type('NCR{enter}');
  
      // Pilsēta
      cy.get('#city').click();
      cy.get('#react-select-4-input').type('Delhi{enter}');
  
      // Iesniedz formu
      cy.get('#submit').click();
  
      // Pārbauda ievadīto informāciju
      cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form');
      cy.get('table.table').within(() => {
        cy.get('tbody').then($body => {
          if ($body.text().includes('Student Name')) {
            cy.get('td').should('contain', 'John Doe');
          }
          
          cy.get('td').contains('Student Name').next().should('have.text', 'John Doe');

          
          cy.get('td').contains('Student Email').next().should('have.text', 'john.doe@example.com');

          
          cy.get('td').contains('Gender').next().should('have.text', 'Male');

          
          cy.get('td').contains('Mobile').next().should('have.text', '1234567890');


          cy.get('td').contains('Date of Birth').next().should('have.text', '28 February,1930');


          cy.get('td').contains('Subjects').next().should('have.text', 'Economics');


          cy.get('td').contains('Hobbies').next().should('have.text', 'Music');


          cy.get('td').contains('Picture').next().should('have.text', 'TESTdevLAB.png');

          // Ja būtu ievadīta drese:
          // cy.get('td').contains('Address').next().should('have.text', '1234 lielā iela');


          cy.get('td').contains('State and City').next().should('have.text', 'NCR Delhi');

        });
      });
    });
  });
  