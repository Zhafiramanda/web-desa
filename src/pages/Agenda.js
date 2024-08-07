import React from "react";
import posterImage from "../assets/images/poster.jpeg";

const Agenda = () => {
  const agendaItems = [
    {
      date: "Agustus 18, 2024",
      title: "Jalan Sehat Semangat HUT RI",
      description: "Merayakan Jalan Sehat Bersama-sama Masyarakat Desa Buntar",
      imageUrl: posterImage,
    },
    // Add more agenda items here if needed
  ];

  return (
    <div className="p-4 container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
        Agenda
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {agendaItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-contain bg-gray-200"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{item.date}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
