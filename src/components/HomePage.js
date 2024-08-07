import React from "react";
import { Element } from "react-scroll";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpeg";
import image6 from "../assets/images/image6.jpeg";

const HomePage = () => {
  return (
    <div className="bg-gray-100 pt-20">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen relative"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1664117187580-c48528437e04?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">
              Selamat Datang Di Desa Buntar
            </h1>
            <p className="text-xl mb-6">Temukan keindahan di desa kami</p>
            <a
              href="#tentang-desa"
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition duration-300"
            >
              Jelajahi Lebih Lanjut
            </a>
          </div>
        </div>
      </section>

      {/* Tentang Desa Section */}
      <Element name="tentang-desa">
        <section id="tentang-desa" className="container mx-auto py-16 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
              Tentang Desa
            </h2>
            <p>
              Desa Buntar terletak di Kec. Mojogedang, Kabupaten Karanganyar,
              Jawa Tengah. Desa ini dikenal dengan pemandangannya yang indah dan
              suasana alam yang menenangkan. Masyarakat desa Buntar sangat ramah
              dan menyambut baik para pengunjung yang datang untuk menikmati
              keindahan alam dan budaya yang kaya. Desa ini memiliki warisan
              budaya yang kaya, dengan tradisi dan situs sejarah yang terjaga
              dengan baik. Setiap tahunnya, desa Buntar mengadakan berbagai
              festival dan acara budaya yang menarik banyak wisatawan. Produk
              kerajinan lokal seperti anyaman dan kerajinan tangan lainnya juga
              menjadi daya tarik tersendiri bagi para pengunjung. Desa Buntar
              juga menawarkan berbagai kegiatan luar ruangan seperti hiking,
              bersepeda, dan petualangan lainnya yang dapat dinikmati oleh semua
              kalangan. Dengan keindahan alamnya yang luar biasa dan
              masyarakatnya yang hangat, Desa Buntar menjadi destinasi yang
              sempurna untuk melepaskan diri dari hiruk-pikuk kehidupan kota dan
              menikmati ketenangan alam.
            </p>
          </div>
        </section>
      </Element>

      {/* Galeri / Foto-foto Section */}
      <Element name="galeri">
        <section id="galeri" className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Galeri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                className="relative w-full h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image1})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  Kegiatan Volly Pordes
                </div>
              </div>
              <div
                className="relative w-full h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image2})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  Kerajinan Totebag Ecoprint
                </div>
              </div>
              <div
                className="relative w-full h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image3})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  Kegiatan Posyandu Di Dusun Jengglong
                </div>
              </div>
              <div
                className="relative w-full h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image4})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  Pembukaan Pekan Olahraga Desa
                </div>
              </div>
              <div
                className="relative w-full h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image5})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  Senam Bersama Mahasiswa KKN
                </div>
              </div>
              <div
                className="relative w-full h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image6})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  UMKM Jagung Marning & Kripik Singkong
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Contact Section */}
      <Element name="kontak">
        <section id="kontak" className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
            Kontak informasi
          </h2>
          <div className="flex flex-col items-center">
            <p className="mb-2">
              Untuk informasi lebih lanjut, silakan hubungi kami:
            </p>
            <p className="mb-2">
              Email:{" "}
              <a
                href="mailto:desabuntarr@gmail.com"
                className="text-green-600 hover:underline"
              >
                desabuntarr@gmail.com
              </a>
            </p>
            <p className="mb-2">
              Telepon:{" "}
              <a
                href="tel:+1234567890"
                className="text-green-600 hover:underline"
              >
                -
              </a>
            </p>
            <p>
              Alamat: Buntar, Kec. Mojogedang, Kabupaten Karanganyar, Jawa
              Tengah 57752, Indonesia
            </p>
          </div>
        </section>
      </Element>
    </div>
  );
};

export default HomePage;
