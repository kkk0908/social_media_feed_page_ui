import React, { useCallback, useState } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { createPost } from "../../../services/post";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateEditPost: React.FC<any> = ({ modalData, setModalData, handleClose, getAllPostFn }) => {
  const [formData, setFormData] = useState<any>({
    title: "",
    description: "",
    images: [],
    tags: [],
  });

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const res = await createPost({
        title: formData.title,
        contents: formData.description,
        images: formData.images,
        tags: formData.tags,
      });

      if (res) {
        getAllPostFn();
        handleClose();
      }
    },
    [
      formData.description,
      formData.images,
      formData.tags,
      formData.title,
      getAllPostFn,
      handleClose,
    ]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files: any = e.target.files;
      const updatedImageList: string[] = [...formData.images];

      if (files?.length > 10 || updatedImageList.length > 10) return;

      for (const file of files) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          updatedImageList.push(reader.result as string);

          setFormData({ ...formData, images: updatedImageList });
        };
      }
    },
    [formData]
  );

  const handleRemoveImage = useCallback(
    (index: number) => {
      const updatedImageList = [...formData.images];
      updatedImageList.splice(index, 1);
      setFormData({ ...formData, images: updatedImageList });
    },
    [formData]
  );

  const AddIcon = useCallback(
    () => (
      <label htmlFor="upload-input">
        <IconButton
          className="uploadImage"
          component="span"
          style={{ borderBottom: "none !important" }}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </label>
    ),
    []
  );

  return (
    <Box sx={style}>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        style={{ marginBottom: "16px" }}
      >
        Text in a modal
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1">Upload Images</Typography>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            id="upload-input"
            style={{ display: "none" }}
          />
          <AddIcon />
        </div>

        <Grid container spacing={2}>
          {formData.images?.map((image: any, index: number) => (
            <Grid item key={index}>
              <div style={{ position: "relative" }}>
                <IconButton
                  style={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    color: "black",
                    background: "white",
                    contain: "style",
                  }}
                  onClick={() => handleRemoveImage(index)}
                >
                  <DeleteIcon />
                </IconButton>
                <img
                  src={image}
                  alt={`Preview ${index}`}
                  height="100"
                  style={{ display: "block" }}
                />
              </div>
            </Grid>
          ))}
        </Grid>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "16px",
          }}
        >
          <Button variant="outlined" onClick={handleClose} style={{ marginRight: "8px" }}>
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default CreateEditPost;
