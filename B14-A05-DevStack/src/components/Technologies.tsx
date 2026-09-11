import { use } from "react";
import Technologi from "./Technologi";
// import App from "../App";

export default function Technologies({ loadDataPromise }) {
  const technologies = use(loadDataPromise);
  // console.log(technologies);

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
            <Technologi technologoy={techno}></Technologi>
          ))}
        </div>

        <div className="w-[23%]">
          <div>
            <div className="w-full rounded-3xl border border-gray-100 bg-white px-10 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mt-5">Your Stack</h2>

              <p className="mt-2 text-gray-400">
                No technologies selected yet.
              </p>

              <div className="my-5 flex h-30 items-center justify-center rounded-2xl border border-gray-200 border-dashed">
                <span className="text-gray-400">
                  Your stack is empty.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
