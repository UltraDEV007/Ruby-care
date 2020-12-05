import Button from "@material-ui/core/Button";
import { Link, Switch } from "react-router-dom";
import AffirmationDetail from "../Dialogs/AffirmationDialogs/AffirmationDetail";
import { useState } from "react";
import AffirmationEdit from "../Dialogs/AffirmationDialogs/AffirmationEdit";

export default function AffirmationLetter({
  affirmation,
  openOptions,
  handleDelete,
  handleDetailOpen,
  handleDetailClose,
  openDetail,
  onDelete,
  handleUpdate,
  affirmations,
  setAffirmations,
}) {
  const [openEdit, setOpenEdit] = useState(false);
  const [edited, setEdited] = useState(false);

  const onSave = (formData, id) => {
    handleUpdate(formData, id);
    setEdited(true);
    setTimeout(async () => {
      setEdited(false);
      setOpenEdit(false);
    }, 800);
    setAffirmations(affirmations);
  };

  return (
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
            variant="contained"
            color="primary"
            className="edit-button"
          >
            <span role="img" aria-label="edit">
              🔧
            </span>
          </Button>
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
      <AffirmationDetail
        affirmation={affirmation}
        openDetail={openDetail}
        onDelete={onDelete}
        handleDetailOpen={handleDetailOpen}
        handleDelete={handleDelete}
        handleDetailClose={handleDetailClose}
      />

      {openEdit && (
        <Switch>
          <Route path="/affirmations/:id/edit">
            <AffirmationEdit
              handleOpen={handleOpen}
              affirmations={affirmations}
              onSave={onSave}
              handleUpdate={handleUpdate}
              handleClose={handleClose}
            />
          </Route>
        </Switch>
      )}
    </>
  );
}
