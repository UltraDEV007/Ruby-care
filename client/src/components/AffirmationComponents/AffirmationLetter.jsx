import Button from "@material-ui/core/Button";
import { Switch, Route, Link } from "react-router-dom";
import AffirmationDetail from "../Dialogs/AffirmationDialogs/AffirmationDetail";
import { useState } from "react";
import AffirmationEdit from "../Dialogs/AffirmationDialogs/AffirmationEdit";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function AffirmationLetter({
  affirmation,
  openOptions,
  handleDelete,
  handleUpdate,
  affirmations,
  setAffirmations,
}) {
  const [openEdit, setOpenEdit] = useState(false);
  const [edited, setEdited] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const onSave = (formData, id) => {
    handleUpdate(formData, id);
    setEdited(true);
    setTimeout(async () => {
      setEdited(false);
      setOpenEdit(false);
    }, 800);
    setAffirmations(affirmations);
  };

  const handleOpen = () => {
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpenEdit(false);
  };

  const onDelete = (id) => {
    handleDelete(id);
    setOpenDetail(false);
  };

  const handleDetailOpen = () => {
    setOpenDetail(true);
  };

  const handleDetailClose = () => {
    setOpenDetail(false);
  };

  return (
    <>
      {!edited ? (
        <>
          <div className="affirmation-container">
            <div className="content">
              <img
                style={{ cursor: "pointer" }}
                onClick={handleDetailOpen}
                width="80px"
                height="80px"
                src="https://www.pngrepo.com/download/180697/love-letter-hearts.png"
                alt="closed affirmation letter"
              />
            </div>
            <div
              className="buttons"
              style={openOptions ? { display: "flex" } : { display: "none" }}
            >
              <Button
                component={Link}
                to={`/affirmations/${affirmation.id}/edit`}
                onClick={handleOpen}
                variant="contained"
                color="primary"
                className="edit-button"
              >
                <span role="img" aria-label="edit">
                  🔧
                </span>
              </Button>
              &#8199;
              <Button
                variant="contained"
                color="secondary"
                className="delete-button"
                onClick={() => handleDelete(affirmation.id)}
              >
                <span role="img" aria-label="delete">
                  🗑️
                </span>
              </Button>
            </div>
          </div>
          {openDetail && (
            <AffirmationDetail
              affirmation={affirmation}
              openDetail={openDetail}
              onDelete={onDelete}
              handleDetailClose={handleDetailClose}
            />
          )}
        </>
      ) : (
        <div className="affirmation-container">
          <CircularProgress style={{ height: "80px", width: "80px" }} />
        </div>
      )}
      {openEdit && (
        <Switch>
          <Route path="/affirmations/:id/edit">
            <AffirmationEdit
              handleOpen={handleOpen}
              affirmations={affirmations}
              onSave={onSave}
              handleClose={handleClose}
            />
          </Route>
        </Switch>
      )}
    </>
  );
}
