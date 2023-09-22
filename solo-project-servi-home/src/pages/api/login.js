import { db } from "@/lib/db";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"; // Import the 'sign' function

const secretKey = "javiercito"; // Secret key is javiercito

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await db.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Generate a JWT token
      const token = sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

      res.status(200).json({ message: 'User authenticated successfully', user, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Authentication failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}