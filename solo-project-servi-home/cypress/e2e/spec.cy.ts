import { db } from '../../src/lib/db';

import { User } from '../../src/types';

let createdUser: User;
createdUser = {
  username: 'test',
  email: 'test14@gmail.com',
  password: '1111',
};

context('User setup', async () => {
  // beforeEach(() => {
  //   cy.task('seedDatabase', db); // Seed the database
  // });
  // afterEach(() => {
  //   cy.task('clearDatabase', db); // Clear the database after each test
  // });

  it('sign up an user', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('input[name="username"]').type(createdUser.username);
    cy.get('input[name="email"]').type(createdUser.email);
    cy.get('input[name="password"]').type(createdUser.password as string);
    cy.get('button').contains('Sign Up').click();
    cy.location('pathname').should('eq', '/logedin');
    cy.task('clearUser', createdUser);
  });

  it('loggs in the user', () => {
    cy.task('seedDatabase', createdUser);
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type(createdUser.email);
    cy.get('input[name="password"]').type(createdUser.password as string);
    cy.get('button').contains('Login').click();
    cy.location('pathname').should('eq', '/logedin');
    cy.task('clearUser', createdUser);
  });

  it('loggs in and loggs out the user', () => {
    cy.visit('http://localhost:3000/login');
    cy.task('seedDatabase', createdUser);
    cy.get('input[name="email"]').type(createdUser.email);
    cy.get('input[name="password"]').type(createdUser.password as string);
    cy.get('button').contains('Login').click();
    cy.location('pathname').should('eq', '/logedin');
    cy.get('button').contains('Log Out').click();
    cy.location('pathname').should('eq', '/');
    cy.task('clearUser', createdUser);
  });

  it('', () => {
    cy.visit('http://localhost:3000/login');
    cy.task('seedDatabase', createdUser);
    cy.get('input[name="email"]').type(createdUser.email);
    cy.get('input[name="password"]').type(createdUser.password as string);
    cy.get('button').contains('Login').click();
    cy.location('pathname').should('eq', '/logedin');

    cy.get('select[name="measure"]').select('80*150 cm');

    cy.task('clearUser', createdUser);
  });
});
