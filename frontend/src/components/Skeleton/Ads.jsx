import React from "react";

const Ads = () => {
  return (
    <div className="flex-shrink-0 p-3 bg-light" style={{ width: "250px" }}>
      <div className="d-flex flex-column gap-3">
        <div className="card p-3 shadow-sm">
          <div className="placeholder-glow">
            <div
              className="placeholder col-12 mb-2"
              style={{ height: "150px" }}
            ></div>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-4"></span>
          </div>
        </div>
        <div className="card p-3 shadow-sm">
          <div className="placeholder-glow">
            <div
              className="placeholder col-12 mb-2"
              style={{ height: "150px" }}
            ></div>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
