import Dialog from "@material-ui/core/Dialog";
import { DialogTitle } from "../../components/Form/DialogComponents";
export default function FirefoxBrowser({ firefoxAgent }) {
  return (
    <Dialog aria-labelledby="customized-dialog-title" open={firefoxAgent}>
      <DialogTitle>
        Sorry, but we do not support your browser at this time. Your browser:
        Firefox&nbsp;
        <span role="img" aria-label="fox emoticon">
          🦊
        </span>
        <br />
        Please use one of the supported browsers: <br /> Google Chrome, Safari,
        Opera, Internet Explorer
      </DialogTitle>
    </Dialog>
  );
}
