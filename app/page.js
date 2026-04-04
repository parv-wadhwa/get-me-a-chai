import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col text-white h-[44vh] gap-4 px-5 px-0 text-xs md:text-base">
        <div className="font-bold text-5xl flex gap-4 md:text-5xl text-xl justify-center items-center">Buy Me A Chai <span><img className="invert" src="/Tea-mug.gif" width={88} alt="" /></span></div>
        <p className="text-gray-400 text-center md:text-left">
          A crowfunding platform for creators.
        </p>
        <p className="text-gray-400 text-center md:text-left">
          Get funded by your fans and followers. Start now!
        </p>
        <div className="flex gap-2">
          <Link href={"/login"}> <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Start Here</button></Link>
          <Link href={"/about"}> <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Read More</button></Link>

        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-around items-center">

          <div className="item space-y-3 flex flex-col items-center justify-center max-w-xs text-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/work.gif" width={88} alt="" />
            <p className="font-bold text-xl">Support Your Favorite Creators</p>
            <p className="text-gray-400 text-sm">
              Fans can easily support creators by sending small contributions as a token of appreciation.
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center max-w-xs text-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/coin.gif" width={88} alt="" />
            <p className="font-bold text-xl">Secure Payments</p>
            <p className="text-gray-400 text-sm">
              Powered by Razorpay, ensuring fast, safe, and reliable transactions every time.
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center max-w-xs text-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/group-1.gif" width={88} alt="" />
            <p className="font-bold text-xl">Build Your Community</p>
            <p className="text-gray-400 text-sm">
              Strengthen your connection with supporters and grow a loyal community around your work.
            </p>
          </div>

        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center px-6">

        <h2 className="text-3xl font-bold text-center mb-6">
          Learn more about us
        </h2>

        <p className="text-gray-400 text-center max-w-2xl text-sm md:text-lg mb-6">
          Get Me A Chai is a platform built for creators who want to turn their passion into support.
          Whether you're a developer, artist, or content creator, your audience can now support you
          with simple and secure payments.
        </p>

        <Link href="/about">
          <button className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-6 py-3">
            Explore More
          </button>
        </Link>

      </div>
    </>
  );
}
