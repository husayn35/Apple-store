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
        img.style.width = "100%"; // Rasmning kengligini 100% qilib qo'yamiz
        botMessage.appendChild(img);
      }

      animateTyping(botMessage);
    } else {
      botMessage.textContent = "Kechirasiz, bu model haqida ma'lumotim yo'q.";
      messages.appendChild(botMessage);
      animateTyping(botMessage);
    }

    messages.scrollTop = messages.scrollHeight;
  }, 1000);
}

function getInformation(input) {
  if (input.includes("iphone 16")) {
    return {
      text: "iPhone 16 - Apple tomonidan chiqarilgan eng yangi smartfon. Ushbu telefon yuqori darajadagi texnologiyalar, kuchli kameralar va ilg'or ishlash quvvatiga ega.",
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
