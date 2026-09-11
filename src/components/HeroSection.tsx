import Banner from "../assets/banner-stack.png";
export default function HeroSection() {
  return (
    <div className="mt-24 mx-35">
      <div className="flex justify-between">
        <div>
          <h1 className="text-6xl w-2xl pt-12 ">
            Build Your Ideal{" "}
            <span className="bg-linear-to-r from-[#FF5722] via-[#E91E63] to-[#7C4DFF] bg-clip-text text-transparent block">
              Development Stack
            </span>
          </h1>
          <p className="w-3xl mt-8">
            Explore frontend, backend, database, and tooling options, <br />{" "}
            compare them side by side, and put together the stack that fits your{" "}
            <br /> next project.
          </p>
          <div className="flex gap-5 mt-25">
            <button className="bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:opacity-90 transition">
              Explore Technologies
            </button>
            <button className="border border-slate-200 text-slate-600 font-medium px-10 py-3 rounded-xl bg-white hover:bg-slate-50 transition">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img src={Banner} alt="banner-stack.png" />
        </div>
      </div>
    </div>
  );
}
