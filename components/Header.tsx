import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-Primary shadow-sm  text-gray-800 flex justify-between p-5  rounded-bl-md rounded-br-md">
      <Link href="./"  className="flex items-center font-thin">
      <Image
      src="/images/Franklyai.png.webp"
      width={100}
      height={100}
      alt="Logo"
      className="rounded"
      />
      <div className="space-y-1 pl-5">
          <h1 className="text-4xl">FranklyAi</h1>
          <h2 className="text-2xl">Your customizable AI Chat Agent </h2>
        </div>
      </Link>

      <div className="flex items-center">
        <SignedIn>
            <UserButton showName/>
        </SignedIn>

        <SignedOut>
            <SignInButton/>
        </SignedOut>
      </div>
    </header>
  );
};
export default Header;
