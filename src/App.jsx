import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Child pages (Home, Blogs, etc.) render here */}
    </>
  );
}

export default App;
