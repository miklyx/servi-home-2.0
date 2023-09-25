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
    <div className="bg-zinc-500">
      <header className="bg-zinc-500 p-6 flex justify-between items-center">
        <div className="flex flex-row">
      <img src="/home.png" alt="Logo" width={100} height={100} />
        <h1 className="text-6xl text-yellow-500">Servi Home</h1>
        </div>
        <nav className="flex text-xl gap-4 text-white">
          <Link href="/">Home</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/services">Services</Link>
          
          {
            !!user ? <button onClick={(e) => onLogout(e)} >Log Out</button>
            :
            <>
            <Link href="/cleanersignup">Cleaner</Link>
            <Link href="/signup">Sign Up</Link> 
            <Link href="/login">Login</Link>
            </>
          }

          
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;