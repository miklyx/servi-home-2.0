import { db } from "src/lib/db";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET; // Use environment variable for secret key

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const cleaner = await db.cleaner.findUnique({
        where: { email },
        select: { id: true, email: true, username: true, password: true } // Explicitly select fields
      });

      if (!cleaner || !await compare(password, cleaner.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = sign({ userId: cleaner.id, role: cleaner.role }, secretKey, { expiresIn: "1h" });

      // Destructure to avoid sending password
      const { password: _, ...cleanerWithoutPassword } = cleaner;
      res.status(200).json({ message: 'User authenticated successfully', cleaner: cleanerWithoutPassword, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Authentication failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
