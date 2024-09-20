import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "react-router-dom";

function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const adminTabs = [
    {
      path: "/admin/deshboard",
      name: "Dashboard",
      classNames:
        "flex items-center text-gray-700 hover:bg-black hover:text-white p-2 rounded-lg",
      icon: "🏠",
    },
    {
      path: "/admin/user-management",
      name: "Users",
      classNames:
        "flex items-center text-gray-700 hover:bg-black hover:text-white p-2 rounded-lg",
      icon: "👥",
    },
    {
      path: "/admin/chat-management",
      name: "Chats",
      classNames:
        "flex items-center text-gray-700 hover:bg-black hover:text-white p-2 rounded-lg",
      icon: "💬",
    },
    {
      path: "/admin/message-management",
      name: "Messages",
      classNames:
        "flex items-center text-gray-700 hover:bg-black hover:text-white p-2 rounded-lg",
      icon: "✉️",
    },
    {
      path: "/logout",
      name: "Logout",
      classNames:
        "flex items-center text-gray-700 hover:bg-black hover:text-white p-2 rounded-lg",
      icon: "🚪",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl">CHATTU</h1>

        <button className="md:hidden text-white" onClick={toggleSidebar}>
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      <div className="flex min-h-screen">
        <aside
          className={`fixed inset-y-0 left-0 w-64 bg-gray-100 p-4 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
        >
          {adminTabs.map(
            (tab) => (
              console.log(tab.path),
              console.log(location.pathname),
              (
                <Link
                  to={tab.path}
                  key={tab.path}
                  className={tab.classNames}
                  style={
                    tab.path === location.pathname
                      ? { backgroundColor: "black" }
                      : {}
                  }
                >
                  <div className="mr-2">
                    {tab.icon} {tab.name}
                  </div>
                </Link>
              )
            )
          )}
        </aside>

        <main className="flex-1 p-6 bg-white ml-64 md:ml-0">{children}</main>
      </div>
    </>
  );
}

export default AdminLayout;
