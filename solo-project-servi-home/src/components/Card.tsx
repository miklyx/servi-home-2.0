export default function Card({ card }) {
  return (
    <div>
      <div className="min-h-full bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
        <h3 className="text-2xl mb-4 text-black text-center font-semibold">
          {card.title}
        </h3>
        <img
          src={card.image}
          alt={card.alt}
          width={250}
          height={250}
          className="rounded-full shadow-md hover:shadow-lg transform transition-transform duration-300 border-2 border-yellow-500 p-1 mb-4"
        />
        <p className="text-sm text-gray-700 text-center ">{card.description}</p>
      </div>
    </div>
  );
}
