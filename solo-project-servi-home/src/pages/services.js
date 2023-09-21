import React from 'react';

function Services() {
  return (
    <div className="bg-gradient-to-b from-yellow-500 to-zinc-500 p-5 text-black">
        <h2 className="text-4xl text-white mb-5">Services</h2>
        <div className="flex justify-between">
          <div className="bg-blue-300 border border-black p-6 rounded-lg w-full md:w-1/2 lg:w-1/3 relative text-black ">
            <h3 className="text-lg mb-8">Revitalize Your Rugs</h3>
            <p className='text-xs' >Our skilled team brings life back to your beloved rugs, removing dirt, stains, and odors with precision. Using advanced techniques and eco-friendly solutions, we restore the beauty and freshness of your rugs, ensuring they stand the test of time.</p>
          </div>
          <div className="bg-blue-300 border border-black p-6 rounded-lg w-full md:w-1/2 lg:w-1/3 relative text-black">
            <h3 className="text-lg mb-8">Renew Your Furniture</h3>
            <p className='text-xs'>Our dedicated experts breathe new life into your furniture, erasing years of wear and tear. We go beyond surface cleaning, tackling deep-seated stains and allergens, ensuring your furniture not only looks fantastic but also feels fresh and inviting.</p>
          </div>
          <div className="bg-blue-300 border border-black p-6 rounded-lg w-full md:w-1/2 lg:w-1/3 relative text-black">
            <h3 className="text-lg mb-8">Elevate Your Tabletops</h3>
            <p className='text-xs'>We specialize in enhancing the natural beauty of your tables, transforming them into stunning focal points of your space. Our skilled artisans bring out the richness of wood, creating a lustrous finish that exudes elegance.</p>
          </div>
        </div>
      </div>
  );
}

export default Services;