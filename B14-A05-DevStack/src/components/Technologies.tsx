import { use, useState } from "react";
import Technologi from "./Technologi";
// import App from "../App";

export default function Technologies({ loadDataPromise }) {
  const technologies = use(loadDataPromise);
  // console.log(technologies);
  const [stack, setStack] = useState([]);

  const addToStack = (techno) => {
    setStack((prev) => {
      const exists = prev.find((t) => t.id === techno.id);
      if (exists) {
        return prev;
      } else {
        return [...prev, techno];
      }
    });
  };

  const removeFromStack = (id: string) => {
    setStack((prev) => prev.filter((t) => t.id !== id));
  };

  const removeAll = () => setStack([]);

  return (
    <div className="mt-24 mx-35">
      <div className="mb-15">
        <h1 className="text-4xl font-bold">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#DB2777] to-[#C026D3] bg-clip-text text-transparent text-4xl">
            Technologies
          </span>
        </h1>
        <p className="mt-4 text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex gap-10 mb-30">
        <div className="grid grid-cols-3 gap-7">
          {technologies.map((techno) => (
            <Technologi
              technology={techno}
              key={techno.id}
              onAdd={addToStack}
              isAdded={stack.some((t) => t.id === techno.id)}
            ></Technologi>
          ))}
        </div>

        <div className="w-[23%]">
          <div>
            <div className="w-full rounded-3xl border border-gray-100 bg-white px-10 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mt-5">
                Your Stack
              </h2>
              <p className="mt-1 text-gray-400">
                {stack.length === 0
                  ? "No technologies selected yet."
                  : `${stack.length} Technology Selected`}
              </p>

              {stack.length === 0 ? (
                <div className="my-5 flex h-30 items-center justify-center rounded-2xl border border-gray-200 border-dashed">
                  <span className="text-gray-400">Your stack is empty.</span>
                </div>
              ) : (
                <div className="my-5 flex flex-col gap-3">
                  {stack.map((techno) => (
                    <div
                      key={techno.id}
                      className="flex items-center justify-between border border-[#E2E8F0] rounded-xl p-3.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src={techno.icon}
                          className="h-7 w-7"
                          alt={techno.name}
                        />

                        <div className="flex flex-col flex-1 ">
                          <span className="font-bold">{techno.name}</span>
                          <span className="text-xs text-gray-500 font-bold">
                            {techno.category}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromStack(techno.id)}
                        className="font-bold text-2xl text-[#94A3B8] cursor-pointer mr-3"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={removeAll}
                    className="mt-2 w-full rounded-2xl border border-red-300 py-2 text-red-500 hover:bg-red-50 cursor-pointer font-bold"
                  >
                    Remove All
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
