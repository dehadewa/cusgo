/* 1. Panggil komponen Bootstrap dari node_modules */
import * as bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.esm.min.js';

/* 2. Custom JS kamu di bawah sini */
console.log("Bootstrap berhasil dimuat di background!");

// Contoh custom JS: memunculkan alert saat tombol diklik
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-sapa');
    if(btn) {
        btn.addEventListener('click', () => {
            alert('Halo! Custom JS berjalan dengan baik.');
        });
    }
});