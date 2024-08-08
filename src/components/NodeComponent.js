import React from "react";

const NodeComponent = ({ node }) => {
  const bgColorClass = node.color;

  return (
    <div
      className={`p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center ${bgColorClass}`}
    >
      <div className="font-semibold">{node.name}</div>
    </div>
  );
};

export default NodeComponent;
