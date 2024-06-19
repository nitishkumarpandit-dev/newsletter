import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full min-h-[200px]  bg-slate-200">
      <div className="max-w-[1200px] mx-auto py-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="">
            <div className="flex items-center gap-2">
              <Image
                src={"/nitish.jpg"}
                alt="logo"
                width={40}
                height={40}
                className="w-[40px] h-[40px] rounded-md"
              />
              <h2>Nitish Kumar Pandit</h2>
            </div>
            <p className="text-sm max-w-[90%] my-4">
              I send tips, strategies, and resources that would help you succeed
              in your web development journey.
            </p>
            <p className="text-[12px]">© 2024 Nitis&apos;s Newsletter</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="">Home</h2>
            {["Post"].map((post, i) => (
              <Link
                href={`/post/${i}`}
                className="text-sm hover:underline"
                key={i}
              >
                {post}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full h-[50px] border border-red-500 rounded-xl flex items-center">
              <input
                type="email"
                className="w-[80%] h-full text-xl px-2 text-black focus:border-none focus:outline-none rounded-l-xl"
                placeholder="Enter your email"
              />
              <div className="w-[20%] h-full flex items-center justify-center text-white font-bold bg-red-500 rounded-r-xl hover:bg-red-600 cursor-pointer transition-colors">
                Submit
              </div>
            </div>
            <div className="flex gap-4">
              <Link href={"https://x.com/dev_nitishkumar"} target="_blank">
                <Image
                  src={"/twitter.png"}
                  alt="twitter"
                  width={40}
                  height={40}
                />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/nitishkumarpandit/"}
                target="_blank"
              >
                <Image
                  src={"/linkedin-logo.png"}
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
            <div className="flex gap-4">
              <p className="text-sm cursor-pointer hover:underline">
                Privacy Policy
              </p>
              <p className="text-sm cursor-pointer hover:underline">
                Term of use
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
