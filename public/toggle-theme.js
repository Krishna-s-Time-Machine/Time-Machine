const primaryColorScheme = ""; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem("theme");

function getPreferTheme() {
  const now = new Date();
  const hours = now.getHours();

  // Auto-switch: Dark mode from 12 AM (00:00) to 5 AM (05:00)
  if (hours >= 0 && hours < 5) {
    return "dark";
  }

  // Otherwise, light mode
  return "light";
}

// Use stored theme if available, otherwise determine based on time
let themeValue = currentTheme || getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
  document.dispatchEvent(new CustomEvent("theme-change", { detail: themeValue }));
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);
  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);
}

// Apply the preferred theme on load
reflectPreference();

window.onload = () => {
  function setThemeFeature() {
    reflectPreference();
    document.querySelector("#theme-btn")?.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";
      setPreference();
    });
  }

  setThemeFeature();
  document.addEventListener("astro:after-swap", setThemeFeature);
};

// Sync with system changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: isDark }) => {
  themeValue = isDark ? "dark" : "light";
  setPreference();
});