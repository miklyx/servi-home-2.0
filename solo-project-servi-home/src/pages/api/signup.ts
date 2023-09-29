import { db } from '../../lib/db';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const secretKey: string | undefined = process.env.JWT_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!secretKey) {
    return res.status(500).json({ error: 'JWT_SECRET not defined' });
  }
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    try {
      const hashedPassword = await hash(password, 10);

      const user: { id: string; email: string; username: string } =
        await db.user.create({
          data: {
            username,
            email,
            password: hashedPassword,
          },
          select: { id: true, email: true, username: true },
        });

      const token: string = sign({ userId: user.id }, secretKey, {
        expiresIn: '1h',
      });

      res
        .status(201)
        .json({ message: 'User registered successfully', user, token });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: 'Unable to register user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
