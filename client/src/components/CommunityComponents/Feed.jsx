import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CareCard from "../Card/CareCard";

const Feed = ({ items, name, attribute, action, type }) => (
  <div>
    <h1 className="default-title">{name}&nbsp;Feed</h1>
    <div>
      {items.map((item, idx) =>
        item[attribute]?.length ? (
          type === "comment" ? (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px",
                }}
              >
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
            </>
          ) : (
            <div
              style={{ display: "flex", alignItems: "center", padding: "8px" }}
            >
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
          )
        ) : (
          <></>
        )
      )}
    </div>
  </div>
);

export default Feed;
