import React from "react";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";
import { organization } from "../data/organization";
import NodeComponent from "../components/NodeComponent";

const StrukturOrganisasi = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-700 text-center">
        Struktur Organisasi Desa Buntar
      </h2>
      <div className="flex justify-center overflow-x-auto">
        <OrgChart tree={organization} NodeComponent={NodeComponent} />
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
