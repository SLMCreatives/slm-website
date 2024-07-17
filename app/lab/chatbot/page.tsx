"use client";

import { useState } from "react";
import { Message, continueConversation } from "../../action";
import { readStreamableValue } from "ai/rsc";

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = "force-dynamic";

export default function Home() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex flex-col bg-slate-900 h-screen justify-between items-center">
      <div className="flex flex-col gap-4 p-4 text-white">
        {conversation.map((message, index) => (
          <div key={index}>
            {message.role}: {message.content}
          </div>
        ))}
      </div>

      <div className="fixed bottom-5 flex gap-4 justify-center items-stretch w-full">
        <input
          className="border rounded p-2"
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
  );
}
