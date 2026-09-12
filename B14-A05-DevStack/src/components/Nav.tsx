
import Logo from "../assets/logo-text.png";
export default function Nav() {
  return (
    <div className="w-full h-auto sticky top-0 z-50 shadow-md">
      <div className="flex justify-between mx-30 p-5">
        <img src={Logo} alt="logo-text.png" className="w-50 h-13"/>
        <div className="flex gap-10 items-center">
          <a className="text-[#DB2777] cursor-pointer">Home</a>
          <a className="text-[#475569] cursor-pointer">Technologies</a>
          <a className="text-[#475569] cursor-pointer">Projects</a>
          <a className="text-[#475569] cursor-pointer">About</a>
          <a className="text-[#475569] cursor-pointer">Contact</a>
        </div>
        <div className="flex gap-10">
          <button className="text-[#475569] cursor-pointer active:text-[#475569aa]">Sign In</button>
          <button className="bg-[#D91B7E] text-white py-2.5 px-6 rounded-3xl cursor-pointer hover:text-white active:bg-[#d91b7dbb]">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
