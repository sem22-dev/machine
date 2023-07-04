"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default  function SideBar() {

  const pathname = usePathname()


    return (
      <div>
        {pathname === "/createMeme" ? 
            "" : 
          <div className={` fixed h-full w-fit ml-5 sm:ml-15 lg:ml-16 xl:ml-32 text-left hidden lg:flex flex-col border-r gap-4 pr-5 pt-32`}>
            <div className=" flex flex-col gap-2 text-md font-bold pb-4">
              <SideBarItems bgColor={ pathname ==="/" ? '#C2DEDC' : 'white'} textColor={pathname ==="/" ? '#404049' : ''} icon="/popular.svg" text="Trending Memes" link="/"/>
              <SideBarItems bgColor={ pathname ==="/" ? '' : ''} textColor={pathname ==="/" ? '' : ''} icon="/Pen.svg" text="Create a Meme" link="/createMeme"/>
              <SideBarItems bgColor={ pathname ==="/" ? '' : ''} textColor={pathname ==="/" ? '' : ''} icon="/star.svg" text="Meme Gallery" link="/"/>
              <SideBarItems bgColor={ pathname ==="/" ? '' : ''} textColor={pathname ==="/" ? '' : ''} icon="/dogieHead.svg" text="DogePoundNfts" link="/"/>
            </div>
          </div>
          }
      </div>
    )
  }

 function SideBarItems({icon, text, link, textColor, bgColor}: {icon : string, text:string, link:string, textColor: string, bgColor: string}){
      return(
        <div style={{backgroundColor: bgColor, color: textColor}} className="flex cursor-pointer hover:bg-[#C2DEDC] hover:text-[#404049] p-2 rounded-lg items-center gap-2">
          <div className="w-[20px] h-auto"><Image src={icon} width={20} height={20} alt="popular"/></div>
          <Link href={link}><h1>{text}</h1></Link>
        </div>
      )
  }
  

 
  