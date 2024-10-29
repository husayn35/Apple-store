document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  let loadedImages = 0;

  images.forEach((img) => {
    img.addEventListener("load", updateProgress);
    img.addEventListener("error", updateProgress); // Xato yuz bersa ham hisoblash uchun
  });

  function updateProgress() {
    loadedImages++;
    const progress = (loadedImages / images.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";

    if (loadedImages === images.length) {
      document.getElementById("loading-screen").style.display = "none";
    }
  }
});
