  document.addEventListener("DOMContentLoaded", () => {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;

      // Smooth scroll for menu items
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const target = document.getElementById(targetId);
          if (target) {
            window.scrollTo({ top: target.offsetTop - navbarHeight, behavior: "smooth" });
          }
        });
      });

      // Dark Mode Toggle
      document.getElementById("darkModeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        this.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
      });

      // Profile pic rotate when clicking About
      const aboutLink = document.querySelector('a[href="#about"]');
      const profilePic = document.querySelector('#about img');
      aboutLink.addEventListener('click', () => {
        profilePic.classList.remove('rotate-animation'); void profilePic.offsetWidth;
        profilePic.classList.add('rotate-animation');
      });

      // Reveal on scroll
      const elements = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("show"), index * 150);
          }
        });
      }, { threshold: 0.2 });
      elements.forEach(el => observer.observe(el));
    });