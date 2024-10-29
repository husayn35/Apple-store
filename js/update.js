document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  let loadedImages = 0;

  // Sahifada ko'rinib turgan rasmlarni kuzatish uchun IntersectionObserver o'rnatamiz
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;

        img.addEventListener("load", updateProgress);
        img.addEventListener("error", updateProgress);

        // Rasm yuklashni boshlash
        img.src = img.getAttribute("data-src");

        observer.unobserve(img); // Rasm yuklanishni boshlagandan keyin kuzatishni to'xtatish
      }
    });
  });

  images.forEach((img) => {
    img.setAttribute("data-src", img.src); // Asl rasm yo'lini saqlab qo'yamiz
    img.src = ""; // Hozircha src ni bo'sh qilamiz
    observer.observe(img); // Har bir rasmni kuzatamiz
  });

  function updateProgress() {
    loadedImages++;
    if (loadedImages === images.length) {
      document.getElementById("loading-screen").style.display = "none";
    }
  }
});
