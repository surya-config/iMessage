import React, { forwardRef, useRef, useEffect } from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import * as timeago from "timeago.js";
import ScrollableFeed from "react-scrollable-feed";

const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, message, photo, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);
    const divRef = useRef(null);

    useEffect(() => {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    });

    return (
      <div
        ref={ref}
        ref={divRef}
        className={`message ${user.email === email && "message__sender"}`}
      >
        <Avatar className="message__photo" src={photo} />
        <p>{message}</p>
        <small>
          {timeago.format(new Date(timestamp?.toDate()).toLocaleString())}
        </small>
      </div>
    );
  }
);

export default Message;
