import { BotMessageSquare, PencilLine, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white text-TextColor p-5">
      <ul className="gap-5 flex lg:flex-col">
        <li className="flex-1">
          <Link
            href="/create-chatbot"
            className=" hover:opacity-50 flex flex-col text-center
          lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md
          bg-Primary"
          >
            <BotMessageSquare className="h-6 w-6 lg:w-8"/>
            <div className="hidden md:inline">
                <p className="text-xl">Create</p>
                <p className="text-sm font-extralight">New Chatbot</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/view-chatbox"
            className=" hover:opacity-50 flex flex-col text-center
          lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md
          bg-Primary"
          >
             <PencilLine className="h-6 w-6 lg:w-8"/>
            <div className="hidden md:inline">
                <p className="text-xl">Create</p>
                <p className="text-sm font-extralight">New Chatbot</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/review-sessions"
            className=" hover:opacity-50 flex flex-col text-center
          lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md
          bg-Primary"
          >
           <SearchIcon className="h-6 w-6 lg:w-8"/>
            <div className="hidden md:inline">
                <p className="text-xl">Create</p>
                <p className="text-sm font-extralight">New Chatbot</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
