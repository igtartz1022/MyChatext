import React from "react";
import Sidebar from "../components/Home/Sidebar";
import Newsfeed from "../components/Home/Newsfeed";
import Ads from "../components/Skeleton/Ads";
import Navbar from "../components/Navbar";
import AddPosts from "../components/Home/Addposts";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-2 px-5">
        <div
          className="d-flex justify-content-between align-items-start"
          style={{ gap: "20px" }}
        >
          <Sidebar />
          <div
            className="d-flex flex-column justify-content-evenly flex-grow-1"
            style={{ gap: "20px" }}
          >
            <AddPosts />
            <Newsfeed />
          </div>

          <Ads />
        </div>
      </div>
    </>
  );
};

export default Home;
