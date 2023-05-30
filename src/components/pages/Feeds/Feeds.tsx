import React, { useCallback, useEffect, useMemo, useState } from "react";
import CardComponent from "../../common/CardComponent";

import { getPosts } from "../../../services/post";
import { IPost } from "../../../interfaces/IPost";
import { Button, Grid, Modal } from "@mui/material";
import CreateEditPost from "./CreateEditPost";
import { defaultModalData, modalType, progressStatus } from "../../../utils/constant";

const Feeds: React.FC = () => {
  const [postArray, setPostArray] = useState([]);
  const [loading, setLoading] = useState(progressStatus.toLoad);
  const [resStatus, setResStatus] = useState({
    status: false,
    message: "",
  });

  const [modalData, setModalData] = useState<any>(defaultModalData);

  const getAllPostFn = useCallback(async () => {
    setLoading(progressStatus.loading);

    const { status, data, message } = await getPosts();
    setPostArray(data);
    setLoading(progressStatus.loaded);

    if (!status) {
      setResStatus({ status, message });
    }
  }, []);

  useEffect(() => {
    getAllPostFn();
  }, [getAllPostFn]);

  const handleAddPostClick = useCallback(() => {
    setModalData({ open: true, type: modalType.AddEditPost, data: null });
  }, []);

  const handleClose = useCallback(() => {
    setModalData(defaultModalData);
  }, []);

  const renderModal = useMemo(() => {
    let commonProps = {
      handleClose,
      modalData,
      setModalData,
      resStatus,
      getAllPostFn,
    };
    const modals = {
      [modalType.AddEditPost]: <CreateEditPost {...commonProps} />,
    };

    return modals?.[modalData.type] || null;
  }, [getAllPostFn, handleClose, modalData, resStatus]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={handleAddPostClick}>
              Add Post
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {loading !== progressStatus.loaded ? (
        "Loading..."
      ) : (
        <div className="flex">
          {postArray?.map((post: IPost) => <CardComponent key={post._id} card={post} />) || null}
        </div>
      )}

      {modalData.open ? (
        <Modal
          open={modalData.open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {renderModal}
        </Modal>
      ) : null}
    </>
  );
};

export default Feeds;
