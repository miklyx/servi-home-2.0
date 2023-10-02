//import { PrismaClient } from '@prisma/client';
import { db } from '../../lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmailConfirmation } from '../../lib/sendEmail';
import { MailOptions } from '../../types';

const email: string | undefined = process.env.EMAIL;

//const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { services, address, userId, userEmail } = req.body;

  function generateServicesHTML(services: any) {
    return services
      .map((service: any) => {
        if (service.title === 'Revitalize Your Rugs') {
          return `
        <div>
          <strong>${service.title}</strong>
          <p>Rug Measure: ${service.rugmeasure}</p>
          <p>Rug Condition: ${service.rugcondition}</p>
          
        </div>
      `;
        } else if (service.title === 'Renew Your Furniture') {
          return `

          <div>
          <strong>${service.title}</strong>

          <p>Measure: ${service.measure}</p>
          <p>Condition: ${service.condition}</p>


          
          </div>
          
          `;
        } else if (service.title === 'Elevate Your Tabletops') {
          return `

          <div>
          <strong>${service.title}</strong>
          <p>Measure: ${service.servicetable}</p>

          </div>
          
          `;
        }
      })
      .join('');
  }
  const servicesHTML = generateServicesHTML(services);

  const mailOptions: MailOptions = {
    from: `Servi Home <${email}>`,
    to: userEmail,
    subject: 'Subject',
    text: "Dear valued customer,\n\nWe're pleased to inform you that we received your order.",
    html: `
           <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
                 <h2 style="color: #333;">Confirmation: Your Order Has Been Accepted</h2>
                 <p>Dear valued customer,</p>
                <p>We're pleased to inform you that your order has been received. Thank you for choosing <b>Servi Home</b>.</p>
                <p>Services: ${servicesHTML}<p>
                <p>Warm regards,</p>
                 <p><b>The Servi Home Team</b></p>
           </div>`,
  };

  try {
    const createdAddress: { id: string; detail: string; userId: string } =
      await db.address.create({
        data: {
          detail: address,
          userId: userId,
        },
      });

    const booking: {
      id: string;
      userId: string;
      cleanerId: string | null;
      addressId: string;
      status: string;
      createdAt: Date;
    } = await db.booking.create({
      data: {
        userId: userId,
        addressId: createdAddress.id,
        status: 'PENDING',
      },
    });

    for (let service of services) {
      const serviceData: {
        bookingId: string;
        type: string;
        description: string;
      } = {
        bookingId: booking.id,
        type: service.title,
        description: JSON.stringify([
          { attribute: 'rugmeasure', value: service.rugmeasure },
          { attribute: 'rugcondition', value: service.rugcondition },
          { attribute: 'measure', value: service.measure },
          { attribute: 'condition', value: service.condition },
          { attribute: 'material', value: service.material },
          { attribute: 'servicetable', value: service.servicetable },
        ]),
      };

      await db.service.create({ data: serviceData });
    }
    sendEmailConfirmation(mailOptions);

    return res.status(200).json({ message: 'Order successfully saved!' });
  } catch (error: any) {
    console.error('Error saving order:', error);
    return res
      .status(500)
      .json({ message: `Internal Server Error: ${error.message}` });
  } finally {
    await db.$disconnect();
  }
};
