// components/AdminLayout.jsx
import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
//import { Sidebar } from "./Sidebar";


export default function AdminLayout({ children, adminName = "Admin" }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasUserToggled, setHasUserToggled] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsSidebarOpen(true);
    }
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
    setHasUserToggled(true);
  };

  return (
    <div className="flex min-h-screen bg-green-100">
      {!isSidebarOpen && (
        <button
          onClick={handleSidebarToggle}
          className="md:hidden fixed top-4 left-4 z-50 bg-white border p-2 shadow"
        >
          <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        hasUserToggled={hasUserToggled}
        onToggleSidebar={handleSidebarToggle}
        adminName={adminName}
      />

      <div
        className={`flex-grow flex flex-col justify-center items-start p-6 md:p-12 overflow-auto transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
