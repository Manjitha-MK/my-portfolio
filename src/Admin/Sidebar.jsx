// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  BriefcaseIcon, 
  AcademicCapIcon, 
  DocumentTextIcon, 
  ChatBubbleLeftRightIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
    { name: 'Projects', href: '/admin/projects', icon: BriefcaseIcon },
    { name: 'Blogs', href: '/admin/blogs', icon: DocumentTextIcon },
    { name: 'Messages', href: '/admin/messages', icon: ChatBubbleLeftRightIcon },
  ];

  return (
    <>
      {/* Mobile sidebar overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-gray-600 bg-opacity-75 transition-opacity lg:hidden ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 sm:w-56 md:w-60 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out 
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 sm:w-10 sm:h-10" />
            <div className="ml-3">
              <h1 className="text-lg sm:text-base font-bold text-gray-800 dark:text-white">Portfolio Admin</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Dashboard</p>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="mt-5 px-2 sm:px-1">
          <div className="space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => 
                  `group flex items-center px-4 py-3 text-sm sm:text-xs font-medium rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5 sm:h-4 sm:w-4 flex-shrink-0" aria-hidden="true" />
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Account section */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 sm:px-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
                Account
              </p>
            </div>
            <div className="mt-3 space-y-1">
              <a
                href="#"
                className="group flex items-center px-4 py-3 text-sm sm:text-xs font-medium text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <ArrowLeftOnRectangleIcon className="mr-3 h-5 w-5 sm:h-4 sm:w-4 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                Logout
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
