import React from "react";

const Entries: React.FC = () => {
  const handelChange = () => {
    console.log("Click");
  };
  return (
    <div className="form-group">
      <select
        name="entries"
        className="form-control form-control-sm"
        value=""
        onChange={handelChange}
        style={selectTagStyle}
      >
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="10">10</option>
        <option value="All">All</option>
      </select>
    </div>
  );
};

const selectTagStyle = {
  backgroundColor: "#8a929a",
  color: "white",
  border: "none",
  width: "100px",
  height: "auto",
};

export default Entries;
