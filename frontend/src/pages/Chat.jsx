import React from "react";
import Navbar from "../components/Navbar";
import Ads from "../components/Skeleton/Ads";
import ChatBox from "../components/Chat/ChatBox";
import WorldChatBox from "../components/Chat/WorldChatBox";
import Contacts from "../components/Chat/Contacts";
import { useChatStore } from "../store/chat.store";
import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";
import ChatboxSkeleton from "../components/Skeleton/ChatboxSkeleton";

const Chat = () => {
  const { selectedUser, selectWorldChat } = useChatStore();

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-2 px-5">
        <div
          className="d-flex justify-content-around  align-items-start "
          style={{ gap: "20px" }}
        >
          <Contacts />
          <div
            className="d-flex flex-column justify-content-evenly flex-grow-1"
            style={{ gap: "20px" }}
          >
            {selectedUser ? (
              <ChatBox />
            ) : !selectWorldChat ? (
              <ChatboxSkeleton />
            ) : (
              <WorldChatBox />
            )}
          </div>

          <Ads />
        </div>
      </div>
    </>
  );
};

export default Chat;
