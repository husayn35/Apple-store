document.addEventListener("DOMContentLoaded", () => {
  const title = "Apple store"; // Sayt nomi
  const faviconUrl = "images/3259392_apple_media_social_icon.ico"; // Sahifa ikonasi URL manzili

  document.title = title; // Sahifa nomini o'rnatish
  const link = document.createElement("link"); // Link elementi yaratish
  link.rel = "icon"; // Favicon sifatida sozlash
  link.href = faviconUrl; // Ikona URL manzilini o'rnatish
  document.head.appendChild(link); // Linkni head ga qo'shish
});
