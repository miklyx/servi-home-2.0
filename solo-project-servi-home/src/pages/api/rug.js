import { db } from "src/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { measure, condition, material } = req.body;

    try {
      const review = await db.review.create({
        data: {
          measure,
          condition,
          material,
        },
      });

      res.status(201).json({ message: "Review created successfully", review });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Unable to create review" });
    }
  } else if (req.method === "GET") {
    try {
      const reviews = await db.review.findMany();
      res.status(200).json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Unable to fetch reviews" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}