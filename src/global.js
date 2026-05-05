import { teamData } from './dummyData.js';

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. RENDER HEADER & FOOTER
  // ==========================================
  
  // Tambahkan div class="menu-toggle" untuk tombol Hamburger
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
    <footer class="footer" style="text-align: center; padding: 20px; margin-top: 40px; background-color: #f8f9fa;">
      <p>&copy; 2026 Cusgo Rental Motor. All rights reserved.</p>
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
      // Toggle class untuk memunculkan/menyembunyikan menu
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
  // 4. RENDER DATA ANGGOTA TIM DARI DUMMY
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
});