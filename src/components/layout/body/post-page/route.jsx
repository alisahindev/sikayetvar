import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router";
import DeleteModal from "../delete-modal/index";
import PostDetail from "../post-detail";
import UpdateModal from "../update-modal";
import PostPage from "./index";

const PostPageRoute = ({ match }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key='post-page'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Routes>
            <Route path='/' element={<PostPage />}>
              <Route path='/post/:id/update' element={<UpdateModal />} />
              <Route path='/post/:id/delete' element={<DeleteModal />} />
            </Route>
            <Route path='/post/:id' element={<PostDetail />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PostPageRoute;
