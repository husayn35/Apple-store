const checkbox = document.getElementById("dark-mode");

// Sahifa yuklanganda localStorage dan ma'lumotlarni tekshirish
window.onload = () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    checkbox.checked = true;
    document.documentElement.style.setProperty("--color", "white"); // Oq rang
    document.documentElement.style.setProperty("--bg-color", "black"); // Qora fon
  }
};

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.documentElement.style.setProperty("--color", "white"); // Oq rang
    document.documentElement.style.setProperty("--bg-color", "black"); // Qora fon
    localStorage.setItem("darkMode", "enabled"); // Dark mode holatini saqlash
  } else {
    document.documentElement.style.setProperty("--color", "black"); // Qora rang
    document.documentElement.style.setProperty("--bg-color", "white"); // Oq fon
    localStorage.setItem("darkMode", "disabled"); // Dark mode holatini saqlash
  }
});
