import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AffirmationDetail from "../Dialogs/AffirmationDialogs/AffirmationDetail";

export default function AffirmationLetter({
  affirmation,
  // updated,
  openOptions,
  handleDelete,
  handleDetailOpen,
  handleDetailClose,
  openDetail,
  onDelete,
}) {
  return (
    <>
      <div className="affirmation-container">
        <div className="content">
          <img
            style={{ cursor: "pointer" }}
            onClick={handleDetailOpen}
            width="80px"
            height="80px"
            // src="https://www.pngrepo.com/download/180681/love-letter-hearts.png"
            src="https://www.pngrepo.com/download/180697/love-letter-hearts.png"
            alt="closed affirmation letter"
          />
        </div>
        {/* <div className="time">
          {!updated ? (
            <Moment format="MMM/DD/yyyy hh:mm A">
              {affirmation.created_at}
            </Moment>
          ) : (
            <Moment format="MMM/DD/yyyy hh:mm A">
              {affirmation.updated_at}
            </Moment>
          )}
        </div> */}
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
    </>
  );
}
