import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies";
import { ToastContainer } from "react-toastify";
import FooterSection from "./components/FooterSection";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const loadDataPromise = async () => {
    const response = await fetch("/tech-stack.json");
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

      <FooterSection></FooterSection>

      <ToastContainer
        position="bottom-right"
        aria-label="notifications"
      ></ToastContainer>
    </>
  );
}

export default App;
