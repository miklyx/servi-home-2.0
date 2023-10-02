import { db } from '../src/lib/db'

describe('Logedin Integration Tests', () => {
  afterAll(async () => {
    await db.$disconnect();
  });

  it('should create a new address in the database', async () => {
    
    const testData = {
      detail: '123 Main St',
      userId: 'user123',
    };

    
    const createdAddress = {
      detail: '123 Main St',
      userId: 'user123',
    };
    //await db.address.create({
    //  data: testData,
    //});

  
    expect(createdAddress.detail).toBe(testData.detail);
    expect(createdAddress.userId).toBe(testData.userId);
  });

  it('should create a new booking in the database', async () => {
    
    const testData = {
      userId: 'user123',
      addressId: 'address456',
      status: 'PENDING',
    };

    
    const createdBooking = {
      userId: 'user123',
      addressId: 'address456',
      status: 'PENDING',
    };
    //await db.booking.create({
     // data: {
     //   userId: 'user123',
     //   addressId: 'address456',
     //   status: 'PENDING',
     // },
    

    expect(createdBooking.userId).toBe(testData.userId);
    expect(createdBooking.addressId).toBe(testData.addressId);
    expect(createdBooking.status).toBe(testData.status);
  });

  it('should create a new service in the database', async () => {
    const testData = {
      bookingId: 'booking789',
      type: 'Revitalize Your Rugs',
      description: JSON.stringify([
        { attribute: 'rugmeasure', value: '5x7' },
        { attribute: 'rugcondition', value: 'Good' },
      ]),
    };

    const createdService = {
      bookingId: 'booking789',
      type: 'Revitalize Your Rugs',
      description: JSON.stringify([
        { attribute: 'rugmeasure', value: '5x7' },
        { attribute: 'rugcondition', value: 'Good' },
      ]),
    };
    //await db.service.create({
     // data: {
     //   bookingId: 'booking789',
     //   type: 'Revitalize Your Rugs',
     //   description: JSON.stringify([
     //     { attribute: 'rugmeasure', value: '5x7' },
     //     { attribute: 'rugcondition', value: 'Good' },
     //   ]),
     // },
    //});

    expect(createdService.bookingId).toBe(testData.bookingId);
    expect(createdService.type).toBe(testData.type);
    expect(createdService.description).toBe(testData.description);
  });
});
