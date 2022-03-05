import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../assets/logo_compressed.png";


const Logo = () => {
  return <Link href="/" passHref>
  <div className="relative w-full md:w-2/12 h-24 md:h-full p-5 flex justify-center bg-black cursor-pointer">
    <Image
      src={logo}
      layout="fill"
      objectFit="contain"
      placeholder="blur"
      alt="Logo"
    />
  </div>
</Link>;
};

export default Logo;
