import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="bg-zinc-500 p-6 flex justify-between items-center">
        <h1 className="text-6xl text-yellow-500">Servi Home</h1>
        <nav className="flex gap-4 text-white">
          <Link href="/">Home</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/services">Services</Link>
          <Link href="/cleanersignup">Cleaner</Link>
          <Link href="/signup">Sign Up</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;