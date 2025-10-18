import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routing/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-slate-50 to-white">
        <Header />
        <main className="flex-1">
          <RoutesApp />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
