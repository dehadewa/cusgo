// --- DATA TIM ---
export const teamData = [
  {
    nama: "Daviq Cahyo L.",
    nim: "24104410043",
    ttl: "Sidoarjo, 08 Maret 2006",
    alamat: "Centong, Sanankulon, Kab. Blitar",
    quote: '"Semangat, Berjuang & Sukses"',
    foto: "./assets/images/team/daviq.png" 
  },
  {
    nama: "Anisaturrohmah",
    nim: "24104410044",
    ttl: "Blitar, 20 Januari 2006",
    alamat: "Dimoro, Sukorejo, Kota Blitar",
    quote: '"Sembunyikan prosesmu, tunjukkan hasilmu"',
    foto: "./assets/images/team/anisa.png"
  },
  {
    nama: "Premas Aji Susilo",
    nim: "24104410055",
    ttl: "Blitar, 21 Desember 2004",
    alamat: "Ringinanom, Udanawu, Kab. Blitar",
    quote: '"Find beauty in simplicity."',
    foto: "./assets/images/team/premas.png"
  },
  {
    nama: "Firlian Firman Syah",
    nim: "24104410057",
    ttl: "Kediri, 5 Juli 2005",
    alamat: "Pakunden, Sukorejo, Kota Blitar",
    quote: '"Jangan berhenti bernafas"',
    foto: "./assets/images/team/firman.png"
  },
  {
    nama: "Putri Perwitasari",
    nim: "24104410080",
    ttl: "Blitar, 4 Maret 2006",
    alamat: "Modangan, Nglegok, Kab. Blitar",
    quote: '"Bergerak untuk bertumbuh, bertumbuh untuk berdampak"',
    foto: "./assets/images/team/putri.png"
  }
];

// --- DATA UNIT MOTOR ---
// --- DATA UNIT MOTOR ---
export const unitMotor = [
  { 
    id: "vario",
    nama: "Honda Vario 125", 
    kategori: "Matic Standar", 
    status: "Tersedia",
    harga: "Rp 80.000/hari", 
    img: "./assets/images/motor/vario.png",
    deskripsi: "Motor matic andalan dengan performa gesit, sangat cocok untuk keliling kota dengan nyaman dan irit bensin. Memiliki ruang pijakan kaki yang luas.",
    spesifikasi: { 
      cc: "125 cc", 
      bensin: "Injeksi (PGM-FI)",
      tangki: "5.5 Liter",
      bagasi: "18 Liter (Muat Helm)",
      tahun: "2023",
      warna: "Matte Black"
    },
    fitur_unggulan: [
      "Lampu Full LED",
      "USB Charger",
      "Idling Stop System (ISS)"
    ],
    rating: 4.8,
    total_disewa: 87,
    histori_perjalanan: ["Makam Bung Karno", "Candi Penataran", "Pusat Kota Blitar"]
  },
  { 
    id: "pcx", 
    nama: "Honda PCX 160", 
    kategori: "Matic Premium",
    status: "Tersedia",
    harga: "Rp 120.000/hari", 
    img: "./assets/images/motor/pcx.png",
    deskripsi: "Skutik premium dengan posisi berkendara super nyaman. Pilihan tepat untuk perjalanan jauh atau touring santai melintasi rute antar kota.",
    spesifikasi: { 
      cc: "160 cc", 
      bensin: "Injeksi (PGM-FI)",
      tangki: "8.1 Liter",
      bagasi: "30 Liter",
      tahun: "2024",
      warna: "Majestic Matte Red"
    },
    fitur_unggulan: [
      "Honda Smart Key System (Keyless)",
      "Rem ABS (Anti-lock Braking System)",
      "Digital Panel Meter"
    ],
    rating: 4.9,
    total_disewa: 52,
    histori_perjalanan: ["Pantai Tambakrejo", "Jalur Lintas Selatan (JLS)", "Malang - Blitar"]
  },
  { 
    id: "nmax", 
    nama: "Yamaha NMAX 155", 
    kategori: "Matic Premium",
    status: "Tersedia",
    harga: "Rp 130.000/hari", 
    img: "./assets/images/motor/nmax.png",
    deskripsi: "Raja jalanan untuk kenyamanan maksimal. Suspensinya empuk dan tarikan mesin VVA-nya sangat bertenaga di tanjakan.",
    spesifikasi: { 
      cc: "155 cc", 
      bensin: "Injeksi (Blue Core)",
      tangki: "7.1 Liter",
      bagasi: "23.3 Liter",
      tahun: "2023",
      warna: "Maxi Signature Black"
    },
    fitur_unggulan: [
      "Teknologi VVA (Variable Valve Actuation)",
      "Rem ABS Dual Channel",
      "Traction Control System"
    ],
    rating: 4.9,
    total_disewa: 64,
    histori_perjalanan: ["Gunung Kelud", "Pantai Pangi", "Tulungagung - Blitar"]
  },
  { 
    id: "beat", 
    nama: "Honda Beat", 
    kategori: "Matic Standar",
    status: "Tersedia",
    harga: "Rp 70.000/hari", 
    img: "./assets/images/motor/beat.png",
    deskripsi: "Lincah, ringan, dan sangat irit. Pilihan paling pas untuk menembus kemacetan atau sekadar jalan-jalan santai mencari kuliner.",
    spesifikasi: { 
      cc: "110 cc", 
      bensin: "Injeksi (PGM-FI)",
      tangki: "4.2 Liter",
      bagasi: "12 Liter",
      tahun: "2024",
      warna: "Deluxe Blue"
    },
    fitur_unggulan: [
      "Rangka eSAF (Ringan & Lincah)",
      "Power Charger",
      "Combi Brake System"
    ],
    rating: 4.7,
    total_disewa: 112,
    histori_perjalanan: ["Alun-Alun Blitar", "Kampung Coklat", "Blitar Park"]
  },
  { 
    id: "fazzio", 
    nama: "Yamaha Fazzio", 
    kategori: "Matic Klasik",
    status: "Tersedia",
    harga: "Rp 90.000/hari", 
    img: "./assets/images/motor/fazzio.png",
    deskripsi: "Tampil gaya dengan desain retro modern. Dilengkapi mesin hybrid yang membuatnya semakin ramah lingkungan dan hemat bahan bakar.",
    spesifikasi: { 
      cc: "125 cc", 
      bensin: "Hybrid (Blue Core)",
      tangki: "5.1 Liter",
      bagasi: "17.8 Liter",
      tahun: "2024",
      warna: "Cyan"
    },
    fitur_unggulan: [
      "Mesin Hybrid Power Assist",
      "Y-Connect (Koneksi Smartphone)",
      "Smart Key System"
    ],
    rating: 4.8,
    total_disewa: 43,
    histori_perjalanan: ["Istana Gebang", "Cafe-cafe Hits Blitar", "Kebon Rojo"]
  },
  { 
    id: "stylo", 
    nama: "Honda Stylo 160", 
    kategori: "Matic Klasik",
    status: "Tersedia",
    harga: "Rp 90.000/hari", 
    img: "./assets/images/motor/stylo.png",
    deskripsi: "Perpaduan sempurna antara desain fashionable klasik dengan tenaga mesin 160cc yang buas. Sangat *aesthetic* untuk difoto.",
    spesifikasi: { 
      cc: "160 cc", 
      bensin: "Injeksi (PGM-FI)",
      tangki: "5 Liter",
      bagasi: "16.5 Liter",
      tahun: "2024",
      warna: "Royal Green"
    },
    fitur_unggulan: [
      "Desain Retro Modern",
      "Mesin eSP+ 4 Katup",
      "Full Digital Panel Meter"
    ],
    rating: 4.9,
    total_disewa: 38,
    histori_perjalanan: ["Candi Penataran", "Pantai Serang", "Pusat Kota"]
  },
  { 
    id: "supra", 
    nama: "Honda Supra X 125", 
    kategori: "Bebek (Manual)",
    status: "Tersedia",
    harga: "Rp 70.000/hari", 
    img: "./assets/images/motor/supra.png",
    deskripsi: "Legenda irit yang tak lekang oleh waktu. Tangguh menaklukkan berbagai medan jalan dengan konsumsi bahan bakar yang sangat efisien.",
    spesifikasi: { 
      cc: "125 cc", 
      bensin: "Injeksi (PGM-FI)",
      tangki: "4 Liter",
      bagasi: "7 Liter",
      tahun: "2022",
      warna: "Energetic Red"
    },
    fitur_unggulan: [
      "Sistem Injeksi Super Irit",
      "Rem Cakram Ganda",
      "Mesin Tangguh Jangka Panjang"
    ],
    rating: 4.6,
    total_disewa: 67,
    histori_perjalanan: ["Wlingi", "Rute Pedesaan Blitar", "Pasar Legi"]
  },
  { 
    id: "crf", 
    nama: "Honda CRF 150L", 
    kategori: "Sport/Trail",
    status: "Tersedia",
    harga: "Rp 130.000/hari", 
    img: "./assets/images/motor/crf.png",
    deskripsi: "Siap diajak berpetualang ke alam bebas! Suspensi *upside down* dan ban paculnya membuat jalanan berlubang atau tanah berlumpur bukan masalah.",
    spesifikasi: { 
      cc: "150 cc", 
      bensin: "Injeksi (PGM-FI)",
      tangki: "7.2 Liter",
      bagasi: "Tidak Ada",
      tahun: "2023",
      warna: "Extreme Red"
    },
    fitur_unggulan: [
      "Suspensi Depan Inverted (Upside Down)",
      "Ban Dual Purpose",
      "Digital Panel Meter"
    ],
    rating: 4.8,
    total_disewa: 29,
    histori_perjalanan: ["Perkebunan Teh Sirah Kencong", "Jalur Lereng Kelud", "Hutan Pinus Loji"]
  },
  { 
    id: "cbr150r", 
    nama: "Honda CBR150R", 
    kategori: "Sport/Kopling",
    status: "Tersedia",
    harga: "Rp 150.000/hari", 
    img: "./assets/images/motor/cbr150r.png",
    deskripsi: "Motor sport dengan aura *racing* yang kental. Sangat stabil di kecepatan tinggi dan memiliki posisi riding yang agresif.",
    spesifikasi: { 
      cc: "150 cc", 
      bensin: "Injeksi (PGM-FI)",
      tangki: "12 Liter",
      bagasi: "Tidak Ada",
      tahun: "2023",
      warna: "Racing Red"
    },
    fitur_unggulan: [
      "Assist/Slipper Clutch",
      "Inverted Front Suspension",
      "Desain Aerodinamis"
    ],
    rating: 4.7,
    total_disewa: 21,
    histori_perjalanan: ["JLS (Jalur Lintas Selatan)", "Touring Antar Kota", "Blitar - Kediri"]
  },
  { 
    id: "mio", 
    nama: "Yamaha Mio M3", 
    kategori: "Matic Standar",
    status: "Tersedia",
    harga: "Rp 90.000/hari", 
    img: "./assets/images/motor/mio.png",
    deskripsi: "Pilihan kompak dan praktis untuk mobilitas harian. Tarikannya responsif dan sangat mudah dikendalikan di gang-gang sempit.",
    spesifikasi: { 
      cc: "125 cc", 
      bensin: "Injeksi (Blue Core)",
      tangki: "4.2 Liter",
      bagasi: "10.1 Liter",
      tahun: "2023",
      warna: "Metallic Yellow"
    },
    fitur_unggulan: [
      "Eco Indicator",
      "Smart Lock System",
      "Mesin Blue Core 125cc"
    ],
    rating: 4.5,
    total_disewa: 94,
    histori_perjalanan: ["Stasiun Blitar", "Alun-Alun", "Pusat Oleh-oleh"]
  }
];

// --- DATA STATISTIK ---
export const statsData = [
  { title: "50+", desc: "Unit Tersedia" },
  { title: "1.2k+", desc: "Pelanggan Puas" },
  { title: "24/7", desc: "Layanan Darurat" },
  { title: "100%", desc: "Kondisi Prima" }
];

// --- DATA FITUR ---
export const featureData = [
  { icon: "🏍️", title: "Unit Selalu Baru", desc: "Semua armada kami rutin diservis secara berkala di bengkel resmi untuk menjamin keamanan Anda." },
  { icon: "🏷️", title: "Harga Kompetitif", desc: "Sistem harga transparan tanpa biaya tambahan tersembunyi. Sewa lebih lama, harga lebih murah." },
  { icon: "🛠️", title: "Bantuan Darurat", desc: "Terjadi kendala di jalan? Tim teknis kami siap meluncur ke lokasi Anda kapan saja diperlukan." }
];

// --- DATA LANGKAH/WORKFLOW ---
export const stepsData = [
  { num: "01", title: "Pilih Unit", desc: "Buka katalog armada dan pilih motor yang sesuai dengan gaya perjalananmu." },
  { num: "02", title: "Isi Formulir", desc: "Lengkapi data diri dan tentukan durasi sewa melalui formulir online kami." },
  { num: "03", title: "Mulai Berkendara", desc: "Ambil kunci di pool kami atau minta layanan antar jemput unit ke lokasimu." }
];

// --- DATA TESTIMONI ---
export const testimonialData = [
  { text: "Pelayanannya sangat cepat, motornya bersih dan mesinnya halus. Sangat membantu saat liburan di Blitar!", name: "Rian, Wisatawan" },
  { text: "Harga paling masuk akal untuk mahasiswa. Unit PCX-nya benar-benar seperti baru keluar dari dealer.", name: "Sarah, Mahasiswa" }
];

// --- DATA FOOTER ---
export const footerData = [
  { name: "Armada", link: "unit.html" },
  { name: "Kontak", link: "contact.html" },
  { name: "Syarat & Ketentuan", link: "agreement.html" }
];

// --- DATA BOOKING ---
export const bookingMotorPrices = {
  'honda-vario': 80000,
  'honda-pcx': 120000,
  'yamaha-nmax': 130000,
  'honda-beat': 70000,
  'yamaha-fazzio': 90000,
  'honda-stylo': 90000,
  'honda-supra': 70000,
  'honda-crf': 130000,
  'honda-cbr150r': 150000,
  'yamaha-mio': 90000
};

export const bookingMotorNames = {
  'honda-vario': 'Honda Vario',
  'honda-pcx': 'Honda PCX',
  'yamaha-nmax': 'Yamaha NMAX',
  'honda-beat': 'Honda Beat',
  'yamaha-fazzio': 'Yamaha Fazzio',
  'honda-stylo': 'Honda Stylo',
  'honda-supra': 'Honda Supra',
  'honda-crf': 'Honda CRF',
  'honda-cbr150r': 'Honda CBR150R',
  'yamaha-mio': 'Yamaha MIO ALL New'
};

export const paymentMethods = {
  'transfer-bank': '🏦 Transfer Bank',
  'kartu-kredit': '💳 Kartu Kredit',
  'e-wallet': '📱 E-Wallet',
  'tunai': '💰 Tunai di Tempat'
};