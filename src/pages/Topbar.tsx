import { NavLink } from "react-router-dom";
import Logo from "../../public/logo.png";
function Topbar() {
  return (
    <div className="bg-teal-500 flex justify-between items-center px-5 h-18 ">
      <NavLink to="/">
        <img src={Logo} className="h-15 invert" />
      </NavLink>
      <div className="py-2 self-start text-teal-50 ">
        <a>HOME</a> <a>ABOUT</a>
      </div>
    </div>
  );
}

export default Topbar;
