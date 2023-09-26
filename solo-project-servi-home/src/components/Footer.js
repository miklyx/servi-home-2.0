import Link from "next/link";



export default function Footer () {


  return (
    <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-16 space-y-12">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Company Info */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">Servi Home</h3>
                    <address className="not-italic mb-4 text-gray-400">
                        Marina 191, Barcelona, Spain
                        <br />
                        Email: <a href="mailto:info@servihome.com" className="hover:underline">info@servihome.com</a>
                        <br />
                        Phone: (123) 456-7890
                    </address>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">Quick Links</h3>
                    <ul className="space-y-3 text-lg">
                        <li><button className="hover:underline">About Us</button></li>
                        <li><Link href="/services" className="hover:underline">Services</Link></li>
                        <li><button className="hover:underline">Contact</button></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">Stay Updated</h3>
                    <p className="mb-6 text-gray-400">Subscribe to our newsletter for the latest updates:</p>
                    <form action="#" method="post" className="flex">
                        <input type="email" placeholder="Enter your email" className="flex-grow p-3 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-800" />
                        <button type="submit" className="bg-blue-600 text-white px-5 py-3 rounded-r-md hover:bg-blue-700">Subscribe</button>
                    </form>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">Follow Us</h3>
                    <div className="flex space-x-6 text-3xl">
                        <a href="#" className="text-gray-400 hover:text-blue-500"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-gray-400 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-400 hover:text-pink-500"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Servi Home. All rights reserved.</p>
            </div>
        </div>
    </footer>
);
}