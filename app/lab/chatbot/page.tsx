"use client";

import { useState } from "react";
import { Message, continueConversation } from "../../action";
import { readStreamableValue } from "ai/rsc";

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = "force-dynamic";

export default function Chatbot() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  return (
    <main>
      <div className="flex p-6 justify-center bg-black">
        <h1 className="text-white font- text-4xl">Gemini Chatbot</h1>
      </div>
      <div className="flex flex-col [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] h-screen items-center">
        <div className="flex flex-col gap-4 lg:p-4 p-2 text-white w-[70vw]">
          {conversation.map((message, index) => (
            <div key={index} className="grid grid-cols-4 overflow-y-scroll">
              <p className="font-semibold capitalize">{message.role}:</p>
              <p className="text-md col-span-3">{message.content}</p>
            </div>
          ))}
        </div>
        <div className="fixed bottom-5 flex gap-4 justify-center w-[100vw]">
          <input
            className="border rounded p-2 w-[70vw]"
            type="text"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              const { messages, newMessage } = await continueConversation([
                ...conversation,
                { role: "user", content: input },
              ]);
              let textContent = "";
              for await (const text of readStreamableValue(newMessage)) {
                textContent = `${textContent}${text}`;
                setConversation([
                  ...messages,
                  { role: "assistant", content: textContent },
                ]);
                setInput("");
              }
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </main>
  );
}
