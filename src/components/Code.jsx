import React from "react";
import "./code.css";

const Code = () => {
  return (
    <div className="bg-[#300924] max-w-xl p-4 rounded-lg border border-[#F8DB46]">
      <div className="bg-[#2d0b24] text-white p-6 rounded-lg font-mono text-sm">
        <pre>
          <code>
            <span className="text-yellow-400">{`const `}</span>
            <span className="blink absolute left-10"></span>{" "}
            {/* Cursor effect */}
            <span className="text-yellow-500">{`HelloWorld `}</span>
            <span className="text-white">{`= {`}</span>
            <br />
            <div className="ml-6 space-y-2">
              <div>
                <span className="text-green-400">{`"_id": `}</span>
                <span className="text-white">{`"127.0.0.1",`}</span>
              </div>
              <div>
                <span className="text-green-400">{`"name": `}</span>
                <span className="text-white">{`"Nihal Sheikh",`}</span>
              </div>
              <div>
                <span className="text-green-400">{`"developer": `}</span>
                <span className="text-yellow-400">{`true,`}</span>
              </div>
              <div>
                <span className="text-green-400">{`"technologies": `}</span>
                <span className="text-white">{`[`}</span>
                <span className="text-white">{` "js", "react", "node", "express" , ..." `}</span>
                <span className="text-white">{`]`}</span>
                <span className="text-white">{`,`}</span>
              </div>
              <div>
                <span className="text-green-400">{`"interests": `}</span>
                <span className="text-white">{`[`}</span>
                <span className="text-white">{` "MERN", "AI", "DevOps", "AWS", "..." `}</span>
                <span className="text-white">{`]`}</span>
              </div>
            </div>
            <span className="text-white">{`};`}</span>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Code;
