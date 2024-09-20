import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// Lazy-load the components
const Home = lazy(() => import("./pages/Home"));
const CreatePost = lazy(() => import("./pages/CreatePost"));
const Login = lazy(() => import("./pages/Login"));
const Deshboard = lazy(() => import("./pages/admin/Deshboard"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const ChatManagement = lazy(() => import("./pages/ChatManagement"));
const MessageManagement = lazy(() => import("./pages/MessageManagement"));
const UserManagement = lazy(() => import("./pages/UserManagement"));

import ProtuctedRoute from "./componenets/auth/ProtuctedRoute";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-["#e6ebf4"]'>
        <Link to="/">
          <h1 className="w-28 text-2xl">EngiSkills</h1>
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-6 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<ProtuctedRoute user={user} />}>
              <Route path="/" element={<Home />} />

              <Route path="/create-post" element={<CreatePost />} />
            </Route>
            <Route
              path="/login"
              element={
                <ProtuctedRoute user={!user} redrict="/">
                  <Login />
                </ProtuctedRoute>
              }
            />

            <Route path="/admin" element={<AdminLogin />}></Route>
            <Route path="/admin/deshboard" element={<Deshboard />}></Route>
            <Route
              path="/admin/chat-management"
              element={<ChatManagement />}
            ></Route>
            <Route
              path="/admin/message-management"
              element={<MessageManagement />}
            ></Route>
            <Route
              path="/admin/user-management"
              element={<UserManagement />}
            ></Route>

            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <footer className="w-full text-center	p-5 border-t">
        <h2>@ EngiImage | All rights reserved</h2>
      </footer>
    </BrowserRouter>
  );
}

export default App;
