import { GrLogout, GrOverview } from "react-icons/gr";
import { IoIosAddCircle, IoMdAddCircle } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useUserData from "../../../Hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";

const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-products",
    title: "My Products",
    icon: <MdOutlineInventory2 className="text-xl" />,
  },
  {
    id: 2,
    route: "/dashboard/addProduct",
    title: "Add Product",
    icon: <IoIosAddCircle className="text-xl" />,
  },
];

const Sidebar = () => {
  const userData = useUserData();
  const {Logout} = useAuth()

  return (
    <div className="bg-gray-200 border-r-2 border-black min-h-screen px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Gadget Shop</h1>
      <ul className="flex flex-col gap-2">
        <li className="p-2 border border-black rounded-md">
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <GrOverview className="text-xl" />
            <p>Overview</p>
          </NavLink>
        </li>
        {userData.role === "seller" &&
          sellerRoutes.map((route) => (
            <li className="p-2 border border-black rounded-md" key={route.id}>
              <NavLink to={route.route}className="flex items-center gap-2">
                {route.icon}
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}

        <li className="p-2 border border-black rounded-md">
          <NavLink to="/" className="flex items-center gap-2">
            <IoHome className="text-xl" />
            <p>Home</p>
          </NavLink>
        </li>
        <li className="p-2 border border-black rounded-md" onClick={()=>Logout()}>
          <NavLink
            to=""
            className="flex items-center gap-2"
          >
            <GrLogout className="text-xl" />
            <button>Logout</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
