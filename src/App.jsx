import "./App.css";

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Belajar Routing React JS</h1>
      <nav>
        <Link to={"/home"} className="mr">
          Home
        </Link>
        <Link to={"/about"} className="mr">
          About
        </Link>
        <Link to={"/kategori/komedi"} className="mr">
          Komedi
        </Link>
        <Link to={"/kategori/aksi"} className="mr">
          aksi
        </Link>
      </nav>
      <br />
      <Outlet />
    </>
  );
}

export default App;
