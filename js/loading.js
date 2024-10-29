document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("pages/iphone.html")) {
    const images = document.querySelectorAll("img[data-src]");
    let loadedImages = 0;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;

          img.addEventListener("load", updateProgress);
          img.addEventListener("error", updateProgress);

          img.src = img.getAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => {
      img.setAttribute("data-src", img.src);
      img.src = "";
      observer.observe(img);
    });

    function updateProgress() {
      loadedImages++;
      if (loadedImages === images.length) {
        document.getElementById("loading-screen").style.display = "none";
      }
    }
  }
});
