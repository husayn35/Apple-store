// Dark mode checkboxi va SVG elementlarini tanlash
const darkModeCheckbox = document.getElementById("dark-mode");
const appleLight = document.getElementById("apple-light");
const appleDark = document.getElementById("apple-dark");

// Checkboxni o'zgartirish hodisasini qo'shish
darkModeCheckbox.addEventListener("change", () => {
  if (darkModeCheckbox.checked) {
    // Dark mode faollashtirilganda
    appleLight.style.display = "none"; // Yengil SVG ni yashirish
    appleDark.style.display = "block"; // Qora SVG ni ko'rsatish
  } else {
    // Dark mode o'chirilganda
    appleLight.style.display = "block"; // Yengil SVG ni ko'rsatish
    appleDark.style.display = "none"; // Qora SVG ni yashirish
  }
});
