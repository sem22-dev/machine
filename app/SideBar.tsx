import Image from "next/image"
import Link from "next/link"


export default  function SideBar() {
    return (
      <div className="h-full w-fit ml-5 sm:ml-15 lg:ml-16 xl:ml-32 text-left hidden lg:flex flex-col border-r gap-4 pr-10 pt-32 ">
        <div className=" flex flex-col gap-4 text-md font-bold pb-4">
          <div className="flex items-center gap-2">
            <Image src={"/popular.svg"} width={20} height={20} alt="popular"/>
            <Link href="/"><h1>Trending Memes</h1></Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[20px] h-auto"><Image src={"/create.svg"} width={20} height={20} alt="popular"/></div>
            <Link href="/createMeme"><h1>Create a Meme</h1></Link>
          </div>
          <div className="flex items-center gap-2">
          <div className="w-[20px] h-auto"> <Image src={"/popular.svg"} width={20} height={20} alt="popular"/></div>
            <Link href="/"><h1>Meme gallery</h1></Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[20px] h-auto"><Image src={"/popular.svg"} width={20} height={20} alt="popular"/></div>
            <Link href="/"><h1>DogePoundNfts</h1></Link>
          </div>
        </div>
      </div>
    )
  }
  

 
  