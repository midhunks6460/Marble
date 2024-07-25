import { IoHomeSharp } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
const NavItems = [
  {
    name: "HOME",
    href: "/home",
    icon: <IoHomeSharp className="w-2 h-2" />,
  },
  { name: "ABOUT", href: "/about", icon: <FaQuestion className="w-2 h-2" /> },
  {
    name: "PRODUCTS",
    href: "/products",
    icon: <MdOutlineProductionQuantityLimits className="w-3 h-3" />,
    submenu: [
      { name: "Product-1", href: "/" },
      { name: "Product-2", href: "/" },
      { name: "Product-3", href: "/" },
    ],
  },
  {
    name: "SERVICES",
    href: "/services",
    icon: <MdMiscellaneousServices className="w-3 h-3" />,
    submenu: [
      { name: "Service-1", href: "/" },
      { name: "Service-2", href: "/" },
      { name: "Service-3", href: "/" },
    ],
  },
  {
    name: "PROJECTS",
    href: "/projects",
    icon: <FaDiagramProject className="w-3 h-3" />,
    submenu: [
      { name: "Project-1", href: "/" },
      { name: "Project-2", href: "/" },
      { name: "Project-3", href: "/" },
    ],
  },
  {
    name: "CONTACT",
    href: "/contact",
    icon: <IoMdContact className="w-3 h-3" />,
  },
];

export default NavItems;
