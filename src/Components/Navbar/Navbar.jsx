import { useState } from "react";
import Link from "./Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/contact", name: "Contact" },
    // You can continue adding more routes as needed
  ];
  return (
    <nav className="m-3 md:m-0">
      <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
        {open ? <IoMdClose /> : <HiMenuAlt1 />}
      </div>
      <ul
        className={`md:flex justify-center absolute md:static duration-1000 bg-red-800 p-3 ${
          open ? "top-10" : "-top-40"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
