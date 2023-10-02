import { prismaMock } from '../singleton';
import handler from '../src/pages/api/cleanerlogin';

test('should create new user ', async () => {
  const user = {
    id: '123',
    email: 'gantkiewicz97@gmail.com',
    username: 'testuser',
    password: '1111',
    createdAt: new Date(),
  };

  prismaMock.user.create.mockResolvedValue(user);

  await expect(handler(res, req)).resolves.toEqual({
    id: 1,
    name: 'Rich',
    email: 'hello@prisma.io',
    acceptTermsAndConditions: true,
  });
});

// import request from 'supertest';
// import handler from '../src/pages/api/cleanerlogin';
// import { db } from '../src/lib/db';
// import { compare } from 'bcrypt';
// import { compare as compareBcrypt } from 'bcrypt';
// import { sign as signJwt } from 'jsonwebtoken';

// import { PrismaClient } from '../__mocks__/prisma';
// jest.mock('../__mocks__/prisma', () => {
//   return {
//     PrismaClient: PrismaClient,
//   };
// });

// jest.mock('../../lib/db', () => ({
//   db: {
//     cleaner: {
//       findUnique: jest.fn(),
//       create: jest.fn(),

//       // ... other functions you want to mock
//     },
//   },
// }));
// jest.mock('bcrypt', () => ({
//   compare: jest.fn(),
// }));
// jest.mock('jsonwebtoken', () => ({
//   sign: jest.fn(),
// }));

// describe('API Route Handler', () => {
//   const mockCreate = jest.spyOn(db.cleaner, 'create');
//   const mockCreatedAt = new Date();

//   mockCreate.mockResolvedValueOnce({
//     email: 'test@example.com',
//     password: 'sdff',
//     id: 'sasd',
//     username: 'sfg',
//     createdAt: mockCreatedAt,
//   });

//   // Mock the bcrypt compare function to return a mock result
//   (compareBcrypt as jest.Mock).mockResolvedValueOnce(true);

//   // Mock the sign function to return a mock token
//   (signJwt as jest.Mock).mockReturnValue('token');

//   afterEach(() => {
//     jest.clearAllMocks(); // Clear mock calls after each test
//   });

//   it('handles valid login', async () => {
//     // Mock Prisma findUnique function to return a successful result
//     db.cleaner.findUnique.mockImplementationOnce(
//       (args: CleanerFindUniqueArgs<DefaultArgs>) => {
//         // Implement your mock logic here
//         return Promise.resolve(/* your mock data */);
//       }
//     );

//     const response = await request(handler).post('/').send({
//       email: 'test@example.com',
//       password: 'password123',
//     });

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual({
//       message: 'User authenticated successfully',
//       cleaner: {
//         id: '123',
//         email: 'test@example.com',
//         username: 'testuser',
//       },
//       token: 'token',
//     });
//   });

//   it('handles valid login', async () => {
//     // Mock Prisma findUnique function to return a successful result
//     db.cleaner.findUnique.mockResolvedValueOnce({
//       id: '123',
//       email: 'test@example.com',
//       username: 'testuser',
//       password: 'password123',
//     });

//     const response = await request(handler).post('/').send({
//       email: 'test@example.com',
//       password: 'password123',
//     });

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual({
//       message: 'User authenticated successfully',
//       cleaner: {
//         id: '123',
//         email: 'test@example.com',
//         username: 'testuser',
//       },
//       token: 'token',
//     });
//   });
// });

// import request from 'supertest';
// import handler from '../src/pages/cleanersignup';
// import { db } from '../src/lib/db';

// jest.mock('../src/lib/db');

// describe('API Route Handler', () => {
//   const mockCreate = jest.spyOn(db.cleaner, 'create');

//   afterEach(() => {
//     jest.clearAllMocks(); // Clear mock calls after each test
//   });
//   const mockCreatedAt = new Date();
//   it('handles valid registration', async () => {
//     // Mock Prisma create function to return a successful result
//     mockCreate.mockResolvedValueOnce({
//       id: '123',
//       email: 'test@example.com',
//       username: 'testuser',
//       password: 'dfdsfs',
//       createdAt: mockCreatedAt,
//     });

//     const response = await request(handler).post('/').send({
//       username: 'testuser',
//       email: 'test@example.com',
//       password: 'password123',
//     });

//     expect(response.status).toBe(201);
//     expect(response.body).toEqual({
//       message: 'User registered successfully',
//       cleaner: {
//         id: '123',
//         email: 'test@example.com',
//         username: 'testuser',
//       },
//       token: expect.any(String),
//     });
//   });

//   it('handles database error', async () => {
//     // Mock Prisma create function to throw an error
//     mockCreate.mockRejectedValueOnce(new Error('Database error'));

//     const response = await request(handler).post('/').send({
//       username: 'testuser',
//       email: 'test@example.com',
//       password: 'password123',
//     });

//     expect(response.status).toBe(500);
//     expect(response.body).toEqual({ error: 'Unable to register user' });
//   });

//   // Add more tests for other scenarios like JWT token generation, invalid HTTP methods, etc.
// });
