import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Resourses from "./pages/Resourses";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#020A22]">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/resources"} element={<Resourses />} />
        <Route path={"/contact"} element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
