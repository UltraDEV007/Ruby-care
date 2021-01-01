import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { DialogTitle } from "../../components/Form/DialogComponents";
import Button from "@material-ui/core/Button";

export default function FirefoxBrowser({ firefoxAgent }) {
  const [reason, setReason] = useState(false);

  return (
    <Dialog aria-labelledby="customized-dialog-title" open={firefoxAgent}>
      <DialogTitle>
        {!reason ? (
          <>
            Sorry, but we do not support your browser at this time. Your
            browser: Firefox&nbsp;
            <span role="img" aria-label="fox emoticon">
              🦊
            </span>
            <br />
            Please use one of the supported browsers: <br />
            <a
              target="_blank"
              href="https://www.google.com/chrome/"
              rel="noreferrer">
              Google Chrome,&nbsp;
            </a>
            <a
              target="_blank"
              href="https://support.apple.com/downloads/safari"
              rel="noreferrer">
              Safari,&nbsp;
            </a>
            <a target="_blank" href="https://www.opera.com/" rel="noreferrer">
              Opera,&nbsp;
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.microsoft.com/en-us/edge">
              Microsoft Edge&nbsp;
            </a>
            <br /> <br />
          </>
        ) : (
          <>
            We don't support Firefox because this app is heavliy focused around
            picking your date and time, and the date-time picker is not
            supported by Firefox. <br /> <br />
          </>
        )}
        <Button
          color="primary"
          variant="contained"
          onClick={() => setReason((previousValue) => !previousValue)}>
          {!reason ? (
            <>Why don't you support Firefox?</>
          ) : (
            <>I want to hear you say sorry again</>
          )}
        </Button>
      </DialogTitle>
    </Dialog>
  );
}
