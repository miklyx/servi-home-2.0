import Link from "next/link";


export default function Principal () {


    return (
        <div>
        <div className="bg-zinc-500 flex-row p-5 justify-around items-center h-screen text-white flex m-12">
        <div className='flex flex-col justify-around '>
        <div className="text-6xl font-serif">
          Transform your space <br />
          into a haven of cleanliness <br />
          and freshness. Your <br />
          comfort, our priority.
        </div>
        <button className="bg-yellow-500 text-2xl flex items-center justify-center text-black px-4 py-2 rounded-full mt-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <Link className="font-serif hover:underline" href="/signup">Schedule your cleaner</Link>
        </button>
        </div>
        <img src="/cleaning.png" alt="Logo" width={750} height={750} className="rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 border border-yellow-500 p-1"/>
      </div>
     
      <div className="bg-zinc-400 p-5 flex justify-center  text-white">
        <div className="text-4xl m-16 font-serif">
          Don't miss the opportunity to elevate your living <br />
          space to a new level of cleanliness and comfort. Try <br />
          our services today and experience the difference <br />
          for yourself!
        </div>
      </div>
    </div>
    )
}