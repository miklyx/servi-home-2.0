import Link from 'next/link';
import { useAuth, useCleaner } from '../lib/store';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

const Layout = ({
  children,
}: {
  children: React.ReactElement;
}): JSX.Element => {
  const [token, setToken] = useState<string | null>(null);
  const user = useAuth((state) => state.auth);
  const cleaner = useCleaner((state) => state.cleaner);
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [loginBlockZIndex, setLoginBlockZIndex] = useState<number>(-1);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken ?? null);

      //Redirect logic
      if (!storedToken && router.pathname.endsWith('/cleanerlogedin')) {
        router.push('/cleanerlogin');
      }

      if (!storedToken && router.pathname.endsWith('/logedin')) {
        router.push('/login');
      }
    }
  }, [token, router.pathname]);

  const onLogout = (e: React.MouseEvent): void => {
    localStorage.removeItem('auth');
    localStorage.removeItem('token');
    localStorage.removeItem('cleaner');
    useAuth.getState().removeAuth();
    useCleaner.getState().removeCleaner();
    router.push('/');
  };

  return (
    <>
      <header className="h-20 w-full bg-gray-900 font-sans text-gray-200 p-4 fixed top-0 right-0 z-10">
        <div className="justify-between  md:flex  items-center">
          <div className="flex justify-between md:w-2/5">
            <div className=" flex items-center ">
              <Link href="/">
                <Image
                  src="/home.png"
                  alt="Logo of the Servi home company that is a house with a heart in the middle"
                  width={50}
                  height={50}
                  className="rounded shadow-lg transform hover:scale-105 transition-transform duration-200"
                />
              </Link>
              <h1 className="md:text-4xl font-semibold text-yellow-500">
                Servi Home
              </h1>
            </div>
            {/* Hamburger Button for mobile */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-200 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="logo" />
                ) : (
                  <Image
                    src="/hamburger-menu.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <nav
              className={`z-10 bg-gray-900 flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
              style={{ zIndex: loginBlockZIndex }}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="styleLink">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="styleLink">
                  {' '}
                  <Link href="/reviews" onClick={() => setNavbar(!navbar)}>
                    Reviews
                  </Link>
                </li>
                <li className="styleLink">
                  {' '}
                  <Link href="/services" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>

                {!!cleaner ? (
                  <>
                    <button
                      onClick={(e) => onLogout(e)}
                      className="mt-4 w-full  md:mt-1 bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors duration-200"
                    >
                      Log Out
                    </button>

                    <Link
                      href="/cleanerlogedin"
                      className="hover:text-yellow-500 transform hover:scale-105 transition-transform duration-200"
                    >
                      Cleaner Dashboard
                    </Link>
                  </>
                ) : user ? (
                  <>
                    <button
                      onClick={(e) => onLogout(e)}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors duration-200"
                    >
                      Log Out
                    </button>

                    <li className="styleLink">
                      <Link
                        href="/logedin"
                        className="hover:text-yellow-500 transform hover:scale-105 transition-transform duration-200"
                      >
                        Orders Dashboard
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="styleLink">
                      <Link
                        href="/cleanerlogin"
                        className="hover:text-yellow-500 transform hover:scale-105 transition-transform duration-200"
                        onClick={() => {
                          setLoginBlockZIndex(100);
                          setNavbar(!navbar);
                        }}
                      >
                        Cleaner Log In
                      </Link>
                    </li>

                    <li className="styleLink">
                      <Link
                        href="/login"
                        className="hover:text-yellow-500 transform hover:scale-105 transition-transform duration-200"
                        onClick={() => {
                          setLoginBlockZIndex(100);
                          setNavbar(!navbar);
                        }}
                      >
                        User Log In
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="mt-14 md:mt-8">{children}</main>
    </>
  );
};

export default Layout;
