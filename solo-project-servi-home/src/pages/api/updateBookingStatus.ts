import { PrismaClient } from "@prisma/client";
import { sendEmail } from "../../lib/sendEmail";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
const sendEmail = async function (email:string, title:string, text:string) : Promise<void> {
  await sendEmail(email, 'Service Confirmation', 'A cleaner has accepted your service!'); 
}

export default async (req:NextApiRequest, res:NextApiResponse) => {
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
    
  
    await sendEmail(updatedBooking.user.email, 'Service Confirmation', 'A cleaner has accepted your service!');
  

    return res.status(200).json(updatedBooking);
  } catch (error) {
    console.error("Error updating booking:", error);
    return res.status(500).json({ message: `Internal Server Error: ${error.message}` });
  } finally {
    await prisma.$disconnect();
  }
};
