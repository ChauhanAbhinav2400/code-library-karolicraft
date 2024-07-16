import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import whiteLogo from "../assets/whitelogo.png";
import blacklogo from "../assets/blacklogo.png";
import whitetwoLogo from "../assets/whitetwologo.png";
import blacktwologo from "../assets/blacktwologo.png";
function Sidebar() {
  const showlinks = localStorage.getItem("logintype");
  const [show, setShow] = useState(false);
  const [path, setpath] = useState("");
  const handlelogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    const path = window.location.pathname;
    setpath(path);
  }, [show]);

  console.log(path, "path");
  return (
    <>
      <div className="min-h-full max-h-full overflow-auto flex flex-col w-full bg-yellow-300">
        <Link onClick={() => setShow(!show)} to="/">
          <header className="py-5  w-full bg-yellow-400 flex justify-center items-center text-2xl ">
            {" "}
            <img src={blacklogo} className="w-28 " />
          </header>
        </Link>
        <Link onClick={() => setShow(!show)} to="/home">
          <div
            className={`pl-4 py-3 font-medium ${
              path === "/home" && "bg-yellow-500 "
            } `}
          >
            Home
          </div>
        </Link>
        <Link onClick={() => setShow(!show)} to="/search">
          <div
            className={`pl-4 py-3 font-medium ${
              path === "/search" && "bg-yellow-500 "
            } `}
          >
            Search
          </div>
        </Link>
        {showlinks === "admin" && (
          <>
            <Link onClick={() => setShow(!show)} to="/addsnippet">
              <div
                className={`pl-4 py-3 font-medium ${
                  path === "/addsnippet" && "bg-yellow-500 "
                } `}
              >
                Add Snippet
              </div>
            </Link>
            <Link onClick={() => setShow(!show)} to="/allsnippet">
              <div
                className={`pl-4 py-3 font-medium ${
                  path === "/allsnippet" && "bg-yellow-500 "
                } `}
              >
                All Snippet
              </div>
            </Link>
          </>
        )}
        <div
          onClick={() => handlelogout()}
          className="pl-4 py-3 cursor-pointer font-medium hover:bg-yellow-500"
        >
          Logout
        </div>
      </div>
    </>
  );
}

export default Sidebar;
