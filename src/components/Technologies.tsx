import { Suspense } from "react";

export default function Technologies() {
  const loadData = async () => {
    const respons = await fetch("../../public/tech-stack.json");
    const data = await respons.json();
    return data;
  };
  return (
    <div className="mt-24 mx-35">
      <div className="mb-15">
        <h1 className="text-4xl">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#DB2777] to-[#C026D3] bg-clip-text text-transparent font-bold text-4xl">
            Technologies
          </span>
        </h1>
        <p className="mt-4">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div>
        {
            <Suspense></Suspense>
        }
      </div>
    </div>
  );
}
