import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Child pages (Home, Blogs, etc.) render here */}
      <Footer />
    </>
  );
}

export default App;
