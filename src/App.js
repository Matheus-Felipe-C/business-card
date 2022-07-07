import { createRoot } from "react-dom/client";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));

function App() {
  return (
    <div>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
export default App;

root.render(<App />);
