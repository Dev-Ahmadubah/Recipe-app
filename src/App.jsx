
import Search from "./components/Search";
import "./index.css";
import Pages from "./pages/Pages";
import { Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="w-[70%] mx-auto ">
      <Router>
        <nav className="flex items-center justify-between">
          <Link to="/" className="font-bold text-2xl text-gray-600">
            Culgust🍮
          </Link>
          <Search />
        </nav>
        
        <Pages />
      </Router>
    </div>
  );
}

export default App;
