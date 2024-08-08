import React from "react";
import { useParams } from "react-router-dom";
import articleImage1 from "../assets/images/aida.jpeg";
import articleImage2 from "../assets/images/pinjol.jpeg";
// import other article images as needed

const ArticlePage = () => {
  const { id } = useParams();

  const articles = {
    1: {
      title:
        "Anak Sehat, Lansia Berdaya: Mahasiswa KKN Undip Melakukan Edukasi Terkait Konsumsi Gula, Garam, dan Lemak",
      author: "Aida Shofiyya Muyassari",
      date: "22 Juli 2024",
      image: articleImage1,
      content: (
        <>
          <p>
            Buntar, 22 Juli 2024 — Dalam rangka mengatasi dampak dari
            meningkatnya konsumsi makanan dan minuman kemasan, mahasiswa KKN
            Undip mengadakan program kerja monodisiplin mengenai edukasi
            pembatasan konsumsi Gula, Garam, dan Lemak (GGL). Program ini
            bertujuan untuk meningkatkan pemahaman ibu-ibu balita dan lansia
            tentang pentingnya membaca label informasi nilai gizi pada kemasan
            produk.
          </p>
          <p>
            Program kerja ini dilaksanakan bersamaan dengan kegiatan posyandu
            balita dan lansia di Dusun Jengglong, yang rutin dilaksanakan satu
            bulan sekali. Meningkatnya penjualan makanan dan minuman kemasan
            mengundang perhatian khusus karena tingginya kandungan gula, garam,
            dan lemak dalam produk-produk tersebut, yang bisa berdampak negatif
            pada kesehatan, terutama bagi anak-anak dan lansia.
          </p>
          <blockquote className="border-l-4 border-green-500 italic my-4 pl-4 text-gray-600">
            “Banyak makanan dan minuman kemasan yang kita konsumsi sehari-hari
            mengandung kadar gula, garam, dan lemak yang tinggi. Edukasi ini
            bertujuan untuk memberikan pemahaman yang lebih baik tentang
            bagaimana cara membatasi konsumsi GGL dengan cara yang sederhana,
            yaitu melalui pembacaan label informasi nilai gizi,” jelas Aida
            Shofiyya Muyassari, mahasiswa KKN selaku inisiator program kerja
            monodisiplin ini.
          </blockquote>
          <p>
            Selama sesi edukasi, peserta diberikan informasi mengenai batasan
            konsumsi gula, garam, dan lemak yang disarankan setiap hari serta
            dampak kesehatan dari konsumsi yang berlebihan. Mereka juga dilatih
            untuk membaca tabel informasi nilai gizi pada kemasan produk, yang
            mencakup cara mengidentifikasi jumlah gula, garam, dan lemak yang
            terdapat dalam produk makanan dan minuman.
          </p>
          <p>
            Program ini juga mencakup tips praktis untuk membatasi konsumsi GGL
            dalam kehidupan sehari-hari, serta saran untuk mengganti makanan
            tinggi gula, garam, dan lemak dengan alternatif yang lebih sehat.
            Mahasiswa KKN berharap bahwa pengetahuan yang dibagikan akan
            membantu masyarakat dalam membuat keputusan yang lebih baik terkait
            pola makan mereka, serta mengurangi risiko penyakit yang dapat
            timbul akibat konsumsi makanan tidak sehat.
          </p>
          <p>
            Inisiatif ini merupakan bagian dari komitmen mahasiswa KKN untuk
            berkontribusi secara positif terhadap kesehatan masyarakat di Desa
            Buntar. Dengan pengetahuan yang diperoleh dari edukasi ini,
            diharapkan masyarakat akan lebih sadar dan aktif dalam memilih
            makanan yang lebih sehat.
          </p>
        </>
      ),
    },
    2: {
      title:
        "No Debt, No Doubt: Edukasi dan Pendampingan Kredit Usaha Rakyat (KUR) dan Pinjaman Online Warga Desa Buntar",
      author: "Agfanesa Oktananda dan Aulia Herdiyan Tachtiar",
      date: "23 Juli 2024",
      image: articleImage2,
      content: (
        <>
          <p>
            Sayangnya, penggunaan keduanya sering disalahgunakan dalam
            praktiknya. Dilansir dari wawancara dengan Sekretaris Desa Buntar,
            Totok. Beliau mengatakan bahwa banyak Masyarakat di desa Buntar yang
            terlilit utang ketika pembayaran jatuh tempo. “Kredit Usaha Rakyat
            (KUR) di sini juga sering disalahgunakan warga untuk kebutuhan gaya
            hidup dan konsumtif, bukan untuk mengembangkan usahanya”. Tidak
            hanya itu, Totok juga menambahkan, bahwa sebenarnya masyarakat di
            desa Buntar belum memahami sepenuhnya penggunaan dari Kredit Usaha
            Rakyat (KUR) dan pinjaman online, sehingga tidak sedikit warga yang
            kebingungan dalam membayar cicilan jatuh tempo.
          </p>
          <p>
            Melihat maraknya kasus tersebut di Desa Buntar, mendorong mahasiswa
            KKN Tim II Universitas Diponegoro 2024 di Desa Buntar, Kecamatan
            Mojogedang, Kabupaten Karanganyar untuk memberikan edukasi mengenai
            bahaya Pinjaman Online dan Kredit Usaha Rakyat (KUR) melalui program
            kerja monodisiplin kolaborasi antara Agfanesa Oktananda, mahasiswa
            program studi Akuntansi, Fakultas Ekonomika dan Bisnis, Universitas
            Diponegoro, dengan judul No Debt, No Doubt: Edukasi dan pendampingan
            Kredit Usaha Rakyat (KUR) dan pinjaman online Warga Desa Buntar, dan
            Aulia Herdiyan Tachtiar, mahasiswa program studi Hukum, Fakultas
            Hukum, Universitas Diponegoro yang berjudul Lex Semper dabit
            Remedium: Galbay Pinjol, Edukasi dan pendampingan mengenai pinjaman
            online beserta akibat hukum yang timbul dari suatu pinjaman online.
            Program ini dilaksanakan di rumah Kepala Dusun Jengglong yang
            bertujuan untuk memberikan pendampingan secara komprehensif mengenai
            KUR dan Pinjol dari sisi ekonomi dan hukum bagi masyarakat desa
            Buntar dengan usia 18 tahun ke atas. Kegiatan ini dihadiri oleh
            Masyarakat umum dan kepala dusun Jengglong. Tidak hanya itu, bagi
            peserta yang hadir juga diberikan booklet berisi ringkasan pemaparan
            materi.
          </p>
          <p>
            Program kerja ini mendapatkan respon positif dan antusias yang
            tinggi dari para warga yang hadir. Oleh karena itu, diharapkan
            menjadi langkah preventif agar Masyarakat di desa Buntar tidak lagi
            terjerat cicilan Kredit Usaha Rakyat (KUR) maupun jeratan pinjaman
            online yang sangat merugikan masa depan mereka di kemudian hari.
            Selain itu bahwa, pendampingan dan edukasi tersebut ditujukan bahwa
            para peminjam menggunakan jasa pinjaman yang telah terdaftar di
            Otoritas Jasa Keuangan (OJK) sebagai tanda legalitas pinjaman
            online. Dengan demikian hal tersebut, bahwa pinjol digunakan untuk
            mengembangkan usaha
          </p>
          <p>
            <em>
              (Penulis: Agfanesa Oktananda dan Aulia Herdiyan Tachtiar/
              Mahasiswa KKN TIM II Universitas Diponegoro 2024)
            </em>
          </p>
        </>
      ),
    },
    // Add more articles here if needed
  };

  const article = articles[id];

  if (!article) {
    return <div>Artikel tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white rounded-lg shadow-lg mb-8">
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-t-lg opacity-75"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6 rounded-t-lg">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <img
                src="https://via.placeholder.com/50"
                alt={article.author}
                className="h-12 w-12 rounded-full"
              />
            </div>
            <div className="ml-4">
              <div className="text-xl font-medium">{article.author}</div>
              <div className="text-gray-300">{article.date}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="prose lg:prose-xl max-w-none">{article.content}</div>
      </div>
    </div>
  );
};

export default ArticlePage;
