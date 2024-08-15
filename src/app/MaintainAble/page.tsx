"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { getPostById } from "../componenets/data";
import Image from 'next/image';
import background from '../modules/maintainable.module.css'
type Post = {
  id: number;
  header_text: string;
  body_text: string;
};

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
};


const page = () => {
  const [postData, setPostData] = useState<Post | undefined>(undefined);

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getPostById(2); // Fetch the post with ID 1
      setPostData(postData);
    };

    fetchPost();
  }, []);

  const singleImage: ImageProps = {
    src: "/front-maintainable-link.png", 
    alt: "Description of the image",
    width: 500, 
    height: 300, 
    href: "#", 
  };

  if (!postData) return <div>Loading...</div>;

  return (<>
  <div className={background.pageBackground}>
    <div className="min-h-screen flex">
   <div className="">
            <img src={singleImage.src} alt={singleImage.alt} className=" " />
          </div>
    <div className="w-1/4">
      <h1 className="text-4xl font-bold">{postData?.header_text}</h1>
      <p>{postData?.body_text}</p>
    </div>
    </div>
    </div>
    </>
  );
  };
 
  
  export default page;
  