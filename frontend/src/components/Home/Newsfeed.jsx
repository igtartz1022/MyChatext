import Addposts from "./Addposts";
import Posts from "./Posts";

const Newsfeed = () => {
  return (
    <div
      className="d-flex flex-column justify-content-evenly flex-grow-1 p-3 border-top"
      style={{
        maxHeight: "80vh",
        maxWidth: "800px",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div>
        <Posts />
      </div>
    </div>
  );
};

export default Newsfeed;
