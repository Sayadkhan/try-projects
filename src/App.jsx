import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Resourses from "./pages/Resourses";
import Navbar from "./components/Navbar";
import ContactPage from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#020A22] relative">
      <Navbar />

      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/resources"} element={<Resourses />} />
        <Route path={"/contact"} element={<ContactPage />} />
      </Routes>

      <div className="w-[213px] h-[213px] rounded-full bg-white/10 blur-2xl absolute top-5 left-0"></div>
      <div className="w-[213px] h-[213px] rounded-full bg-white/10 blur-2xl absolute top-5 right-0"></div>

      <Footer />
    </div>
  );
};

export default App;
