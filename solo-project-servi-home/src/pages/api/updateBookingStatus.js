import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { bookingId } = req.body;

  try {
    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: {
        status: 'ACCEPTED',
      },
      include: {
        address: true,
        services: true,
        user: true,
      },
    });

    


    return res.status(200).json(updatedBooking);
  } catch (error) {
    console.error("Error updating booking:", error);
    return res.status(500).json({ message: `Internal Server Error: ${error.message}` });
  } finally {
    await prisma.$disconnect();
  }
};
