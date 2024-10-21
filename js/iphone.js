const video = document.getElementById("myVideo");

video.addEventListener("ended", function () {
  video.currentTime = 0; // Videoni boshidan boshlaydi
  video.play(); // Videoni qayta ijro etadi
});
