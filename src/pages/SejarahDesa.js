import React from "react";
import sejarahImage from "../assets/images/buntar.jpg";

const SejarahDesa = () => {
  return (
    <div className="p-20">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Sejarah Desa Buntar
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src={sejarahImage}
          alt="Sejarah Desa Buntar"
          className="w-full h-auto object-cover mb-4 rounded-lg"
        />
        <p className="mb-4">
          Desa Buntar terletak di Kecamatan Mojogedang, Kabupaten Karanganyar,
          Jawa Tengah. Desa ini memiliki sejarah yang kaya dan panjang, yang
          berawal dari zaman kerajaan di Indonesia. Pada zaman dahulu, Desa
          Buntar merupakan bagian dari wilayah kekuasaan Kerajaan Mataram. Desa
          ini dikenal sebagai daerah yang subur dan kaya akan sumber daya alam,
          sehingga menarik perhatian para pendatang dan penguasa. Seiring
          berjalannya waktu, Desa Buntar berkembang menjadi pusat perdagangan
          dan kerajinan tangan. Masyarakat desa terkenal dengan keahlian mereka
          dalam membuat anyaman dan kerajinan tangan lainnya yang hingga kini
          masih dilestarikan. Selain itu, Desa Buntar juga memiliki beberapa
          situs sejarah yang menjadi bukti perjalanan panjang desa ini. Salah
          satu situs yang terkenal adalah Candi Buntar, yang dipercaya dibangun
          pada abad ke-9 dan menjadi tempat ibadah masyarakat setempat. Hingga
          saat ini, Desa Buntar terus berkembang dan melestarikan warisan budaya
          serta tradisinya. Setiap tahunnya, desa ini mengadakan berbagai
          festival dan acara budaya yang menarik banyak wisatawan dari berbagai
          daerah. Dengan keindahan alamnya yang luar biasa dan masyarakatnya
          yang hangat, Desa Buntar menjadi destinasi yang sempurna untuk
          melepaskan diri dari hiruk-pikuk kehidupan kota dan menikmati
          ketenangan alam serta kekayaan budaya yang dimiliki.
        </p>
      </div>
    </div>
  );
};

export default SejarahDesa;
