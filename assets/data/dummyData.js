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
export const unitMotor = [
  { nama: "Honda Vario", harga: "Rp 80.000/hari", img: "./assets/images/motor/vario.png" },
  { nama: "Honda PCX", harga: "Rp 120.000/hari", img: "./assets/images/motor/pcx.png" },
  { nama: "Yamaha NMAX", harga: "Rp 130.000/hari", img: "./assets/images/motor/nmax.png" },
  { nama: "Honda Beat", harga: "Rp 70.000/hari", img: "./assets/images/motor/beat.png" },
  { nama: "Yamaha Fazzio", harga: "Rp 90.000/hari", img: "./assets/images/motor/fazzio.png" },
  { nama: "Honda Stylo", harga: "Rp 90.000/hari", img: "./assets/images/motor/stylo.png" },
  { nama: "Honda Supra", harga: "Rp 70.000/hari", img: "./assets/images/motor/supra.png" },
  { nama: "Honda CRF", harga: "Rp 130.000/hari", img: "./assets/images/motor/crf.png" },
  { nama: "Honda CBR150R", harga: "Rp 150.000/hari", img: "./assets/images/motor/cbr150r.png" },
  { nama: "Yamaha MIO ALL New", harga: "Rp 90.000/hari", img: "./assets/images/motor/mio.png" },
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