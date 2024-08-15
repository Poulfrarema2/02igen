import Image from 'next/image';
import Head from 'next/head'; 
import { createClient } from "@supabase/supabase-js";
import background from './modules/home.module.css'

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string; 
};


type ImageArray = Array<ImageProps>;


async function home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

 
  const images: ImageArray = [
    {
      src: "/logo-final.png",
      alt: "logo",
      width: 500,
      height: 300,
      href: "/", 
    },
    {
      src: "/front-what-we-do.png",
      alt: "What We Do",
      width: 500,
      height: 300,
      href: "/WhatWeDo", 
    },
    {
      src: "/front-maintainable.png",
      alt: "Maintainable",
      width: 500,
      height: 300,
      href: "/MaintainAble", 
    },
    {
      src: "/front-get-in-touch.png",
      alt: "Contact Us",
      width: 500,
      height: 300,
      href: "/GetInTouch", 
    },
  ];

  return (
    <div className={background.pageBackground}>
    <div className="flex flex-wrap justify-center gap-4 p-4 min-h-screen "> 
      {images.map((image, index) => (
        <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2"> 
          <a href={image.href}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default home;