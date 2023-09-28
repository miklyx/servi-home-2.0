import { db } from "../../lib/db";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const secretKey:string = process.env.JWT_SECRET; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user: {
        id: string;
        email: string;
        password: string;
        username: string;
    } = await db.user.findUnique({
        where: { email },
        select: { id: true, email: true, username: true, password: true } 
      });

      if (!user || !await compare(password, user.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      //const token = sign({ userId: user.id, role: user.role }, secretKey, { expiresIn: "1h" });
      const token = sign({ userId: user.id }, secretKey, { expiresIn: "1h" });
      
      const { password: _, ...userWithoutPassword } = user;
      res.status(200).json({ message: 'User authenticated successfully', user: userWithoutPassword, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Authentication failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
