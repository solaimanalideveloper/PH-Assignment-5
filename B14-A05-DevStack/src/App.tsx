import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies";
import FutterSection from "./components/FutterSection";

function App() {
  const loadDataPromise = async () => {
    const response = await fetch("../../public/tech-stack.json");
    const data = await response.json();
    return data;
  };
  return (
    <>
      <Nav></Nav>
      <HeroSection></HeroSection>

      <Suspense fallback={<p>Loading......</p>}>
        <Technologies loadDataPromise={loadDataPromise()}></Technologies>
      </Suspense>

      <FutterSection></FutterSection>
    </>
  );
}

export default App;
