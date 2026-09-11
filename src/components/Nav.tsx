
import Logo from "../assets/logo-text.png";
export default function Nav() {
  return (
    <div className="w-full h-auto">
      <div className="flex justify-between mx-30 p-5">
        <img src={Logo} alt="logo-text.png" className="w-45 h-13"/>
        <div className="flex gap-10 items-center">
          <a className="text-[#DB2777] ">Home</a>
          <a>Technologies</a>
          <a>Projects</a>
          <a>About</a>
          <a>Contact</a>
        </div>
        <div className="flex gap-10">
          <button>Sign In</button>
          <button className="bg-[#D91B7E] text-white py-2.5 px-6 rounded-3xl">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
