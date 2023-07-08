import Image from "next/image";

export default function AiCreate() {
  return (
    <div className="border px-5 sm:px-15 lg:px-16 xl:px-32 pb-10">
      <div className="flex flex-col items-center">
        <Image
          src="/march7.jpg" // Replace with your actual image source
          width={164}
          height={64}
          alt="Dummy Image"
          className="w-1/2 h-64 mt-10 border object-cover" // Adjust the width and height as per your needs
        />

        <div className="flex items-center gap-10 w-1/2 mt-5">
          <input
            type="number"
            placeholder="Enter your doge"
            className="px-4 py-2 border border-gray-300 rounded-md w-4/4"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded-md">
            Submit
          </button>
        </div>

        <div className="flex items-center justify-between w-1/2 mt-5">
          <textarea
            placeholder="Enter prompt"
            className="px-4 py-2 border border-gray-300 rounded-md h-40 w-3/4 resize-none"
          ></textarea>
          <button className="px-4 py-2 bg-[#fddde8] text-black rounded-md">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
