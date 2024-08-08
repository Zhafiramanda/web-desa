import React from "react";
import { Link } from "react-router-dom";
import { potensiDesaData } from "../data/potensiDesa";

const PotensiDesa = () => {
  return (
    <div className="container mx-auto p-20">
      <h2 className="text-3xl font-bold mb-4">Potensi Desa Buntar</h2>
      <div className="flex flex-wrap -mx-4">
        {potensiDesaData.map((potensi) => (
          <div key={potensi.id} className="w-full lg:w-1/2 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg flex">
              <img
                src={potensi.image}
                alt={potensi.title}
                className="w-1/3 object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{potensi.title}</h3>
                  <p className="text-gray-600 mb-4">{potensi.date}</p>
                  <p className="text-gray-700 mb-4">
                    {potensi.shortDescription}
                  </p>
                </div>
                <Link
                  to={`/potensi/${potensi.id}`}
                  className="text-blue-600 hover:underline mt-auto"
                >
                  selengkapnya ➔
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotensiDesa;
