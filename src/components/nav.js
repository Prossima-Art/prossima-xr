import { Link, useLocation } from "react-router-dom";
import { Logo } from "./logo.jsx";
import { ModalContato } from "./offcanvas/Offcanvas.jsx";

const Nav = () => {
  const location = useLocation();
  const navStyle =
    "relative px-5 opacity-70 hover:opacity-100 hover:font-bold hover:text-black h-full flex justify-center items-center transition-all ease-in-out duration-300 text-decoration-none" ;
  const navStyleSelected =
    "after:blo ck after:absolute after:border-b-4 after:w-full after:border-blue-200 after:bottom-0";

  const navItem = [
    {
      label: "How It Works",
      to: "/About",
    },
    {
      label: "Work",
      to: "/Work",
    },
  ];

  return (
    <div className="absolute bg-white px-10 top-0 shadow-xs  h-[60px] flex justify-between items-center w-full  rounded-b-lg z-10" >
      <Link to={"/"}>
        {" "}
        <Logo
          className="top-10 flex justify-center self-center mr-10"
          Width="243"
          Height="21.88"
        />
      </Link>
      <nav className="text-black text-base flex justify-center items-center">
        {navItem.map((item) => (
          <Link
            className={`${navStyle} ${
              location.pathname === item.to && navStyleSelected
            }`}
            to={item.to}
          >
            {item.label}
          </Link>
        ))}
        <ModalContato />
      </nav>
    </div>
  );
};

export default Nav;
