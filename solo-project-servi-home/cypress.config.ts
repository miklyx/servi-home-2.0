import { defineConfig } from 'cypress';
import { db } from './src/lib/db';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { User } from './src/types';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', {
        clearUser: async (user) => {
          // Delete the user based on stored information
          console.log(user);
          await db.user.delete({
            where: {
              email: user.email,
            },
          });

          return null;
        },
        seedDatabase: async (user) => {
          const hashedPassword: string = await hash(user.password, 10);

          const createdUser: User = await db.user.create({
            data: {
              username: user.username,
              email: user.email,
              password: hashedPassword,
            },
            select: { id: true, email: true, username: true },
          });
          return createdUser;
        },
        login: (createdUser) => {
          cy.task('seedDatabase', createdUser);
          cy.visit('http://localhost:3000/login');
          cy.get('input[name="email"]').type(createdUser.email);
          cy.get('input[name="password"]').type(createdUser.password as string);
          cy.get('button').contains('Login').click();
          cy.location('pathname').should('eq', '/logedin');
        },
      });
    },
  },
});
