// Sahifa yuklanganda zoom funksiyasini o'chirish
window.addEventListener(
  "touchstart",
  function (event) {
    if (event.touches.length > 1) {
      event.preventDefault(); // Zoom funksiyasini o'chirish
    }
  },
  { passive: false }
);

// O'zgarishlar saqlash uchun sahifani qayta yuklanganda zoomni o'chirish
window.addEventListener("gesturestart", function (event) {
  event.preventDefault(); // Zoom funksiyasini o'chirish
});
