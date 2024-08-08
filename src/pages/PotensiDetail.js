import React from "react";
import { useParams } from "react-router-dom";
import { potensiDesaData } from "../data/potensiDesa";

const PotensiDetail = () => {
  const { id } = useParams();
  const potensi = potensiDesaData.find((item) => item.id === parseInt(id));

  if (!potensi) {
    return <div>Potensi not found</div>;
  }

  return (
    <div className="container mx-auto p-20">
      <h2 className="text-3xl font-bold mb-4">{potensi.title}</h2>
      <div className="flex justify-center mb-4">
        <img
          src={potensi.image}
          alt={potensi.title}
          className="object-cover w-64 h-64 rounded-lg"
        />
      </div>
      <p className="text-gray-600 mb-4">{potensi.date}</p>
      <p className="text-gray-700 mb-4 whitespace-pre-line">
        {potensi.longDescription}
      </p>
      <a href="/potensi-desa" className="text-blue-600 hover:underline">
        Kembali ke Potensi Desa
      </a>
    </div>
  );
};

export default PotensiDetail;
