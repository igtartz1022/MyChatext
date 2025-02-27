import React, { useState } from "react";
import logo from "../../assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Messages from "./Messages";
import { useChatStore } from "../../store/chat.store";
import { useAuthStore } from "../../store/auth.store";

const ChatBox = () => {
  const [message, setMessage] = useState({ text: "" });

  const { onlineContacts } = useAuthStore();

  const { selectedUser, sendPersonalMessage, messages } = useChatStore();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message || !message.text || !message.text.trim()) return;
    await sendPersonalMessage(message);
    setMessage({ text: "" });
  };

  // console.log(message);

  return (
    <div className="container">
      <div className="card" style={{ width: "100%" }}>
        <div className="card-header bg-secondary text-white text-center fs-5 d-flex align-items-center justify-content-between px-3">
          <div className="d-flex align-items-center  w-100">
            <img
              src={
                selectedUser.profilePic
                  ? `/profile-pics/${selectedUser.profilePic}`
                  : logo
              }
              alt="User Profile"
              className=" border rounded-circle me-2"
              width="45"
              height="45"
            />
            <div className="align-items-start d-flex flex-column">
              <div className="fw-bold">{selectedUser.fullName}</div>
              <div className="small">
                {onlineContacts.includes(selectedUser._id) && (
                  <span className="badge bg-success">Online</span>
                )}
                {/* Change to bg-danger for Offline */}
              </div>
            </div>
          </div>
        </div>

        <div
          className="card-body"
          style={{
            height: "425px",
            overflowY: "auto",
            padding: "20px",
            width: "100%",
            scrollbarWidth: "thin", // Firefox
            scrollbarColor: "#888 transparent", // Firefox thumb only
            msOverflowStyle: "none", // Hide default scrollbar for Edge

            /* Webkit-based (Chrome, Safari) */
            WebkitOverflowScrolling: "touch",

            /* Scrollbar styling for Webkit browsers */
            WebkitScrollbarWidth: "thin",
            WebkitScrollbar: { width: "8px" }, // Stick thickness
            WebkitScrollbarThumb: {
              backgroundColor: "green", // Stick color
              borderRadius: "20px", // Make it round
            },
            WebkitScrollbarTrack: {
              background: "transparent", // Hide track
            },
          }}
        >
          <Messages />
        </div>
        <form onSubmit={handleSendMessage} className="card-footer d-flex">
          <input
            type="text"
            className="form-control me-2"
            value={message.text}
            onChange={(e) => setMessage({ ...message, text: e.target.value })}
            placeholder="Type a message..."
          />
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
