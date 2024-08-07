import React from "react";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";
import { organization } from "../data/organization";

const NodeComponent = ({ node }) => (
  <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
    {node.name}
  </div>
);

const StrukturOrganisasi = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        Struktur Organisasi
      </h2>
      <OrgChart tree={organization} NodeComponent={NodeComponent} />
    </div>
  );
};

export default StrukturOrganisasi;
