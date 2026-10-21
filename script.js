/*
 * Baby Care GitHub Pages site
 * 1) Set SYSTEM_URL to your currently deployed Streamlit / Q&A platform URL.
 * 2) Commit and push this file to GitHub.
 * GitHub Pages serves this static introduction website only; it does not run
 * the Python, model, vector database, or other backend components.
 */
const SYSTEM_URL = ""; // Example: "https://your-live-system.example.com"

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const systemLink = document.querySelector("#system-link");
  const year = document.querySelector("#year");

  if (year) year.textContent = new Date().getFullYear();

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "關閉導覽選單" : "開啟導覽選單");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "開啟導覽選單");
      });
    });
  }

  if (systemLink && SYSTEM_URL.trim()) {
    try {
      const parsed = new URL(SYSTEM_URL);
      if (parsed.protocol === "https:" || parsed.protocol === "http:") {
        systemLink.href = parsed.href;
        systemLink.target = "_blank";
        systemLink.rel = "noopener noreferrer";
        systemLink.classList.remove("is-disabled");
        systemLink.removeAttribute("aria-disabled");
      }
    } catch (error) {
      console.warn("SYSTEM_URL 不是有效的網址，系統連結維持停用。");
    }
  }
});
