import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <nav>
          <NavLink to="/">
            <button className="nav-btn">Home</button>
          </NavLink>
          <NavLink to="/contact"><button className="nav-btn">Contact</button></NavLink>
          <NavLink to="/cart"><button className="nav-btn">Cart</button></NavLink>
          <NavLink to="/signin"><button className="nav-btn">Signin</button></NavLink>
        </nav>
        <input type="text" placeholder="Search Item Here" className="search" />
        <button className="search-btn">Search</button>
        <Outlet />
      </div>
    </div>
  );
};
