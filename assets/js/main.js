/* =========================================================================
   MAIN.JS — shared behaviour across every page
   - Mobile hamburger menu
   - Dark / light theme toggle (saved in localStorage)
   - Scroll reveal animation
   - Active nav link + footer year
   ========================================================================= */

// ---------- Theme toggle ----------
(function initTheme() {
  const saved = localStorage.getItem("ks-theme");
  const preferred = saved || "dark"; // default brand theme is dark
  document.documentElement.setAttribute("data-theme", preferred);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("ks-theme", next);
}

// ---------- Mobile nav ----------
function toggleMobileNav() {
  const nav = document.getElementById("primary-nav");
  const burger = document.getElementById("hamburger");
  nav.classList.toggle("open");
  burger.classList.toggle("active");
}

// ---------- Scroll reveal ----------
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  }
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => revealObserver.observe(el));
}

// ---------- Active nav link ----------
function markActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#primary-nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
}

// ---------- Footer year ----------
function setFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

// ---------- Contact form (front-end only) ----------
function handleContactSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("form-status");
  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields before sending.";
    status.style.color = "var(--danger)";
    return;
  }

  // No backend is connected — this opens the user's email client instead.
  const subject = encodeURIComponent(`Website contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:hello@kaklotarstudio.com?subject=${subject}&body=${body}`;

  status.textContent = "Opening your email app to send this message…";
  status.style.color = "var(--success)";
  form.reset();
}

document.addEventListener("DOMContentLoaded", () => {
  observeReveals();
  markActiveNav();
  setFooterYear();
});
