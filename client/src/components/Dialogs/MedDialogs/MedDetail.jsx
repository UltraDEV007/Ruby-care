import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import "moment-timezone";
import { compareDateWithCurrentTime } from "../../../utils/compareDateWithCurrentTime";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../Form/DialogComponents";

export default function MedDetail({
  med,
  openDetail,
  handleDetailClose,
  onDelete,
  onTake,
  onNotTake,
  taken,
}) {
  let currentTime = new Date();

  return (
    <Dialog
      onClose={handleDetailClose}
      aria-labelledby="customized-dialog-title"
      open={openDetail}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleDetailClose}>
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "1.3rem",
            fontFamily: "Montserrat, sans-serif",
            padding: "5px",
          }}
        >
          <img
            src={med.image}
            style={{ height: "30px", width: "50px" }}
            alt={med.name}
          />
          &nbsp;
          <>{med.name}</>
        </Typography>
        <Typography style={{ textAlign: "left", marginLeft: "10px" }}>
          {med.medication_class}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          overflowWrap: "break-word",
        }}
      >
        {compareDateWithCurrentTime(med?.time) < 0 ? (
          <Typography>I take {med.name} because...</Typography>
        ) : (
          <Typography>I am supposed to take {med.name} because...</Typography>
        )}
        <Typography style={{ marginTop: "2px" }}>
          <small>{med.reason}</small>
        </Typography>
      </DialogContent>
      <DialogTitle>
        {compareDateWithCurrentTime(med?.time) < 0 && taken === false ? (
          <Typography>
            You have to take {med?.name}&nbsp;
            <Moment from={currentTime?.toISOString()}>{med?.time}</Moment>
          </Typography>
        ) : compareDateWithCurrentTime(med?.time) === 1 && taken === false ? (
          <Typography>Did you take {med?.name}?</Typography>
        ) : compareDateWithCurrentTime(med?.time) === 1 && taken === true ? (
          <Typography>
            You Took {med?.name} at&nbsp;
            <Moment format="MMM/DD/yyyy hh:mm A">{med.updated_at}</Moment>
          </Typography>
        ) : (
          <Typography>
            You have to take {med?.name}&nbsp;
            <Moment from={currentTime?.toISOString()}>{med?.time}</Moment>
          </Typography>
        )}
      </DialogTitle>
      <DialogActions>
        {compareDateWithCurrentTime(med?.time) === 1 && taken === false ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDetailClose}
          >
            <>Not yet</>
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleDetailClose}
          >
            <>Exit</>
          </Button>
        )}
        {compareDateWithCurrentTime(med?.time) === 1 && taken === false ? (
          <Button
            variant="contained"
            color="primary"
            className="delete-button"
            onClick={() => onTake(med.id)}
          >
            Yes
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            className="delete-button"
            onClick={() => onDelete(med.id)}
          >
            Delete
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
