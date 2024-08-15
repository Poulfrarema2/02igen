"use client";
import { useEffect, useState } from "react";
import { getPostById } from "../componenets/data";
import Image from 'next/image';
import background from '../modules/getintouch.module.css'



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
    
  };
  type ImageArray = Array<ImageProps>;
  
  
const Page = () => {
    const [postData, setPostData] = useState<Post | undefined>(undefined);
   
  
    
    useEffect(() => {
      const fetchPost = async () => {
        const postData = await getPostById(1);
        setPostData(postData);
      };
  
      fetchPost();
    }, []);
  
    if (!postData) return <div>Loading...</div>;
  
    const singleImage: ImageProps = {
        src: "/front-getintouch-link.png", 
        alt: "Description of the image",
        width: 500, 
        height: 300, 
       
      };

    const images: ImageArray = [
      {
        src: "/whatwedo-small.png",
        alt: "logo",
        width: 500,
        height: 300,
        
      },
      {
        src: "/maintainable-small.png",
        alt: "What We Do",
        width: 500,
        height: 300,
       
      },
      {
        src: "/getintouch-small.png",
        alt: "Maintainable",
        width: 500,
        height: 300,
       
      },
    ];
  
    return (<>
        <div className={background.pageBackground}>
        <div className="min-h-screen flex px-8 py-8 ">
            
          <div className="w-1/2">
            <img src={singleImage.src} alt={singleImage.alt} />
          </div>
          <div >
            <section className="w-1/2 font-bold mb-8">
              <h1 className="text-3xl">{postData.header_text}</h1>
              <p>{postData.body_text}</p>
            </section>
            <div className="flex flex-wrap justify-center">
              {images.map((image, index) => (
                <div key={index} className="w-2/12 px-3 py-6">
                  
                  
  <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
         
                </div>
              ))}

              
            </div>
          </div>
        </div>
       </div>
     
       

 </>);
  };
  
  export default Page;