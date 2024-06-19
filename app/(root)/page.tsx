import Posts from "@/components/Posts";
import Image from "next/image";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Home() {
  return (
    <main className="mx-3 py-16">
      <div className="flex flex-col gap-3 w-full items-center">
        <Image
          src={"/nitish.jpg"}
          alt="Nitish"
          width={70}
          height={70}
          className=" w-[70px] h-[70px] rounded-full bg-contain"
        />
        <h2 className="text-2xl md:text-3xl text-white font-bold">
          Nitish&apos;s Newsletter
        </h2>

        <p className="text-xl md:text-2xl text-white max-w-[500px] text-center">
          I send tips, strategies, and resources that would help you succeed in
          your web development journey.
        </p>
      </div>

      <div className="max-w-xl h-[50px] border border-red-500 rounded-xl flex items-center mt-10 mx-auto">
        <input
          type="email"
          className="w-[80%] h-full text-xl px-2 text-black focus:border-none focus:outline-none rounded-l-xl"
          placeholder="Enter your email"
        />
        <div className="w-[20%] h-full flex items-center justify-center text-white font-bold bg-red-500 rounded-r-xl hover:bg-red-600 cursor-pointer transition-colors">
          Submit
        </div>
      </div>

      <div className="my-20 flex gap-3 flex-col w-full sm:flex-row items-center text-white sm:justify-between ">
        <p>
          Written by <br />
          Nitish Kumar Pandit
        </p>

        <div className="flex flex-col gap-1">
          <p>Connect with me</p>
          <div className="flex gap-2">
            <Link href={"https://x.com/dev_nitishkumar"} target="_blank">
              <Image
                src={"/twitter.png"}
                alt="twitter"
                width={30}
                height={30}
                className="invert"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/nitishkumarpandit/"}
              target="_blank"
            >
              <Image
                src={"/linkedin-logo.png"}
                alt="linkedin"
                width={30}
                height={30}
                className="invert"
              />
            </Link>
          </div>
        </div>
      </div>

      <Posts />

      <Pagination className="my-5">
        <PaginationContent>
          <PaginationItem className="bg-slate-200">
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem className="bg-slate-200">
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem className="bg-slate-200">
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
