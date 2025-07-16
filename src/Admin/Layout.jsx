// src/components/Layout.jsx
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
// import Header from './Header';
// import { useAuth } from '../context/AuthContext';
// import { useDarkMode } from '../context/DarkModeContext';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
//   const { user, logout } = useAuth();
//   const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  // Hide sidebar on small screens when navigating
  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location]);

//   if (!user) return null;

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* <Header 
        //   user={user} 
        //   logout={logout} 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}
        //   darkMode={darkMode}
        //   toggleDarkMode={toggleDarkMode}
        /> */}
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;