import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routing/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 flex flex-col">
        <Header />
        <main className="flex-1">
          <RoutesApp />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
