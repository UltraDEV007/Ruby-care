import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../Form/DialogComponents";

export default function EditCommentFromDetail({
  onSave,
  comment,
  insight,
  openEdit,
  handleClose,
}) {
  const [formData, setFormData] = useState({
    content: "",
  });

  const { content } = formData;

  useEffect(() => {
    const getCommentData = () => {
      const { content } = comment;
      setFormData({ content });
    };
    if (comment?.id) {
      getCommentData();
    }
  }, [comment]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openEdit}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography className="title">Edit Food</Typography>
        </DialogTitle>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(insight?.id, formData, comment.id);
          }}>
          <DialogContent dividers>
            <div className="input-container">
              <TextField
                inputProps={{ maxLength: 131 }}
                name="content"
                required
                id="content-input"
                label="Edit COmment"
                type="text"
                style={{ width: "300px", margin: "10px" }}
                value={content}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
              <Button
                onClick={handleClose}
                variant="contained"
                color="secondary">
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}
