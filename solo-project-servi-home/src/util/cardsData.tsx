type Card = {
  id: number;
  title: string;
  alt: string;
  image: string;
  description: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: 'Revitalize Your Rugs',
    image: '/rugs.jpeg',
    alt: 'Rugs',
    description:
      'Our skilled team brings life back to your beloved rugs, removing ' +
      'dirt, stains, and odors with precision. Using advanced techniques ' +
      'and eco-friendly solutions, we restore the beauty and freshness of ' +
      'your rugs, ensuring they stand the test of time.',
  },
  {
    id: 2,
    title: 'Renew Your Furniture',
    image: '/mueble.png',
    alt: 'Furniture',
    description:
      'Our dedicated experts breathe new life into your furniture, ' +
      'erasing years of wear and tear. We go beyond surface cleaning, ' +
      'tackling deep-seated stains and allergens, ensuring your furniture ' +
      'not only looks fantastic but also feels fresh and inviting.',
  },
  {
    id: 3,
    title: 'Elevate Your Tabletops',
    image: '/table.webp',
    alt: 'Tabletops',
    description:
      'We specialize in enhancing the natural beauty of your tables, ' +
      'transforming them into stunning focal points of your space. Our ' +
      'skilled artisans bring out the richness of wood, creating a ' +
      'lustrous finish that exudes elegance.',
  },
];

export { cards };
