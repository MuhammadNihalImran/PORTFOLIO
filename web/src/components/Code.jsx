import "./code.css";

const Code = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="bg-[#300924] dark:bg-black max-w-sm sm:max-w-xl w-full p-4 rounded-lg border border-[#F8DB46] dark:border-gray-700 transition-colors duration-300">
        <div className="bg-[#2d0b24] dark:bg-gray-900 text-white dark:text-gray-100 sm:p-6 rounded-lg font-mono text-sm transition-colors duration-300 overflow-x-auto">
          <pre className="whitespace-pre-wrap break-words">
            <code>
              <span className="text-yellow-400">{`const `}</span>
              <span className="blink"></span>
              <span className="text-yellow-500">{`HelloWorld `}</span>
              <span className="text-white">{`= {`}</span>
              <br />
              <div className="ml-3 sm:ml-6 space-y-1 sm:space-y-2">
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
                  <span className="text-white">
                    <span className="block lg:hidden leading-[0.5rem] h-2">
                      <br />
                    </span>
                    {` "js", "react", "node", "express", ... `}
                  </span>
                  <span className="text-white">{`]`}</span>
                  <span className="text-white">{`,`}</span>
                </div>
                <div>
                  <span className="text-green-400">{`"interests": `}</span>
                  <span className="text-white">{`[`}</span>
                  <span className="text-white">
                    <span className="block lg:hidden leading-[0.5rem] h-2">
                      <br />
                    </span>
                    {` "MERN", "AI", "DevOps", "AWS", ... `}
                  </span>
                  <span className="text-white">{`]`}</span>
                </div>
              </div>
              <span className="text-white">{`};`}</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Code;
