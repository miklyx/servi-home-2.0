import Link from "next/link";
import { useAuth } from "../lib/store";
import { useRouter } from "next/router";


const Layout = ({ children }) => {
  const user = useAuth(state => state.auth);
  const router = useRouter();

  const onLogout = (e) => {
  

    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    useAuth.getState().removeAuth();
    router.push("/");

  }

  return (
    <div className="bg-zinc-500 font-sans">
      <header className="bg-zinc-500 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
      <img src="/home.png" alt="Logo" width={100} height={100} />
        <h1 className="text-6xl text-yellow-500">Servi Home</h1>
        </div>
        <nav className="flex items-center space-x-6 text-xl text-white">
          <Link href="/" className="hover:scale-105 transform transition-transform duration-200">Home</Link>
          <Link href="/reviews" className="hover:scale-105 transform transition-transform duration-200">Reviews</Link>
          <Link href="/services" className="hover:scale-105 transform transition-transform duration-200">Services</Link>
          
          {
            !!user ? <button onClick={(e) => onLogout(e)} >Log Out</button>
            :
            <>
            <Link href="/cleanersignup" className="hover:scale-105 transform transition-transform duration-200">Cleaner</Link>
            <Link href="/signup" className="hover:scale-105 transform transition-transform duration-200">Sign Up</Link> 
            <Link href="/login" className="hover:scale-105 transform transition-transform duration-200">Login</Link>
            </>
          }

          
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;