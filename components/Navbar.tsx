import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0  w-full h-14 bg-slate-200 backdrop-blur-md">
      <div className="max-w-[75%] mx-auto h-full  flex items-center justify-between">
        <Link href={"#"} className="flex gap-2">
          <Image
            src={"/nitish.jpg"}
            alt="logo"
            width={30}
            height={30}
            className="rounded-md bg-cover border-2 border-black"
          />
          <span className="text-black">Nitish Kumar Pandit</span>
        </Link>

        <div className="flex gap-3 max-md:hidden">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href={"sign-in"}>
              <button className="border-2 rounded-md border-slate-800 px-4 py-2">
                Login
              </button>
            </Link>
          </SignedOut>
          <button className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-md">
            Join In
          </button>
        </div>

        <Image
          src={"/hamburger.png"}
          alt="menu"
          width={30}
          height={30}
          className="md:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
