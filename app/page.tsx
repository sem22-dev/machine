"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"


export default  function Home() {

  // const [dark, setDark] = useState(false)

  return (
  <main className=" overflow-hidden h-[1000px] text-center flex flex-col items-center gap-10 mx-5 sm:mx-15 lg:ml-[267px] lg:mr-16 xl:ml-[322px] xl:mr-32 pb-20">
      <input type="text" placeholder="Search Memes" className="border px-4 py-2 rounded-lg mt-5 bg-transparent outline-none"/>
      <div className="w-full flex flex-col gap-4">
              {Array.from({ length: 2}, (load, i) => (
                <div
                  className="w-full"
                  key={i}
                >
                    <div className="flex gap-4 pl-4 items-center z-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className=" cursor-pointer"
                      >
                        <Image src={"/dogieHead.svg"} width={200} height={200} alt="dogie" className="border rounded-xl"/>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className=" cursor-pointer"
                      >
                        <Image src={"/dogieHead.svg"} width={200} height={200} alt="dogie" className="border rounded-xl"/>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className=" cursor-pointer"
                      >
                        <Image src={"/dogieHead.svg"} width={200} height={200} alt="dogie" className="border rounded-xl"/>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className=" cursor-pointer"
                      >
                        <Image src={"/dogieHead.svg"} width={200} height={200} alt="dogie" className="border rounded-xl"/>
                      </motion.div>
                    </div>
                </div>
              ))}
       </div>
  </main>
  )
}

