function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  const messages = document.getElementById("messages");

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = userInput;
  messages.appendChild(userMessage);

  messages.scrollTop = messages.scrollHeight;

  document.getElementById("userInput").value = "";

  setTimeout(() => {
    const response = getInformation(userInput.toLowerCase());
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";

    if (response) {
      botMessage.textContent = response.text;
      messages.appendChild(botMessage);

      if (response.image) {
        const img = document.createElement("img");
        img.src = response.image;
        img.alt = "Rasm";
        img.style.width = "100%";
        botMessage.appendChild(img);
      }

      animateTyping(botMessage);
    } else {
      botMessage.textContent = "Kechirasiz, bu model haqida ma'lumotim yo'q.";
      messages.appendChild(botMessage);
      animateTyping(botMessage);
    }

    // Output malumot qo'shilganda avtomatik siljish
    setTimeout(() => {
      messages.scrollTop = messages.scrollHeight; // Bot xabaridan keyin pastga siljish
    }, 1000); // Typing animatsiyasi tugagandan keyin siljiydi
  }, 1000);
}

let iphone16 =
  "iPhone 16 seriyasi Apple kompaniyasining yangi avlod smartfonidir. Ushbu modelda bir qancha yangiliklar va yaxshilanishlar kutilyapti: dizayn va o'lchamlari iPhone 15 modeliga o'xshash bo'ladi, ammo yangi rang variantlari va o'lchamlar bilan taklif etilishi mumkin. Kameralar tizimi yangilanadi, xususan, iPhone 16 Pro modeli professional foydalanuvchilar uchun kuchli sensorlar va yaxshilangan optik zoom funksiyalariga ega bo'lishi kutilmoqda. Ushbu modelda yangi A17 chipi o'rnatilishi, bu esa smartfonning tezligini va energiya tejamkorligini oshirishi kutilyapti. Pro modellarda LTPO OLED texnologiyasidan foydalanish orqali 120Hz yangilanish tezligiga ega ekranlar bo'ladi, bu esa yanada sifatli va ravshan tasvirlarni taqdim etadi. Batareya energiya tejash imkoniyatlari bilan yaxshilanadi va tez zaryadlash imkoniyatlari taqdim etiladi. Yangilanishlar iOS 18 operatsion tizimida amalga oshiriladi, bu foydalanuvchilarga yangi funksiyalar va imkoniyatlar taqdim etadi. Ushbu ma'lumotlar iPhone 16 ning aniq xususiyatlari va chiqarilish sanasi to'g'risida yangiliklar uchun Apple rasmiy sayti yoki ishonchli texnologiya yangiliklari manbalarini tekshirishni tavsiya etadi.";

let iphone15 =
  "iPhone 15 seriyasi Apple kompaniyasining 2023-yilgi yangi avlod smartfonlari hisoblanadi. Ushbu modelda bir qancha yangi funksiyalar va yaxshilanishlar mavjud. Dizayn jihatidan iPhone 15 avvalgi iPhone 14 modeliga o'xshash, ammo yangi rang variantlari va materiallar bilan taqdim etilgan. Kameralar tizimi yanada kuchliroq bo'lib, Pro modellarda yaxshilangan optik zoom va yangilangan sensorlar mavjud. iPhone 15 seriyasi A16 chipi bilan jihozlangan bo'lib, bu tezlik va samaradorlikni oshiradi. Pro modellarda LTPO OLED displey 120Hz yangilanish tezligiga ega, bu esa yanada silliq ko‘rish tajribasini ta'minlaydi. Batareya esa yanada samarali ishlash va tez zaryadlash imkoniyatlari bilan ta'minlangan. Barcha iPhone 15 modellari USB-C porti bilan jihozlangan, bu esa zaryadlash va ma'lumotlarni uzatishni osonlashtiradi. iPhone 15, shuningdek, iOS 17 operatsion tizimida ishlaydi, bu foydalanuvchilarga yangi funksiyalar va imkoniyatlar taqdim etadi.";

let iphone14 =
  "iPhone 14 seriyasi 2022-yil sentyabr oyida taqdim etilgan va Apple kompaniyasining ilgari modeliga nisbatan bir qator yaxshilanishlarni o'z ichiga oladi. Ushbu seriya to'rtta modeldan iborat: iPhone 14, iPhone 14 Plus, iPhone 14 Pro, va iPhone 14 Pro Max. Dizayn jihatidan, iPhone 14 avvalgi iPhone 13 modeliga o'xshab qolgan, ammo yangi rang variantlari va materiallardan foydalanilgan. Kameralar tizimi ham takomillashtirilgan, xususan, Pro modellarda kuchliroq sensorlar va yaxshilangan fotokamera funksiyalari mavjud. iPhone 14 seriyasi A15 Bionic chipi bilan jihozlangan, bu esa tezlik va samaradorlikni ta'minlaydi. iPhone 14 Pro va Pro Max modellari LTPO OLED displeyga ega bo'lib, 120Hz yangilanish tezligini taklif etadi, bu esa yanada silliq ko‘rish tajribasini beradi. iPhone 14 seriyasida batareya ishlash vaqti yaxshilangan, shuningdek, tez zaryadlash imkoniyatlari mavjud. USB-C porti o'rniga, iPhone 14 modeli Lightning portidan foydalanadi. Barcha iPhone 14 modellari iOS 16 operatsion tizimida ishlaydi, bu esa foydalanuvchilarga yangi funksiyalar va imkoniyatlar taqdim etadi.";

let iphone16Pro = "No info";
let iphone16ProMax = "No info";
let iphone16Plus = "No info";
let iphone15Pro =
  "iPhone 15 Pro - Taqdim etilgan yili: 2023, Displey: 6.1 dyuym Super Retina XDR (1179 x 2556 piksel), Chip: A17 Pro, Kamera: Triple 48 MP (ultra keng, keng burchak va telefoto); Photonic Engine, ProRAW va Cinematic mode mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 17 va ios 18.";
let iphone15Max =
  "iPhone 15 Pro Max - Taqdim etilgan yili: 2023, Displey: 6.7 dyuym Super Retina XDR (1290 x 2796 piksel), Chip: A17 Pro, Kamera: Triple 48 MP (ultra keng, keng burchak va telefoto); Photonic Engine, ProRAW va Cinematic mode mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 17 va ios 18.";

let iphone15Plus =
  "iPhone 15 Plus - Taqdim etilgan yili: 2023, Displey: 6.7 dyuym Super Retina XDR (1284 x 2796 piksel), Chip: A16 Bionic, Kamera: Dual 48 MP (ultra keng va keng burchak); Photonic Engine va Cinematic mode mavjud, Xavfsizlik: Face ID, Batareya: Yuqori batareya ishlashiga ega; tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 17.";
let iphone14Plus =
  "iPhone 14 Plus - Taqdim etilgan yili: 2022, Displey: 6.7 dyuym Super Retina XDR (1284 x 2778 piksel), Chip: A15 Bionic, Kamera: Dual 12 MP (ultra keng va keng burchak); Photonic Engine va Cinematic mode mavjud, Xavfsizlik: Face ID, Batareya: Yuqori batareya ishlashiga ega; tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 16 dan iOS 17 gacha.";

let iphone14Pro =
  "iPhone 14 Pro - Taqdim etilgan yili: 2022, Displey: 6.1 dyuym Super Retina XDR (1170 x 2556 piksel), Chip: A16 Bionic, Kamera: Triple 48 MP (ultra keng, keng burchak va telefoto); Photonic Engine, ProRAW va Cinematic mode mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 16 dan iOS 17 gacha.";
let iphone14ProMax =
  "iPhone 14 Pro Max - Taqdim etilgan yili: 2022, Displey: 6.7 dyuym Super Retina XDR (1290 x 2796 piksel), Chip: A16 Bionic, Kamera: Triple 48 MP (ultra keng, keng burchak va telefoto); Photonic Engine, ProRAW va Cinematic mode mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 16 dan iOS 17 gacha.";

let iphone13ProMax =
  "iPhone 13 Pro Max - Taqdim etilgan yili: 2021iPhone 13 Pro Max - Taqdim etilgan yili: 2021, Displey: 6.7 dyuym Super Retina XDR (1284 x 2778 piksel), Chip: A15 Bionic, Kamera: Triple 12 MP (ultra keng, keng burchak va telefoto); Night mode, ProRAW va Cinematic mode mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 15 dan iOS 17 gacha.";
let iphone13Pro =
  "iPhone 13 Pro - Taqdim etilgan yili: 2021, Displey: 6.1 dyuymlik Super Retina XDR (1170 x 2532 piksel), Chip: A15 Bionic, Kamera: Triple 12 MP (ultra keng, keng burchak va telefoto); Night mode va ProRAW mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 15 dan iOS 17 gacha.";
let iphone13 =
  "iPhone 13 - Taqdim etilgan yili: 2021, Displey: 6.1 dyumlik Super Retina XDR (1170 x 2532 piksel), Chip: A15 Bionic, Kamera: Dual 12 MP (ultra keng va keng burchak); Night mode va Cinematic mode mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 15 dan iOS 17 gacha.";
let iphone13Mini =
  "iPhone 13 mini - Taqdim etilgan yili: 2021, Displey: 5.4 dyuymlik Super Retina XDR (1080 x 2340 piksel), Chip: A15 Bionic, Kamera: Dual 12 MP (ultra keng va keng burchak); Night mode va Cinematic mode mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 15 dan iOS 17 gacha.";
let iphone12ProMax =
  "iPhone 12 Pro Max - Taqdim etilgan yili: 2020, Displey: 6.7 dyuymlik Super Retina XDR (1284 x 2778 piksel), Chip: A14 Bionic, Kamera: Triple 12 MP (ultra keng, keng burchak va telefoto); Night mode va LiDAR skaneri mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 14 dan iOS 17 gacha.";
let iphone12Pro =
  "iPhone 12 Pro - Taqdim etilgan yili: 2020, Displey: 6.1 dyumlik Super Retina XDR (1170 x 2532 piksel), Chip: A14 Bionic, Kamera: Triple 12 MP (ultra keng, keng burchak va telefoto); Night mode va LiDAR skaneri mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 14 dan iOS 17 gacha.";
let iphone12Mini =
  "iPhone 12 mini - Taqdim etilgan yili: 2020, Displey: 5.4 dyuymlik Super Retina XDR (1080 x 2340 piksel), Chip: A14 Bionic, Kamera: Dual 12 MP (ultra keng va keng burchak); Night mode va Smart HDR 3 mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 14 dan iOS 17 gacha.";
let iphone12 =
  "iPhone 12 - Taqdim etilgan yili: 2020, Displey: 6.1 dyumlik Super Retina XDR (1170 x 2532 piksel), Chip: A14 Bionic, Kamera: Dual 12 MP (ultra keng va keng burchak); Night mode va Smart HDR 3 mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 14 dan iOS 17 gacha.";
let iphone11ProMax =
  "iPhone 11 Pro Max - Taqdim etilgan yili: 2019, Displey: 6.5 dyuymlik Super Retina XDR (1242 x 2688 piksel), Chip: A13 Bionic, Kamera: Triple 12 MP (ultra keng, keng burchak va telefoto); Night mode, Smart HDR va ProRAW mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 13 dan iOS 17 gacha.";
let iphone11Pro =
  "iPhone 11 Pro - Taqdim etilgan yili: 2019, Displey: 5.8 dyuymlik Super Retina XDR (1125 x 2436 piksel), Chip: A13 Bionic, Kamera: Triple 12 MP (ultra keng, keng burchak va telefoto); Night mode, Smart HDR va ProRAW mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 13 dan iOS 17 gacha.";
let iphone11 =
  "iPhone 11 - Taqdim etilgan yili: 2019, Displey: 6.1 dyumlik Liquid Retina LCD (828 x 1792 piksel), Chip: A13 Bionic, Kamera: Dual 12 MP (ultra keng va keng burchak); Night mode va Smart HDR mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 13 dan iOS 17 gacha.";
let iphoneSe =
  "iPhone SE (2-chi avlod) - Taqdim etilgan yili: 2020, Displey: 4.7 dyuymli Retina HD (750 x 1334 piksel), Chip: A13 Bionic, Kamera: 12 MP (keng burchak); portret rejimi mavjud, Xavfsizlik: Touch ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 13 dan iOS 17 gacha.";
let iphoneXsMax =
  "iPhone XS Max - Taqdim etilgan yili: 2018, Displey: 6.5 dyumlik Super Retina OLED (1242 x 2688 piksel), Chip: A12 Bionic, Kamera: Dual 12 MP (keng burchak va telefoto); portret rejimi va Smart HDR mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 12 dan iOS 17 gacha.";
let iphoneXs =
  "iPhone XS - Taqdim etilgan yili: 2018, Displey: 5.8 dyuymli Super Retina OLED (1125 x 2436 piksel), Chip: A12 Bionic, Kamera: Dual 12 MP (keng burchak va telefoto); portret rejimi va Smart HDR mavjud, Xavfsizlik: Face ID, Batareya: Tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 12 dan iOS 17 gacha.";
let iphoneXr =
  "iPhone XR - Taqdim etilgan yili: 2018, Displey: 6.1 dyumlik Liquid Retina LCD (828 x 1792 piksel), Chip: A12 Bionic, Kamera: 12 MP (keng burchak); portret rejimi va Smart HDR mavjud, Xavfsizlik: Face ID, Batareya: Yuqori batareya ishlashiga ega; tez zaryadlash va simsiz zaryadlash imkoniyatlari mavjud, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 12 dan iOS 17 gacha.";
let iphoneX =
  "iPhone X - Taqdim etilgan yili: 2017, Displey: 5.8 dyuymli Super Retina OLED (1125 x 2436 piksel), Chip: A11 Bionic, Kamera: Dual 12 MP (keng burchak va telefoto); portret rejimi va optik zoom mavjud, Xavfsizlik: Face ID, Batareya: Simli va simsiz zaryadlash imkoniyati; tez zaryadlash qo'llab-quvvatlanadi, Qo'llab-quvvatlanadigan iOS versiyalari: iOS 11 dan iOS 17 gacha.";
function getInformation(input) {
  if (input.includes("iphone 16")) {
    return {
      text: iphone16,
    };
  }
  if (input.includes("iphone 16 pro")) {
    return {
      text: iphone16Pro,
    };
  }
  if (input.includes("iphone 16 pro max")) {
    return {
      text: iphone16ProMax,
    };
  }
  if (input.includes("iphone 16 plus")) {
    return {
      text: iphone16Plus,
    };
  }
  if (input.includes("iphone 15")) {
    return {
      text: iphone15,
    };
  }
  if (input.includes("iphone 15 plus")) {
    return {
      text: iphone15Plus,
    };
  }
  if (input.includes("iphone 15 pro")) {
    return {
      text: iphone15Pro,
    };
  }
  if (input.includes("iphone 15 pro max")) {
    return {
      text: iphone15Max,
    };
  }
  if (input.includes("iphone 14")) {
    return {
      text: iphone14,
    };
  }
  if (input.includes("iphone 14 pro")) {
    return {
      text: iphone14Pro,
    };
  }
  if (input.includes("iphone 14 pro max")) {
    return {
      text: iphone14ProMax,
    };
  }
  if (input.includes("iphone 14 Plus")) {
    return {
      text: iphone14Plus,
    };
  }

  if (input.includes("iphone 13")) {
    return {
      text: iphone13,
    };
  }
  if (input.includes("iphone 13 mini")) {
    return {
      text: iphone13Mini,
    };
  }
  if (input.includes("iphone 13 pro")) {
    return {
      text: iphone13Pro,
    };
  }
  if (input.includes("iphone 13 pro max")) {
    return {
      text: iphone13ProMax,
    };
  }
  if (input.includes("iphone 12")) {
    return {
      text: iphone12,
    };
  }
  if (input.includes("iphone 12 mini")) {
    return {
      text: iphone12Mini,
    };
  }
  if (input.includes("iphone 12 pro")) {
    return {
      text: iphone12Pro,
    };
  }
  if (input.includes("iphone 12 pro max")) {
    return {
      text: iphone12ProMax,
    };
  }
  if (input.includes("iphone 11")) {
    return {
      text: iphone11,
    };
  }
  if (input.includes("iphone 11 pro")) {
    return {
      text: iphone11Pro,
    };
  }
  if (input.includes("iphone 11 pro max")) {
    return {
      text: iphone11ProMax,
    };
  }
  if (input.includes("iphone Se")) {
    return {
      text: iphoneSe,
    };
  }
  if (input.includes("iphone x")) {
    return {
      text: iphoneX,
    };
  }
  if (input.includes("iphone xr")) {
    return {
      text: iphoneXr,
    };
  }
  if (input.includes("iphone xs")) {
    return {
      text: iphoneXs,
    };
  }
  if (input.includes("iphone xs max")) {
    return {
      text: iphoneXsMax,
    };
  }
  return null;
}

function animateTyping(element) {
  const text = element.textContent;
  element.textContent = "";
  const typingSpeed = 10;

  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      element.textContent += text[i];
    }, i * typingSpeed);
  }
}

function updateButtonState() {
  const userInput = document.getElementById("userInput").value;
  const sendButton = document.getElementById("sendButton");

  if (userInput.trim() === "") {
    sendButton.disabled = true;
    sendButton.style.opacity = 0.6;
  } else {
    sendButton.disabled = false;
    sendButton.style.opacity = 1;
  }
}

document
  .getElementById("userInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      if (this.value.trim() !== "") {
        sendMessage();
      }
      event.preventDefault();
    }
  });

document
  .getElementById("userInput")
  .addEventListener("input", updateButtonState);

// Foydalanuvchi kiritganda input fokusda bo'lishi
window.onload = function () {
  document.getElementById("userInput").focus();
};
