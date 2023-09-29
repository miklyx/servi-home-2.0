export interface BookingData {
  user: {
    id: string;
    email: string;
    password: string;
    username: string;
    createdAt: Date;
  };
  address: {
    id: string;
    detail: string;
    userId: string;
  };
  services: {
    id: string;
    type: string;
    description: string;
    imageUrl: string | null;
    bookingId: string;
  }[];
  id?: string | null | undefined;
  status?: string;
}

interface Service {
  id: string;
  type: string;
  description: string;
  imageUrl: string | null;
  bookingId: string;
}

// export interface Booking {

//     id: String;
//     userId:     String;
//     user:       User;
//     cleaner:    Cleaner;      @relation(fields: [cleanerId], references: [id])
//     addressId:  String;
//     address:    Address;        @relation(fields: [addressId], references: [id])
//     services:   Service[]
//     status     BookingStatus  @default(PENDING)
//     createdAt  DateTime       @default(now())
//   }
// }
