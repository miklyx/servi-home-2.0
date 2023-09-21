import { db } from "@/lib/db";
import { hash } from "bcrypt";

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

      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to register user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
  