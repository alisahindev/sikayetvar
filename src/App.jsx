import React from "react";
import { Route, Routes, useLocation } from "react-router";
import Navbar from "./components/layout/header/navbar";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/layout/footer";
import PostPage from "./components/layout/body/post-page/route";
import ProfilePage from "./components/layout/body/profile-page";

function App() {
  let location = useLocation();
  return (
    <div className='App'>
      <AnimatePresence>
        <div className='container'>
          <Navbar />
          <Routes location={location.pathname}>
            <Route
              key='post-page'
              path='/*'
              element={
                <motion.div
                  key='post-page'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <PostPage />
                </motion.div>
              }
            />
            <Route
              key='profile-detail'
              path='/profile/:id'
              element={
                <motion.div
                  key='profile-detail'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProfilePage />
                </motion.div>
              }
            />
          </Routes>
          <Footer />
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;
