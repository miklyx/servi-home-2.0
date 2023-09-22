import { db } from "src/lib/db";
import { hash } from "bcrypt";
import { sign } from "jsonwebtoken"; // Import the 'sign' function

const secretKey = "javiercito"; // secret key is javiercito

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    try {
      const hashedPassword = await hash(password, 10);

      const user = await db.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });

      // Generate a JWT token
      const token = sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

      res.status(201).json({ message: 'User registered successfully', user, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to register user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
  