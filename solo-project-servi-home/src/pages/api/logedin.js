import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed if it's not a POST request
  }

  const { services, address, userId } = req.body;

  try {
    const createdAddress = await prisma.address.create({
      data: {
        detail: address,
        userId: userId
      },
    });
    

    const bookingsData = []; // to collect all bookings data

    for(let service of services) {
      const serviceData = {
        type: service.title,
        description: JSON.stringify([
          { attribute: "rugmeasure", value: service.rugmeasure },
          { attribute: "rugcondition", value: service.rugcondition },
          { attribute: "measure", value: service.measure },
          { attribute: "condition", value: service.condition },
          { attribute: "material", value: service.material },
          { attribute: "servicetable", value: service.servicetable }
      ]),
      };

      const createdService = await prisma.service.create({ data: serviceData });
      

      const bookingData = {
        userId: userId,
        serviceId: createdService.id,
        addressId: createdAddress.id,
        status: "PENDING"
      };

      bookingsData.push(bookingData);
    }

    // Create all bookings at once
    await prisma.booking.createMany({ data: bookingsData });

    return res.status(200).json({ message: 'Order successfully saved!' });
  } catch (error) {
    console.error("Error saving order:", error);
    return res.status(500).json({ message: `Internal Server Error: ${error.message}` });
  } finally {
    await prisma.$disconnect(); // Ensure prisma client is closed
  }
};


