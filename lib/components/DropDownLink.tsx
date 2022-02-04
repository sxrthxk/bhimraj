import Link from "next/link";
import React, { useState } from "react";

const DropDownLink = ({
  href,
  children,
  className,
  linkText
}: {
  href: string;
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  linkText: string;
}) => {
  const [linkOpen, setLinkOpen] = useState(false);

  return (
    <div className={"relative h-full " + className} onMouseEnter={() => setLinkOpen(true)} onMouseLeave={() => setLinkOpen(false)} >
      <span className="transition-all hover:text-khaki z-10 h-full flex items-center">
      <Link href={href} >
        {linkText}
      </Link>
      </span>
        <div className={`${linkOpen ? 'visible opacity-100 top-full' : '[visibility:hidden] opacity-0 top-[120%]'} transition-all ease-in duration-200 absolute bg-black p-6 px-8 left-1/2 transform -translate-x-1/2 w-max`}>
            {children}
        </div>
    </div>
  );
};

export default DropDownLink;
