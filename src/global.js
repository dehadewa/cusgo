// Import data dari file dummyData.js (Pastikan import dua-duanya)
import { teamData, unitMotor, statsData, featureData, stepsData, testimonialData } from './dummyData.js';

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. RENDER HEADER & FOOTER
  // ==========================================
  const headerHTML = `
    <header class="navbar">
      <div class="logo">
        <a href="index.html">Cusgo<span>.</span></a>
      </div>
      
      <!-- Tombol Hamburger -->
      <div class="menu-toggle" id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <nav class="nav-links" id="nav-links">
        <ul>
          <li><a href="index.html">Beranda</a></li>
          <li><a href="unit.html">Unit</a></li>
          <li><a href="about.html">Tentang</a></li>
          <li><a href="agreement.html">Perjanjian</a></li>
          <li><a href="contact.html">Kontak</a></li>
        </ul>
      </nav>
    </header>
  `;

  const footerHTML = `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <h2>Cusgo<span>.</span></h2>
          <p>Partner perjalanan terbaik Anda di Kota Blitar.</p>
        </div>
        <div class="footer-links">
          <a href="unit.html">Armada</a>
          <a href="contact.html">Kontak</a>
          <a href="agreement.html">Syarat & Ketentuan</a>
        </div>
      </div>
      <div class="footer-quote">
        <p>"Life is a journey, enjoy the ride with Cusgo."</p>
        <span>— Cusgo Team 2026</span>
      </div>
    </footer>
  `;

  const headerContainer = document.getElementById("header-container");
  const footerContainer = document.getElementById("footer-container");

  if (headerContainer) headerContainer.outerHTML = headerHTML;
  if (footerContainer) footerContainer.outerHTML = footerHTML;

  // ==========================================
  // 2. LOGIKA HAMBURGER MENU (MOBILE)
  // ==========================================
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinksMenu = document.getElementById("nav-links");

  if (mobileMenu && navLinksMenu) {
    mobileMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-active");
      navLinksMenu.classList.toggle("active-menu");
    });
  }

  // ==========================================
  // 3. SET MENU ACTIVE SECARA DINAMIS
  // ==========================================
  const currentLocation = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
    }
  });

  // ==========================================
  // 4. RENDER DATA ANGGOTA TIM (KHUSUS about.html)
  // ==========================================
  const teamContainer = document.getElementById("team-container");

  if (teamContainer) {
    let teamCardsHTML = "";

    teamData.forEach(member => {
      teamCardsHTML += `
        <div class="card about-card">
          <img src="${member.foto}" alt="${member.nama}" />
          <h3>${member.nama}</h3>
          <span class="nim">${member.nim}</span>
          <p>${member.ttl}</p>
          <p class="address">${member.alamat}</p>
          <p class="quote">${member.quote}</p>
        </div>
      `;
    });

    teamContainer.innerHTML = teamCardsHTML;
  }

  // ==========================================
  // 5. RENDER DATA UNIT MOTOR (KHUSUS unit.html)
  // ==========================================
  const unitContainer = document.getElementById("unit-container");

  if (unitContainer) {
    let unitCardsHTML = "";

    unitMotor.forEach(unit => {
      unitCardsHTML += `
        <div class="card unit-card">
          <img src="${unit.img}" alt="${unit.nama}">
          <h3>${unit.nama}</h3>
          <p>${unit.harga}</p>
          <button class="btn-action">Sewa Sekarang</button>
        </div>
      `;
    });

    unitContainer.innerHTML = unitCardsHTML;
  }

  // ==========================================
  // 6. RENDER DATA HALAMAN INDEX (KHUSUS index.html)
  // ==========================================

  const stats = document.getElementById("stats");

  if (stats) {
    let statsHTML = "";

    statsData.forEach(i => {
      statsHTML += `
    <div class="stat-item">
      <h3>${i.title}</h3>
      <p>${i.desc}</p>
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
        <div class="card feature-card">
          <div class="f-icon">${i.icon}</div>
          <h3>${i.title}</h3>
          <p>${i.desc}</p>
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
        <div class="step-item">
          <div class="step-num">${i.num}</div>
          <h3>${i.title}</h3>
          <p>${i.desc}</p>
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
        <div class="card testimonial-card">
          <p>"${i.text}"</p>
          <strong>- ${i.name}</strong>
        </div>
      `;
    });

    test.innerHTML = testHTML;
  }

});