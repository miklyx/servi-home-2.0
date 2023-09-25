import Link from "next/link";



export default function Footer () {


    return (
        <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        

        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl mb-4">Servi Home</h3>
            <p className="mb-2">Marina 191, Barcelona, Spain</p>
            <p className="mb-2">Email: info@servihome.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

     
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="list-none space-y-2">
              <li><button className="text-gray-300 hover:text-white">About Us</button></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><button className="text-gray-300 hover:text-white">Contact</button></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates:</p>
            <form action="#" method="post">
              <div className="flex flex-wrap space-x-4">
                <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 w-2/3" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">Subscribe</button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl text-gray-300 hover:text-white"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-2xl text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-2xl text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Servi Home. All rights reserved.</p>
        </div>
      </div>
    </footer>


    )
}