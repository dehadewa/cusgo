const unitMotor = [
{nama: "Honda Vario",harga:"Rp 80.000/hari",img:"img/vario.png"},
{nama: "Honda PCX",harga:"Rp 120.000/hari",img:"img/pcx.png"},
{nama: "Yamaha NMAX",harga:"Rp 130.000/hari",img:"img/nmax.png"},
{nama: "Honda Beat",harga:"Rp 70.000/hari",img:"img/beat.png"},
{nama: "Yamaha Fazzio",harga:"Rp 90.000/hari",img:"img/fazzio.png"},
{nama: "Honda Stylo",harga:"Rp 90.000/hari",img:"img/stylo.png"},
{nama: "Honda Supra",harga:"Rp 70.000/hari",img:"img/supra.png"},
{nama: "Honda CRF",harga:"Rp 130.000/hari",img:"img/crf.png"},
{nama: "Honda CBR150R",harga:"Rp 150.000/hari",img:"img/cbr150r.png"},
{nama: "Yamaha MIO ALL New",harga:"Rp 90.000/hari",img:"img/mio.png"},
];

// fungsi menampilkan unit ke html
function tampilkanunit(){
    const container = document.querySelector(".card-grid");

    container.innerHTML = "";

    unitMotor.forEach(unit => {
        const card = 
        `<div class="card unit-card"
        <img src="${unit.img}" alt="${unit.nama}">
        <h3>${unit.nama}</h3>
        <p>${unit.harga}</p>
        <button class="btn-action">Sewa Sekarang</button>
        `;
        container.innerHTML += card;
    });
};
document.addEventListener("DOMcontentloaded", tampilkanunit);