import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CareCard from "../Card/CareCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerText: {
    textAlign: ({ textAlign }) => textAlign ?? "center",
    fontSize: "2.3rem",
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
    },
    marginBottom: "5px",
    width: "100%",
    fontWeight: 300,
  },

  items: {
    display: "flex",
    alignItems: "center",
    justifyContent: ({ justifyContent }) => justifyContent ?? "flex-start",
    padding: "8px",
  },
}));

const Feed = ({
  items,
  name,
  attribute,
  action,
  type,
  justifyContent,
  textAlign,
}) => {
  const classes = useStyles({ textAlign, justifyContent });
  return (
    <div>
      <h1 className={classes.headerText}>{name}&nbsp;Feed</h1>
      <div>
        {items.map((item, idx) =>
          item[attribute]?.length ? (
            type === "comment" ? (
              <>
                <div className={classes.items}>
                  <Link className="link-2" to={`/users/${item.id}`}>
                    {!item?.image ? (
                      <AccountCircleIcon className="user-icon" />
                    ) : (
                      <img
                        className="user-image"
                        src={item?.image}
                        alt={item?.name}
                      />
                    )}
                    {item.name}
                  </Link>
                  <span className="small-text">
                    &nbsp;recently&nbsp;
                    {action}&nbsp;on&nbsp;
                  </span>
                  <Link
                    className="link-2"
                    to={`/insights/${item[attribute][0].insight_id}`}
                  >
                    {item[attribute][0].insight_title}
                  </Link>
                </div>

                <div>
                  <CareCard
                    key={idx}
                    user={item}
                    post={item[attribute][0]}
                    description={item[attribute][0]?.content}
                    commentStyles={true}
                    editIsLink={false}
                  />
                </div>
                <br />
              </>
            ) : (
              <>
                <div className={classes.items}>
                  <Link className="link-2" to={`/users/${item.id}`}>
                    {!item?.image ? (
                      <AccountCircleIcon className="user-icon" />
                    ) : (
                      <img
                        className="user-image"
                        src={item?.image}
                        alt={item?.name}
                      />
                    )}
                    {item.name}
                  </Link>
                  <span className="small-text">
                    &nbsp;recently&nbsp;
                    {action}&nbsp;
                  </span>
                  <Link
                    className="link-2"
                    to={`/insights/${item[attribute][0].insight_id}`}
                  >
                    {item[attribute][0].title}
                  </Link>
                </div>
                <br />
              </>
            )
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
