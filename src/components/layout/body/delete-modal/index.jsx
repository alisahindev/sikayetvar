import cogoToast from "cogo-toast";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { connect } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router";
import { Button, Modal, ModalFooter, ModalHeader } from "reactstrap";
import { deletePost, handleReset } from "../../../../redux/posts/post-reducer";

export const DeleteModal = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { deletePost, updateSuccess, handleReset } = props;

  const handleClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (updateSuccess) {
      handleReset();
      handleClose();
      cogoToast.success("Silindi");
    }
  }, [updateSuccess]);

  const handleDelete = () => {
    deletePost(id);
  };

  return (
    <div>
      <Modal isOpen={true}>
        <ModalHeader
          close={
            <IoClose style={{ cursor: "pointer" }} onClick={handleClose} />
          }
          style={{ borderBottom: 0 }}
        >
          Gönderiyi silmek istediğinize emin misiniz ?
        </ModalHeader>
        <ModalFooter>
          <Button className='btn btn-error' onClick={() => handleDelete()}>
            SİL
          </Button>
          <Button className='btn btn-primary' onClick={handleClose}>
            VAZGEÇ
          </Button>
        </ModalFooter>
      </Modal>
      <Outlet />
    </div>
  );
};

const mapStateToProps = (storeState) => ({
  updateSuccess: storeState.posts.updateSuccess,
});

const mapDispatchToProps = { deletePost, handleReset };

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
