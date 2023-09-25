

export default function Service () {


    return (

<div className="bg-zinc-400 p-5 flex flex-col text-black h-screen items-center">
    <h2 className="text-6xl text-white mb-6 text-center font-serif">Services</h2>
    <div className="flex justify-around w-full">
    <div className="bg-blue-300 border border-black p-6 rounded-lg mx-2 w-full md:w-1/3 relative text-black flex flex-col items-center justify-center">
    <h3 className="text-lg mb-6 text-center">Revitalize Your Rugs</h3>
    <img src="/rugs.jpeg" alt="Mueble" width={250} height={250} className="rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 border border-yellow-500 p-1"/>
    <p className='text-xs text-center m-4'>Our skilled team brings life back to your beloved rugs, removing dirt, stains, and odors with precision. Using advanced techniques and eco-friendly solutions, we restore the beauty and freshness of your rugs, ensuring they stand the test of time.</p> 
      </div>

        <div className="bg-blue-300 border border-black p-6 rounded-lg mx-2 w-full md:w-1/3 relative text-black flex flex-col items-center justify-center">
            <h3 className="text-lg mb-6 text-center">Renew Your Furniture</h3>
            <img src="/mueble.webp" alt="Mueble" width={250} height={250} className="rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 border border-yellow-500 p-1"/>
            <p className='text-xs text-center m-4'>Our dedicated experts breathe new life into your furniture, erasing years of wear and tear. We go beyond surface cleaning, tackling deep-seated stains and allergens, ensuring your furniture not only looks fantastic but also feels fresh and inviting.</p>
        </div>
        <div className="bg-blue-300 border border-black p-6 rounded-lg mx-2 w-full md:w-1/3 relative text-black flex flex-col items-center justify-center">
            <h3 className="text-lg mb-6 text-center">Elevate Your Tabletops</h3>
            <img src="/table.webp" alt="Mueble" width={250} height={250} className="rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 border border-yellow-500 p-1"/>
            <p className='text-xs text-center m-4'>We specialize in enhancing the natural beauty of your tables, transforming them into stunning focal points of your space. Our skilled artisans bring out the richness of wood, creating a lustrous finish that exudes elegance.</p>
        </div>
    </div>
</div>

    )
}