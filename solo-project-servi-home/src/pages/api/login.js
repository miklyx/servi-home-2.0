import { db } from "src/lib/db";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET; 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await db.user.findUnique({
        where: { email },
        select: { id: true, email: true, username: true, password: true } 
      });

      if (!user || !await compare(password, user.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = sign({ userId: user.id, role: user.role }, secretKey, { expiresIn: "1h" });

      
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
