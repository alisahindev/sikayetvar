import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  getPost,
  updatePost,
  handleReset,
  getPosts,
} from "../../../../redux/posts/post-reducer";
import PageSpinner from "../../spinner";
import cogoToast from "cogo-toast";
import { IoClose } from "react-icons/io5";
import { Field, Form, Formik } from "formik";

export const UpdateModal = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { post, getPost, loading, updatePost, updateSuccess, handleReset } =
    props;

  useEffect(() => {
    getPost(id);
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      cogoToast.success("Güncellendi");
      getPosts();
      handleReset();
      setTimeout(() => {
        handleClose();
      }, 500);
    }
  }, [updateSuccess]);

  const handleClose = () => {
    navigate(-1);
  };

  const handleSubmit = (values) => {
    updatePost(values);
  };

  return (
    <div>
      {loading ? (
        <PageSpinner />
      ) : (
        <Modal className='post-detail-modal' isOpen={true} toggle={() => {}}>
          <Formik
            enableReinitialize
            initialValues={{ ...post }}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values, setFieldValue, isSubmitting }) => (
              <Form>
                <ModalHeader
                  close={
                    <IoClose
                      style={{ cursor: "pointer" }}
                      onClick={handleClose}
                    />
                  }
                >
                  Düzenle
                </ModalHeader>
                <ModalBody>
                  <div className='modal-forms'>
                    <h5>Title</h5>
                    <Field>
                      {({ ...field }) => (
                        <input
                          value={values.title || ""}
                          type='text'
                          className='modal-input'
                          onChange={(e) =>
                            setFieldValue("title", e.target.value)
                          }
                        />
                      )}
                    </Field>
                  </div>
                  <div className='modal-forms'>
                    <h5>Body</h5>
                    <Field>
                      {({ ...field }) => (
                        <textarea
                          value={values.body || ""}
                          rows='4'
                          itemType='textarea'
                          className='modal-input'
                          onChange={(e) =>
                            setFieldValue("body", e.target.value)
                          }
                        />
                      )}
                    </Field>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button className='btn btn-update' type='submit'>
                    GÜNCELLE
                  </Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </Modal>
      )}
      <Outlet />
    </div>
  );
};

const mapStateToProps = (storeState) => ({
  post: storeState.posts.post,
  loading: storeState.posts.loading,
  updateSuccess: storeState.posts.updateSuccess,
});

const mapDispatchToProps = { getPost, updatePost, handleReset, getPosts };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateModal);
