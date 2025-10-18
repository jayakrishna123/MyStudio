import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import { Routes, Route } from "react-router-dom";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
