import Link from 'next/link';
import style from '../styles/Cleaner.module.css';

export default function Principal(): JSX.Element {
  return (
    <div className="text-center md:text-lefth-full font-serif">
      <section
        className={
          'styleSection flex-col-reverse bg-gradient-to-r from-zinc-500 to-zinc-600 md:h-screen md:flex-row md:justify-around items-center '
        }
      >
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-3xl text-center pt-8 md:pt-0  md:text-left md:text-4xl 2xl:text-6xl font-bold leading-tight">
            Transform your space <br />
            into a haven of cleanliness <br />
            and freshness.
          </h1>
          <h2 className="text-2xl text-center md:text-left md:text-4xl">
            Your comfort, our priority.
          </h2>
          <button className="bg-yellow-500 text-2xl flex items-center justify-center text-black md:px-8 py-3 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Link className="hover:underline" href="/signup">
              Schedule your cleaner
            </Link>
          </button>
        </div>
        <div className="rounded-full shadow-2xl hover:scale-105 transform transition-transform duration-300 border-4 border-yellow-500 md:p-1 md:w-[520px] 2xl:w-[750px]">
          <img
            className={`${style.image} ${style.customcursor}`}
            src="/cleaning.png"
            alt="Cleaning"
          />
          <img
            className={`${style.upperimage} h-full`}
            src="/cleanerhand.png"
            alt="Cleaninghand"
          />
        </div>
      </section>

      <section className={'styleSection md:h-5/6 md:p-12 bg-zinc-400'}>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-3xl  justify-center md:text-4xl 2xl:text-5xl max-w-6xl text-center leading-relaxed font-medium ">
            Don't miss the opportunity to elevate your living space to a new
            level of cleanliness and comfort. Try our services today and
            experience the difference for yourself!
          </p>
          <div className=" mx-auto h-0.5 mt-10 bg-white w-3/4"></div>
        </div>
      </section>
    </div>
  );
}
