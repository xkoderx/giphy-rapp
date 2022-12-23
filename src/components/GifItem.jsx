import React from "react";

export const GifItem = ({ title, url }) => {
  return (
    <>
      <div className="card m-2 p-1" style={{ width: "18rem" }}>
        <img src={url} alt={title} className="card-img-top" />
        <div className="card-body">
          <p className="card-title">{title}</p>
        </div>
      </div>
    </>
  );
};
