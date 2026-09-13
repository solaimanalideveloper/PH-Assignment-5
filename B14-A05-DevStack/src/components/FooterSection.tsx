import Footer from "../assets/logo-text.png";
export default function FooterSection() {
  return (
    <div className="mt-24 mx-35">
      <div className="grid grid-cols-2 mb-30">
        <div>
          <img src={Footer} alt="Footer-text-png" />
          <p className="mt-5 text-[#64748B]">
            Curated tools, technologies, and resources for developers building{" "}
            <br />
            modern software.
          </p>
          <div className="flex gap-7 mt-8 text-[#475569]">
            <a className="cursor-pointer">GitHub</a>
            <a className="cursor-pointer">Twitter</a>
            <a className="cursor-pointer">LinkedIn</a>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="grid grid-rows-4">
            <h3 className="text-1xl font-bold text-[#475569]">PRODUCT</h3>
            <a className="text-[#64748B]">Home</a>
            <a className="text-[#64748B]">Technologies</a>
            <a className="text-[#64748B]">Projects</a>
          </div>
          <div className="grid grid-rows-4">
            <h3 className="font-bold text-[#475569]">COMPANY</h3>
            <a className="text-[#64748B]">About</a>
            <a className="text-[#64748B]">Contact</a>
            <a className="text-[#64748B]">Careers</a>
          </div>
          <div className="grid grid-rows-3">
            <h3 className="font-bold text-[#475569]">LEGAL</h3>
            <a className="text-[#64748B]">Privacy Policy</a>
            <a className="text-[#64748B]">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="flex justify-between mb-20 text-[#94A3B8]">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-5">
          <a>Privacy</a>
          <a>Terms</a>
        </div>
      </div>
    </div>
  );
}
