import React from "react";

const Loading = ({ loading, children }) => {
  return (
    <div>
      {loading && <div className="loader"></div>}
      {children}
    </div>
  );
};
export default Loading;
