import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ensure this is included
import Layout from './Layout';
import ProjectTable from './Adminprojecttable';
import AdminProjectForm from './AdminProjectsForm';
import AdminEditprojectForm from './AdminEditprojectForm';
// import Projects from '../components/Project';
// import Projects2 from './Projects';
// import Login from './Login'; // Ensure all these components are imported
// import Dashboard from './Dashboard';
// import Projects from './Projects';
// import ProjectForm from './ProjectForm';
// import Skills from './Skills';
// import Blogs from './Blogs';
// import BlogForm from './BlogForm';
// import Messages from './Messages';
// import PrivateRoute from './PrivateRoute'; // assume this handles auth
// import { AuthProvider } from './context/AuthContext';
// import { DarkModeProvider } from './context/DarkModeContext';



const AdminHomePage = () => {
  return (
  
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route 
              path="/*" 
              element={
                  <Layout />
                
              }
            >
              {/* <Route index element={<Dashboard />} /> */}
              {/* 
              <Route path="projects/new" element={<ProjectForm />} />
              <Route path="projects/edit/:id" element={<ProjectForm />} />
              <Route path="skills" element={<Skills />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="blogs/new" element={<BlogForm />} />
              <Route path="blogs/edit/:id" element={<BlogForm />} />
              <Route path="messages" element={<Messages />} /> */}
              <Route path="projects" element={<ProjectTable  />} /> 
            </Route>
            <Route path='/projects/addprojects' element={<AdminProjectForm />}></Route>
            <Route path='/projects/editproject' element={<AdminEditprojectForm />}></Route>
          </Routes>

          <ToastContainer 
            position="top-right"
            autoClose={3000}
            theme="colored"
          />
        </div>
  );
};

export default AdminHomePage;
