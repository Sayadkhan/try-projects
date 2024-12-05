import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Resourses from "./pages/Resourses";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/resoures"} element={<Resourses />} />
      </Routes>
    </div>
  );
};

export default App;
