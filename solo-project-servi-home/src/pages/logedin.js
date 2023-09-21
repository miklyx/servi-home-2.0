import React, { useState } from 'react';

function Logedin () {

    const [services, setServices] = useState([]);
    const [rugmeasure, setRugmeasure] = useState('');
    const [measure, setMeasure] = useState ('');
    const [rugcondition, setRugcondition] = useState('');
    const [condition, setCondition] = useState('');
    const [material, setMaterial] = useState('');
    const [servicetable, setServicetable] = useState('');
    const [address, setAddress] = useState('');
    const [selectedService, setSelectedService] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      setServices((prevServices) => [
        ...prevServices,
        { title: selectedService, rugmeasure, measure, rugcondition, condition, material, servicetable},
      ]);
      setRugmeasure('');
      setRugcondition('');
      setMeasure('');
      setCondition('');
      setMaterial('');
      setServicetable('');
    };

    const handleDelete = (index) => {
      setServices((prevServices) => prevServices.filter((_, i) => i !== index));
    };

    return (
        <div className="bg-gradient-to-b from-yellow-500 to-zinc-500 p-5 text-white">
        <h2 className="text-4xl mb-5 font-semibold">Servi Home - Services</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-6">
            
          <form onSubmit={handleSubmit} className="bg-blue-300 border border-black p-6 rounded-lg w-full md:w-1/2 lg:w-1/3 relative text-black">
            <h3 className="text-xl mb-4 font-semibold">Revitalize Your Rugs</h3>
            <p className="text-sm mb-6">
            Remove dirt, stains, and odors with precision. Advanced techniques and eco-friendly solutions. We restore the beauty and freshness of your rugs.
            </p>
            <label className="text-black-600">Measures:</label>
            <select
            name="measure"
            value={rugmeasure}
            onChange={(e) => setRugmeasure(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            >
            <option value="options">Options</option>
            <option value="80*150 cm">80*150 cm</option>
            <option value="160*230 cm">160*230 cm</option>
            <option value="240*340 cm">240*340 cm</option>
            </select>
            <label className="text-black-600">Condition:</label>
            <input
                type="text"
                name="title"
                value={rugcondition}
                onChange={(e) => setRugcondition(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                required
            />
            <label className="text-black-600">Material:</label>
            <input
                type="text"
                name="title"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                required
            />
            <button className="absolute bottom-4 right-4 bg-yellow-500 text-white text-lg w-8 h-8 rounded-full cursor-pointer "
            onClick={() => setSelectedService('Revitalize Your Rugs')}
            >
              +
            </button>
        </form>
      
        <form onSubmit={handleSubmit} className="bg-blue-300 border border-black p-6 rounded-lg w-full md:w-1/2 lg:w-1/3 relative text-black">
            <h3 className="text-xl mb-4 font-semibold">Renew Your Furniture</h3>
            <p className="text-sm mb-6">
            We go beyond surface cleaning, tackling deep-seated stains and allergens. Furniture will look fantastic also feeling fresh and inviting.
            </p>
            <label className="text-black-600">Seats:</label>
            <select
            name="measure"
            value={measure}
            onChange={(e) => setMeasure(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            >
            <option value="seats">Options</option>
            <option value="One">1 seat</option>
            <option value="Two">2 seats</option>
            <option value="Three">3 seats</option>
            </select>
            <label className="text-black-600">Condition:</label>
            <select
            name="measure"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
            >
            <option value="Options">Options</option>
            <option value="Stained">Stained</option>
            <option value="Dirt">Dirt</option>
            <option value="Fabric change">Fabric change</option>
            </select>
            <button className="absolute bottom-4 right-4 bg-yellow-500 text-white text-lg w-8 h-8 rounded-full cursor-pointer" onClick={() => setSelectedService('Renew Your Furniture')} >+</button>
        </form>

        <form onSubmit={handleSubmit} className="bg-blue-300 border border-black p-6 rounded-lg w-full md:w-1/2 lg:w-1/3 relative text-black">
            <h3 className="text-xl mb-4 font-semibold">Elevate Your Tabletops</h3>
            <p className="text-sm mb-6">
            We enhance your tables, making them stunning focal points by emphasizing the wood's richness with a lustrous finish.
            </p>
            <label className="text-black-600">Services:</label>
            <select
            name="measure"
            value={servicetable}
            onChange={(e) => setServicetable(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            >
            <option value="Options">Options</option>
            <option value="Polish">Polish</option>
            <option value="Paint">Paint</option>
            </select>
            
            <button className="absolute bottom-4 right-4 bg-yellow-500 text-white text-lg w-8 h-8 rounded-full cursor-pointer" onClick={() => setSelectedService('Renew Your Furniture')} >+</button>
        </form>
            </div>

            {services.length > 0 && (
              <div className="m-4 border border-black p-6 rounded-lg relative">
                <h1 className="text-4xl mb-5 font-semibold">Services Selected</h1>
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 p-4 rounded shadow-md m-4"
                  >
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    {service.rugmeasure && <p className="text-gray-700">Measure: {service.rugmeasure}</p>}
                    {service.measure && <p className="text-gray-700">Seats: {service.measure}</p>}
                    {service.rugcondition && <p className="text-gray-700">Condition: {service.rugcondition}</p>}
                    {service.condition && <p className="text-gray-700">Condition: {service.condition}</p>}
                    {service.material && <p className="text-gray-700">Material: {service.material}</p>}
                    {service.servicetable && <p className="text-gray-700">Services: {service.servicetable}</p>}
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-yellow-500 text-white text-lg w-8 h-8 rounded-full cursor-pointer"
                    >
                      -
                    </button>
                  </div>
            ))}
            <label className="">Address: </label>
            <input
                type="text"
                name="title"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className=" border border-black bg-transparent rounded focus:outline-none focus:border-blue-400 m-2"
                required
            />
            <p className="text-xs">A cleaner proposal will be sent to you, as soon as posible you will obtain an email for confirmation</p>
            <button className='border border-black bg-transparent text-white hover:bg-blue-500 py-2 px-4 rounded m-4'>Send to cleaner</button>
            </div>

            )}
            
        </div>
      </div>
    )
}

export default Logedin; 