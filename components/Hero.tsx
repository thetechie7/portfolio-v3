import Image from 'next/image';
import React from 'react';

function Hero() {
  const [browser, setBrowser] = React.useState('chrome');

  React.useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('safari') !== -1) {
      if (userAgent.indexOf('chrome') > -1) {
        setBrowser('chrome');
      } else {
        setBrowser('safari');
      }
    }
  }, []);
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="relative flex flex-col items-center justify-center space-y-4">
        <Image
          src="/grid.svg"
          width={100}
          height={100}
          alt="Grid"
          className=" z-0  h-screen w-screen object-cover object-center "
          style={{
            //if safari reduce the opacity of the grid
            opacity: browser === 'safari' ? 0.4 : 1,
          }}
        />
        <div className="absolute z-10 flex flex-col items-center justify-center space-y-4 bg-transparent">
          <Image
            src="/logofill.png"
            width={175}
            height={175}
            alt="Logo"
            className="z-20 transition-all duration-1000 hover:rotate-[360deg]"
          />
          <h1 className="text-6xl font-black uppercase text-white lg:text-8xl">
            Geeth
          </h1>
          <h3 className=" text-3xl font-black uppercase text-white md:text-4xl lg:text-6xl">
            Developer / Designer
          </h3>
          <p className="text-lg font-light text-white md:text-3xl lg:text-4xl">
            Crafting the web through design and code.
          </p>
          <div className="relative flex flex-col items-center justify-center space-x-4">
            <div className="absolute top-0 left-0 h-[200px] w-[1px] animate-pulse bg-gradient-to-b from-transparent to-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;