import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import EarthProcesses from "./EarthProcesses";
import References from "./References";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/earth-process" element={<EarthProcesses />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </>
  );
}