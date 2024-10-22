import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const CreateChatBot = () => {
  return (
    <div
      className="flex flex-col items-center justify-center md:flex-row md:space-y-10
    bg-white p-10 rounded-md m-10"
    >
      <Avatar seed="create-chatbot" />
      <div>
        <h1 className="text-xl lg:text-3xl font-semibold">Create</h1>
        <h2 className="font-light">
          Create new chatbot to assist you in your conversation with your
          customers
        </h2>
        <form action="">
          <Input placeholder="Chatbot Name...." className="max-w-lg" required />
          <Button/>
        </form>
      </div>
    </div>
  );
};
export default CreateChatBot;
