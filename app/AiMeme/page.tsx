import Image from "next/image";

export default function AiCreate() {
  return (
    <div className=" px-5 sm:px-15 lg:px-16 xl:px-32 pb-10 grid grid-cols-3 gap-2 h-full">
      {/* left col */}
      <div className="flex gap-5 pt-24 border-r">
        <div className=" col-span-1 flex items-start px-2">
          <div className="flex flex-col items-end gap-5 ">
              <input
                type="number"
                placeholder="Enter doge ID"
                className="px-3 py-2 border bg-transparent border-gray-300 rounded-md w-[150px]"
              />
              <button className="px-4 py-2 bg-[#fddde8] text-black font-semibold rounded-md">
                Submit
              </button>
            </div>
        </div>

        <div className=" h-fit ">
          <Image
            src="/4083.png" 
            width={100}
            height={164}
            alt="Dummy Image"
            className="border object-contain rounded-lg"
          />
        </div>
      </div>

      {/* right col */}
      <div className="flex flex-col items-center w-full col-span-2">
        <Image
          src="/spock.png" 
          width={164}
          height={64}
          alt="Dummy Image"
          className="w-1/2 h-[375px] mt-4 border object-contain"
        />

        <div className="flex items-center justify-center w-full gap-4 mt-5">
          <textarea
            placeholder="Enter prompt"
            className="px-3 py-2 border bg-transparent border-gray-300 rounded-md h-16 w-1/2 resize-none"
          ></textarea>
          <button className="px-4 py-2 bg-green-500 text-black font-semibold rounded-md">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
