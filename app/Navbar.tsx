"use client"

import Link from "next/link"
import { useEffect, useState } from "react" 
import { usePathname } from "next/navigation"
import Image from "next/image"
// svgs
export function NightIcon({dark} : {dark: boolean}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fddde8" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
        </svg>
    )
}

export function DayIcon({dark} : {dark: boolean}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={dark ? "#fff" : "#404049"} className="bi bi-brightness-high" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>
    )
}

export function UserSvg({dark} : {dark: boolean}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={dark ? "#fff" : "#404049"} viewBox="0 0 448 512" >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
            </svg>    
    )
}


export default  function Navbar() {

    const [showMenu, setShowMenu] = useState(false)
    const [rotate, setRotate] = useState(false)
    const [dark, setDark] = useState(false)

    const pathname = usePathname();

    useEffect(() => {
        if(showMenu) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto";
            setRotate(false)
        }
    },[showMenu])

    useEffect(() => {
        if(dark) {
            document.body.style.backgroundColor = "#181826",
            document.body.style.color = "white"
        } else {
            document.body.style.backgroundColor = "white",
            document.body.style.color = "black"
        }
    },[dark])

    return (
        <nav className={` z-50 px-5 sm:px-15 lg:px-16 xl:px-32  ${dark ? "bg-[#181826] text-white" : "bg-white text-[#000]"} sticky top-0 border-b`}>
            {/* for screen larger than md */}
            <div className="py-5 hidden lg:flex justify-between">
                <div>
                    <Link href={'/'} className=" font-extrabold text-4xl">DOGe</Link>
                
                </div>
                <div className="flex gap-14 text-lg font-semibold items-center ">
                    <Link href="/createMeme" className={`rounded-md ${pathname === "/createMeme" ? "bg-[#fddde8] text-black" : "animated-border"} hover:bg-[#fddde8] hover:text-black transition-colors duration-200 px-4 py-2 flex justify-center items-center`}>
                    Create Memes
                    </Link>                  
                    <Link href={'/'} className="flex gap-1 items-center">
                        <UserSvg dark={dark}/>
                    </Link>
                    <div onClick={() => setDark(!dark)} className=" w-[24px] cursor-pointer">
                        {dark ? <NightIcon dark={dark} /> :  <DayIcon dark={dark} />}
                    </div>
                </div>
            </div>
            
            {/* for screen lower than md */}
            <div className="lg:hidden py-5 flex justify-between items-center">
                <button onClick={() =>  setShowMenu(true)} className="  flex flex-col gap-1.5">
                    <div className="w-[20px]  border"></div>
                    <div className="w-[15px]  border"></div>
                    <div className="w-[20px]  border"></div>
                </button>
                <div>
                    <h1 className="">LOGO</h1>
                </div>
               
                <div className={`${showMenu ? "  left-0" : " -left-[100%]"} fixed top-0 min-h-screen w-full`}>
                    <div onClick={() => setShowMenu(false)} className="absolute  overflow-y-hidden z-50 w-full min-h-screen bg-black opacity-50">
                    </div>
                    <div  className={`${showMenu ? "left-0 " : "-left-[100%]"} flex flex-col py-20 transition-all duration-500 min-h-screen max-h-screen ease-in-out px-10 w-1/2 gap-8 fixed top-0 z-50 bg-gray-500  overflow-y-auto overflow-x-hidden `}>
                        <button onClick={() => setShowMenu(false)}  className="absolute top-5 right-5">X</button>
                        <Link className="border-b" onClick={() => setShowMenu(false)} href={'/'}>Home</Link>
                        <Link className="border-b" href={'/'}>About</Link>
                        <Link className="border-b" href={'/'}>Contact</Link>
                        <div className="flex flex-col gap-2">
                            <Link className="flex items-center gap-2 border-b" href={'/'} onClick={() => setRotate(!rotate)}>Explore <div className={`${rotate ? "rotate-90" : ""} transition-transform duration-200 ease-linear`}> &gt; </div></Link>
                            <div className={` ${rotate ? " h-[120px]  py-2" : "h-0"} text-left overflow-hidden  transition-all duration-500 ease-in-out`}>
                                <p>services</p>
                                <p>services</p>
                                <p>services</p>
                                <p>services</p>
                            </div>
                        </div>
                        <h1 className="border-b">Hello there</h1>
                        <h1 className="border-b">Hello there</h1>
                        <h1 className="border-b">Hello there</h1>
                    </div>
                </div>
            </div>
        </nav>
    )
  }


  