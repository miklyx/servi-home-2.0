import { defineConfig } from 'cypress';
import { db } from './src/lib/db';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { User, BookingDataSingle } from './src/types';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', {
        clearUser: async (user) => {
          // Delete the user based on stored information

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

        clearBooking: async () => {
          //extract address id

          const bookingData: BookingDataSingle | null =
            await db.booking.findFirst({
              select: {
                id: true,
                userId: true,
                addressId: true,
                status: true,
                createdAt: true,
              },
              orderBy: {
                createdAt: 'asc',
              },
            });

          alert(bookingData);

          if (bookingData) {
            // const service: {id:string}[] = await db.service.findMany({
            //   select: {
            //     id: true,
            //   },
            //   where: {
            //     bookingId: bookingData.id

            //   }
            // });

            db.service.deleteMany({
              where: {
                bookingId: bookingData.id,
              },
            });

            db.address.delete({
              where: {
                id: bookingData.addressId,
              },
            });
            db.booking.delete({
              where: {
                id: bookingData.id,
              },
            });

            // Handle the case where bookingData is not null
          } else {
            console.log('No booking data found.');
            // Handle the case where bookingData is null
          }

          return null;
        },
      });
    },
  },
});
