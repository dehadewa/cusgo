/* ==========================================
   1. IMPORT DATABASE LOKAL
   ========================================== */
import { teamData, unitMotor, statsData, featureData, stepsData, testimonialData, bookingMotorPrices, bookingMotorNames, paymentMethods } from '../data/dummyData.js';

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================
     2. RENDER HEADER (NAVBAR BOOTSTRAP)
     ========================================== */
  const headerHTML = `
    <nav class="navbar navbar-expand-lg navbar-cusgo sticky-top fade-in">
      <div class="container">
        <a class="navbar-brand logo-text" href="index.html">Cusgo<span>.</span></a>
        
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav gap-2 gap-lg-4 text-center mt-3 mt-lg-0 pb-3 pb-lg-0">
            <li class="nav-item"><a class="nav-link nav-link-custom" href="index.html">Beranda</a></li>
            <li class="nav-item"><a class="nav-link nav-link-custom" href="unit.html">Unit</a></li>
            <li class="nav-item"><a class="nav-link nav-link-custom" href="destinasi.html">Destinasi</a></li>
            <li class="nav-item"><a class="nav-link nav-link-custom" href="booking.html">Pemesanan</a></li>
            <li class="nav-item"><a class="nav-link nav-link-custom" href="about.html">Tentang</a></li>
            <li class="nav-item"><a class="nav-link nav-link-custom" href="agreement.html">Perjanjian</a></li>
            <li class="nav-item"><a class="nav-link nav-link-custom" href="contact.html">Kontak</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  /* ==========================================
     3. RENDER FOOTER BOOTSTRAP
     ========================================== */
  const footerHTML = `
    <footer class="bg-white border-top mt-5 pt-5 pb-4">
      <div class="container">
        <div class="row gy-4 align-items-center mb-4 text-center text-md-start">
          <div class="col-md-6">
            <h2 class="fw-bold mb-1 logo-text fs-3">Cusgo<span>.</span></h2>
            <p class="text-secondary mb-0">Partner perjalanan terbaik Anda di Kota Blitar.</p>
          </div>
          <div class="col-md-6 d-flex flex-wrap justify-content-center justify-content-md-end gap-3 gap-md-4">
            <a href="unit.html" class="text-decoration-none text-secondary fw-medium">Armada</a>
            <a href="destinasi.html" class="text-decoration-none text-secondary fw-medium">Destinasi</a>
            <a href="booking.html" class="text-decoration-none text-secondary fw-medium">Pemesanan</a>
            <a href="contact.html" class="text-decoration-none text-secondary fw-medium">Kontak</a>
          </div>
        </div>
        <div class="text-center pt-4 border-top">
          <p class="fs-6 fw-semibold mb-1">"Life is a journey, enjoy the ride with Cusgo."</p>
          <span class="text-secondary small text-uppercase tracking-wider">— Cusgo Team 2026</span>
        </div>
      </div>
    </footer>
  `;

  const headerContainer = document.getElementById("header-container");
  const footerContainer = document.getElementById("footer-container");

  if (headerContainer) headerContainer.outerHTML = headerHTML;
  if (footerContainer) footerContainer.outerHTML = footerHTML;

  /* ==========================================
     4. SET MENU ACTIVE SECARA DINAMIS
     ========================================== */
  const currentLocation = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link-custom");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
    }
  });

  /* ==========================================
     5. RENDER DATA ANGGOTA TIM (KHUSUS about.html)
     ========================================== */
  const teamContainer = document.getElementById("team-container");
  if (teamContainer) {
    let teamCardsHTML = "";
    teamData.forEach(member => {
      teamCardsHTML += `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card card-hover h-100 text-center border-0 p-4">
            <div class="d-flex justify-content-center">
              <img src="${member.foto}" class="about-img mb-3" alt="${member.nama}" />
            </div>
            <h4 class="fw-bold mb-1 text-dark fs-5">${member.nama}</h4>
            <div class="mb-3">
              <span class="badge bg-light text-primary border rounded-pill px-3 py-2">${member.nim}</span>
            </div>
            <p class="text-secondary small mb-1 fw-medium">${member.ttl}</p>
            <p class="text-secondary small mb-3 opacity-75">${member.alamat}</p>
            <div class="mt-auto bg-light p-3 rounded">
              <p class="fst-italic text-dark small mb-0 fw-medium">${member.quote}</p>
            </div>
          </div>
        </div>
      `;
    });
    teamContainer.innerHTML = teamCardsHTML;
  }

  /* ==========================================
     6. RENDER DATA UNIT MOTOR (KHUSUS unit.html)
     ========================================== */
  const unitContainer = document.getElementById("unit-container");
  if (unitContainer) {
    let unitCardsHTML = "";
    unitMotor.forEach(unit => {
      unitCardsHTML += `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
          <div class="card card-hover h-100 border-0 p-3 text-center">
            <img src="${unit.img}" class="card-img-top unit-img" alt="${unit.nama}">
            <div class="card-body d-flex flex-column p-0 mt-3">
              <h5 class="card-title fw-bold text-dark mb-1 fs-5">${unit.nama}</h5>
              <p class="card-text text-secondary fw-semibold mb-4">${unit.harga}</p>
              <div class="mt-auto d-flex gap-2">
                <a href="detail-unit.html?id=${unit.id}" class="btn btn-outline-secondary w-100 py-2 rounded-3 fw-bold border-2">Detail</a>
                <a href="booking.html" class="btn btn-action w-100 py-2 rounded-3">Sewa</a>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    unitContainer.innerHTML = unitCardsHTML;
  }

  /* ==========================================
     7. RENDER DATA BERANDA (KHUSUS index.html)
     ========================================== */
  const stats = document.getElementById("stats");
  if (stats) {
    let statsHTML = "";
    statsData.forEach(i => {
      statsHTML += `
        <div class="col-6 col-md-3 text-center text-white mb-4 mb-md-0">
          <h3 class="fs-1 fw-bold" style="color: var(--accent-color);">${i.title}</h3>
          <p class="fs-6">${i.desc}</p>
        </div>
      `;
    });
    stats.innerHTML = statsHTML;
  }

  const features = document.getElementById("features");
  if (features) {
    let featuresHTML = "";
    featureData.forEach(i => {
      featuresHTML += `
        <div class="col-12 col-md-4 mb-4">
          <div class="card card-hover h-100 border-0 p-4 text-center">
            <div class="fs-1 mb-3">${i.icon}</div>
            <h3 class="fs-5 fw-bold text-dark mb-3">${i.title}</h3>
            <p class="text-secondary mb-0 fs-6">${i.desc}</p>
          </div>
        </div>
      `;
    });
    features.innerHTML = featuresHTML;
  }

  const steps = document.getElementById("steps");
  if (steps) {
    let stepsHTML = "";
    stepsData.forEach(i => {
      stepsHTML += `
        <div class="col-12 col-md-4 text-center mb-5 mb-md-0 position-relative">
          <div class="fs-1 fw-bold position-absolute start-50 translate-middle-x" style="top: -20px; z-index: 0; color: rgba(15, 23, 42, 0.05);">${i.num}</div>
          <div class="position-relative" style="z-index: 1;">
            <h3 class="fs-5 fw-bold text-dark mb-2 mt-4">${i.title}</h3>
            <p class="text-secondary fs-6">${i.desc}</p>
          </div>
        </div>
      `;
    });
    steps.innerHTML = stepsHTML;
  }

  const test = document.getElementById("testimonials");
  if (test) {
    let testHTML = "";
    testimonialData.forEach(i => {
      testHTML += `
        <div class="col-12 col-md-4 mb-4">
          <div class="card card-hover h-100 border-0 p-4">
            <div class="card-body p-0 d-flex flex-column text-center text-md-start">
              <p class="fst-italic text-secondary mb-4 flex-grow-1">"${i.text}"</p>
              <strong class="fw-bold" style="color: var(--accent-color);">- ${i.name}</strong>
            </div>
          </div>
        </div>
      `;
    });
    test.innerHTML = testHTML;
  }

  /* ==========================================
     8. LOGIKA FORM KONTAK (NOTIFIKASI TOAST MODERN)
     ========================================== */
  const contactForm = document.getElementById("contactForm");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); 
      
      let toastContainer = document.getElementById('toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container position-fixed top-0 end-0 p-4';
        toastContainer.style.zIndex = '1055';
        document.body.appendChild(toastContainer);
      }

      toastContainer.innerHTML = `
        <div id="contactToast" class="toast align-items-center text-bg-success border-0 shadow" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="toast-body fs-10 fw-medium px-3 py-3">
              ✨ Terima kasih telah menghubungi kami! Pesan Anda segera kami balas.
            </div>
            <button type="button" class="btn-close btn-close-white me-3 m-auto" data-bs-dismiss="toast" aria-label="Tutup"></button>
          </div>
        </div>
      `;
      
      // Jika Bootstrap ESM tidak dipanggil di script ini, pastikan bootstrap.bundle.min.js ter-load di HTML
      if (typeof bootstrap !== 'undefined') {
        const toastElement = document.getElementById('contactToast');
        const toast = new bootstrap.Toast(toastElement, {
          delay: 4000
        });
        toast.show();
      } else {
        alert("Terima kasih telah menghubungi kami! Pesan Anda segera kami balas."); // Fallback aman
      }
      
      contactForm.reset(); 
    });
  }
});

// ===================================
// STEP-BY-STEP BOOKING FORM HANDLER
// ===================================

// Alias untuk kemudahan penggunaan
const motorPrices = bookingMotorPrices;
const motorNames = bookingMotorNames;
const paymentMethodLabels = paymentMethods;

let currentStep = 1;
const totalSteps = 3;

// Initialize booking form
document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const submitBtn = document.getElementById('submitBtn');

  // Next button handler
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (validateCurrentStep()) {
        if (currentStep === 2) {
          updateReview();
        }
        
        if (currentStep < totalSteps) {
          currentStep++;
          updateSteps();
        }
      }
    });
  }

  // Previous button handler
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentStep > 1) {
        currentStep--;
        updateSteps();
      }
    });
  }

  // Form submit handler
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (validateCurrentStep()) {
        // Get selected payment method
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        if (!paymentMethod) {
          alert('⚠️ Pilih metode pembayaran terlebih dahulu!');
          return;
        }

        // Simulasi pengiriman data
        const formData = {
          nama: document.getElementById('nama').value,
          email: document.getElementById('email').value,
          noTelepon: document.getElementById('noTelepon').value,
          alamat: document.getElementById('alamat').value,
          tanggalSewa: document.getElementById('tanggalSewa').value,
          durasiSewa: document.getElementById('durasiSewa').value,
          tipeMotoR: document.getElementById('tipeMotoR').value,
          keperluan: document.getElementById('keperluan').value,
          metodePembayaran: paymentMethod.value,
          setujuKetentuan: document.getElementById('setujuKetentuan').checked
        };

        console.log('Data Pemesanan:', formData);
        
        // Tampilkan alert sukses
        alert('✅ Pemesanan berhasil dikirim!\n\nTim kami akan menghubungi Anda dalam 1x24 jam.');
        
        // Reset form
        bookingForm.reset();
        currentStep = 1;
        updateSteps();
      }
    });
  }

  // Update steps on page load
  updateSteps();
});

// Validate current step
function validateCurrentStep() {
  const form = document.getElementById('bookingForm');
  const currentStepContent = document.querySelector(`.step-content[step="${currentStep}"]`);
  
  if (!currentStepContent) return false;

  // Get all required fields in current step
  const requiredFields = currentStepContent.querySelectorAll('[required]');
  
  let isValid = true;
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      field.classList.add('is-invalid');
      isValid = false;
    } else {
      field.classList.remove('is-invalid');
    }
  });

  // Validate email format if email field exists in current step
  const emailField = currentStepContent.querySelector('#email');
  if (emailField && emailField.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      emailField.classList.add('is-invalid');
      isValid = false;
    }
  }

  // Validate payment method selection on step 3
  if (currentStep === 3) {
    const paymentMethodChecked = document.querySelector('input[name="paymentMethod"]:checked');
    const setujuKetentuan = document.getElementById('setujuKetentuan').checked;
    
    if (!paymentMethodChecked) {
      alert('⚠️ Pilih metode pembayaran terlebih dahulu!');
      isValid = false;
    }
    
    if (!setujuKetentuan) {
      alert('⚠️ Anda harus menyetujui syarat dan ketentuan!');
      isValid = false;
    }
  }

  return isValid;
}

// Update step display
function updateSteps() {
  // Update step indicators
  document.querySelectorAll('.step-indicator').forEach((indicator) => {
    const step = parseInt(indicator.getAttribute('step'));
    indicator.classList.remove('active', 'completed');
    
    if (step === currentStep) {
      indicator.classList.add('active');
    } else if (step < currentStep) {
      indicator.classList.add('completed');
    }
  });

  // Update step content
  document.querySelectorAll('.step-content').forEach((content) => {
    const step = parseInt(content.getAttribute('step'));
    if (step === currentStep) {
      content.style.display = 'block';
      content.classList.add('active');
    } else {
      content.style.display = 'none';
      content.classList.remove('active');
    }
  });

  // Update button visibility
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');

  if (currentStep === 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    submitBtn.style.display = 'none';
  } else if (currentStep === totalSteps) {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    submitBtn.style.display = 'none';
  }
}

// Update review data
function updateReview() {
  // Data Penyewa
  document.getElementById('review-nama').textContent = document.getElementById('nama').value || '-';
  document.getElementById('review-email').textContent = document.getElementById('email').value || '-';
  document.getElementById('review-telepon').textContent = document.getElementById('noTelepon').value || '-';
  document.getElementById('review-alamat').textContent = document.getElementById('alamat').value || '-';

  // Data Penyewaan
  const tanggal = document.getElementById('tanggalSewa').value;
  const tanggalFormatted = tanggal ? new Date(tanggal).toLocaleDateString('id-ID', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }) : '-';
  document.getElementById('review-tanggal').textContent = tanggalFormatted;

  const durasi = document.getElementById('durasiSewa').value;
  document.getElementById('review-durasi').textContent = durasi ? `${durasi} hari` : '-';

  const motorValue = document.getElementById('tipeMotoR').value;
  const motorName = motorNames[motorValue] || '-';
  document.getElementById('review-motor').textContent = motorName;

  // Calculate total
  if (motorValue && durasi) {
    const hargaPerHari = motorPrices[motorValue];
    const total = hargaPerHari * durasi;
    const dp = Math.round(total * 0.2);
    document.getElementById('review-total').textContent = `Rp ${total.toLocaleString('id-ID')} (DP: Rp ${dp.toLocaleString('id-ID')})`;
  } else {
    document.getElementById('review-total').textContent = 'Rp 0';
  }
}

// Remove invalid class on input change
document.addEventListener('change', (e) => {
  if (e.target.classList.contains('form-control') || e.target.classList.contains('form-select')) {
    e.target.classList.remove('is-invalid');
  }
});

document.addEventListener('input', (e) => {
  if (e.target.classList.contains('form-control') || e.target.classList.contains('form-select')) {
    e.target.classList.remove('is-invalid');
  }
});

  /* ==========================================
     9. LOGIKA HALAMAN DETAIL UNIT DINAMIS
     ========================================== */
  const detailContainer = document.getElementById("detail-unit-container");
  
  if (detailContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const motorId = urlParams.get('id');

    const motorDetail = unitMotor.find(motor => motor.id === motorId);

    if (motorDetail) {
      // 1. Mapping fitur unggulan menjadi list HTML dengan ikon checkmark modern
      const fiturHTML = motorDetail.fitur_unggulan.map(fitur => 
        `<li class="mb-2 d-flex align-items-center text-secondary">
          <span class="me-2 d-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-circle" style="width: 24px; height: 24px; font-size: 12px;">✓</span> 
          ${fitur}
        </li>`
      ).join('');

      // 2. Mapping histori perjalanan menjadi tag/badge melengkung
      const historiHTML = motorDetail.histori_perjalanan.map(rute => 
        `<span class="badge bg-light text-secondary border px-3 py-2 rounded-pill fw-medium">${rute}</span>`
      ).join('');

      // 3. Cetak HTML dengan gaya UI Premium (Minimalist & Clean)
      detailContainer.innerHTML = `
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
          <div class="row g-0 align-items-stretch">
            <!-- Sisi Kiri: Galeri / Gambar Motor -->
            <div class="col-lg-5 p-5 text-center bg-light d-flex flex-column justify-content-center position-relative">
              <img src="${motorDetail.img}" alt="${motorDetail.nama}" class="img-fluid position-relative" style="max-height: 380px; object-fit: contain; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.15)); z-index: 1;">
            </div>
            
            <!-- Sisi Kanan: Informasi Detail -->
            <div class="col-lg-7 p-4 p-md-5">
              <!-- Label Header -->
              <div class="d-flex flex-wrap gap-2 mb-4">
                <span class="badge bg-dark text-white px-3 py-2 rounded-pill fw-medium">${motorDetail.kategori}</span>
                <span class="badge ${motorDetail.status === 'Tersedia' ? 'bg-success text-success border-success' : 'bg-danger text-danger border-danger'} bg-opacity-10 border border-opacity-25 px-3 py-2 rounded-pill fw-medium">
                  • ${motorDetail.status}
                </span>
                <span class="badge bg-warning bg-opacity-10 text-dark border border-warning border-opacity-25 px-3 py-2 rounded-pill fw-medium">
                  ⭐ ${motorDetail.rating} (${motorDetail.total_disewa} Trip)
                </span>
              </div>

              <!-- Judul & Harga -->
              <h2 class="fw-bolder text-dark mb-1" style="font-size: 2.2rem; letter-spacing: -1px;">${motorDetail.nama}</h2>
              <h3 class="fw-bold mb-4" style="color: var(--accent-color); font-size: 1.6rem;">${motorDetail.harga}</h3>
              
              <!-- Deskripsi Singkat -->
              <p class="text-secondary lh-lg mb-5">${motorDetail.deskripsi}</p>
              
              <!-- Grid Spesifikasi Teknis -->
              <h6 class="fw-bold text-dark mb-3 text-uppercase fs-7" style="letter-spacing: 1px;">Spesifikasi Teknis</h6>
              <div class="row g-3 mb-5 pb-4 border-bottom">
                <div class="col-6 col-sm-4">
                  <span class="d-block text-secondary small mb-1">Kapasitas Mesin</span>
                  <strong class="text-dark">${motorDetail.spesifikasi.cc}</strong>
                </div>
                <div class="col-6 col-sm-4">
                  <span class="d-block text-secondary small mb-1">Kapasitas Tangki</span>
                  <strong class="text-dark">${motorDetail.spesifikasi.tangki}</strong>
                </div>
                <div class="col-6 col-sm-4">
                  <span class="d-block text-secondary small mb-1">Ruang Bagasi</span>
                  <strong class="text-dark">${motorDetail.spesifikasi.bagasi}</strong>
                </div>
                <div class="col-6 col-sm-4">
                  <span class="d-block text-secondary small mb-1">Bahan Bakar</span>
                  <strong class="text-dark">${motorDetail.spesifikasi.bensin}</strong>
                </div>
                <div class="col-6 col-sm-4">
                  <span class="d-block text-secondary small mb-1">Tahun Rilis</span>
                  <strong class="text-dark">${motorDetail.spesifikasi.tahun}</strong>
                </div>
                <div class="col-6 col-sm-4">
                  <span class="d-block text-secondary small mb-1">Varian Warna</span>
                  <strong class="text-dark">${motorDetail.spesifikasi.warna}</strong>
                </div>
              </div>

              <!-- Fitur Utama & Histori -->
              <div class="row g-4 mb-5">
                <div class="col-md-6">
                  <h6 class="fw-bold text-dark mb-3">Fitur Kendaraan</h6>
                  <ul class="list-unstyled mb-0">
                    ${fiturHTML}
                  </ul>
                </div>
                <div class="col-md-6">
                  <h6 class="fw-bold text-dark mb-3">Histori Rute Populer</h6>
                  <div class="d-flex flex-wrap gap-2">
                    ${historiHTML}
                  </div>
                </div>
              </div>

              <!-- Tombol Pesan (Pill Button) -->
              <a href="booking.html?id=${motorDetail.id}" class="btn btn-action w-100 py-3 rounded-pill shadow-sm text-center fw-bold fs-6">Lanjutkan Pemesanan</a>
            </div>
          </div>
        </div>
      `;
    } else {
      detailContainer.innerHTML = `
        <div class="text-center py-5">
          <div class="display-1 text-muted mb-3">🔍</div>
          <h2 class="fw-bold text-dark">Kendaraan Tidak Ditemukan</h2>
          <p class="text-secondary mb-4">Maaf, armada yang Anda cari mungkin sedang tidak tersedia atau tautan tidak valid.</p>
          <a href="unit.html" class="btn btn-action px-4 py-2 rounded-pill">Lihat Daftar Armada</a>
        </div>
      `;
    }
  }


});
