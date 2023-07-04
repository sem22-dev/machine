"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Images from "./Images.json"
 

export default  function Home() {

  // const [dark, setDark] = useState(false)

  const copyToClipboard = (imageUrl: string) => {
    navigator.clipboard.writeText(imageUrl)
      .then(() => {
        console.log("Image URL copied to clipboard:", imageUrl);
      })
      .catch((error) => {
        console.error("Failed to copy image URL to clipboard:", error);
      });
  };

  return (
  <main className="overflow-hidden z-0 h-[1000px] text-center flex flex-col items-center gap-10 mx-5 sm:mx-15 lg:ml-[267px] lg:mr-16 xl:ml-[322px] xl:mr-32 pb-20">
      <input type="text" placeholder="Search Memes" className="border px-4 py-2 rounded-lg mt-5 bg-transparent outline-none"/>
      <div className="flex gap-12">
        {
          Images.map((image, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} onClick={() => copyToClipboard(image.pic)}>
              <Image src={image.pic} width={170} height={170} alt="image" className="cursor-pointer" />
            </motion.div>
          ))
        }
      </div>
  </main>
  )
}

