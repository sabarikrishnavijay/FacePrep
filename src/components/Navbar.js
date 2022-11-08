import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  let { setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(false);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="mb-16">
      <div className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <img
              src="https://yt3.ggpht.com/ytc/AMLnZu_EPWCNOmaKhUsRUy8h1mvuPPcQfuBPqWLHOfempA=s900-c-k-c0x00ffffff-no-rj"
              className="mr-3 h-6 sm:h-9"
              alt="Face Prep Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              FACE PREP
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              onClick={handleLogout}
              type="button"
              className="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Logout
            </button>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
