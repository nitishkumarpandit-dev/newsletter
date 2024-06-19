import { blogPosts } from "@/constant";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Posts = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl text-white">Posts</h3>

      <div className="max-w-xl h-[40px] flex items-center">
        <input
          type="text"
          className="w-full h-full text-md px-2 text-black focus:border-none focus:outline-none rounded-md"
          placeholder="Search Posts"
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        {blogPosts.map((post) => (
          <div
            className="min-h-[100px] border border-white rounded-xl p-3"
            key={post.id}
          >
            <div className="flex flex-col items-center my-5">
              <Image
                src={post.profileImg}
                alt={post.bio}
                width={70}
                height={70}
                className="w-[70px] h-[70px] rounded-full"
              />
              <h3 className="max-w-[200px] text-white/70 text-center">
                {post.name}
              </h3>

              <h4 className="max-w-[200px] text-sm text-white/60 text-center">
                {post.bio}
              </h4>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <p className="text-sm text-blue-600">{post.date}</p>
              <div className="flex gap-4 items-center">
                <Image
                  src={"/like.png"}
                  alt="like"
                  width={18}
                  height={18}
                  className="invert cursor-pointer"
                />
                <Image
                  src={"/comment.png"}
                  alt="comment"
                  width={18}
                  height={18}
                  className="invert cursor-pointer"
                />
              </div>
            </div>
            <Link href={`/post/${post.id}`}>
              <h2 className="text-xl text-white/80 mt-5 mb-2 line-clamp-2 font-medium hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className=" text-white/60 line-clamp-2">{post.desc}</p>

            <Link
              href={`/post/${post.id}`}
              className="flex items-center gap-2 my-5"
            >
              <Image
                src={post.profileImg}
                alt={post.bio}
                width={30}
                height={30}
                className="w-[30px] h-[30px] rounded-full"
              />
              <h3 className=" text-blue-500 text-center hover:underline">
                {post.name}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
