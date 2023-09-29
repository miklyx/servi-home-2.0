import Link from 'next/link';
import { useAuth } from '../lib/store';
import { useRouter } from 'next/router';
import React from 'react';

const Layout = ({
  children,
}: {
  children: React.ReactElement;
}): JSX.Element => {
  const user = useAuth((state) => state.auth);
  const router = useRouter();

  const onLogout = (e: React.MouseEvent): void => {
    localStorage.removeItem('auth');
    localStorage.removeItem('token');
    useAuth.getState().removeAuth();
    router.push('/');
  };

  return (
    <div className='bg-gray-900 font-sans text-gray-200'>
      <header className='p-6 flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <img
            src='/home.png'
            alt='Logo'
            width={50}
            height={50}
            className='rounded shadow-lg transform hover:scale-105 transition-transform duration-200'
          />
          <h1 className='text-4xl font-semibold text-yellow-500'>Servi Home</h1>
        </div>

        {/* Navigation */}
        <nav className='flex items-center space-x-6'>
          <Link
            href='/'
            className='hover:text-yellow-500 transform hover:scale-105 transition-transform duration-200'
          >
            Home
          </Link>
          <Link
            href='/reviews'
            className='hover:text-yellow-500 transform hover:scale-105 transition-transform duration-200'
          >
            Reviews
          </Link>
          <Link
            href='/services'
            className='hover:text-yellow-500 transform hover:scale-105 transition-transform duration-200'
          >
            Services
          </Link>

          {!!user ? (
            <button
              onClick={(e) => onLogout(e)}
              className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors duration-200'
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
                href='/cleanerlogin'
                className='hover:text-yellow-500 transform hover:scale-105 transition-transform duration-200'
              >
                Cleaner
              </Link>
              <Link
                href='/signup'
                className='hover:text-yellow-500 transform hover:scale-105 transition-transform duration-200'
              >
                Sign Up
              </Link>
              <Link
                href='/login'
                className='hover:text-yellow-500 transform hover:scale-105 transition-transform duration-200'
              >
                Login
              </Link>
            </>
          )}
        </nav>
      </header>
      <main className='mt-8'>{children}</main>
    </div>
  );
};

export default Layout;
