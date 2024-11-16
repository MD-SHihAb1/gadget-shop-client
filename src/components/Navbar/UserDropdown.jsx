import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const UserDropdown = () => {
  const { user, Logout } = useAuth();

 const  handleLogout = () => {
    Logout()
  };

  return (
    <div>
      <details className="dropdown">
        <summary className="avatar cursor-pointer" style={{ listStyle: "none" }}>
          <div className="ring-primary w-16 rounded-full ring ring-offset-2">
            <img
              src={`${user?.photoURL ? user?.photoURL : "/src/assets/profile.png"}`}
              alt="User Avatar"
            />
          </div>
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-2 absolute right-0 sm:w-64 md:w-72 lg:w-80">
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
           <button onClick={handleLogout} className="btn btn-primary btn-sm my-4">Logout</button>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default UserDropdown;
