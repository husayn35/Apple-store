function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  const messages = document.getElementById("messages");

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = "Siz: " + userInput;
  messages.appendChild(userMessage);

  const botMessage = document.createElement("div");
  botMessage.className = "message bot";
  botMessage.textContent = "Bot: Jabber berilyapti...";
  messages.appendChild(botMessage);

  messages.scrollTop = messages.scrollHeight;

  document.getElementById("userInput").value = "";

  const response = getInformation(userInput.toLowerCase());

  if (response) {
    botMessage.textContent = response.text;
    if (response.image) {
      const img = document.createElement("img");
      img.src = response.image;
      botMessage.appendChild(img);
    }
  } else {
    botMessage.textContent =
      "Bot: Kechirasiz, bu model haqida ma'lumotim yo'q.";
  }

  updateButtonState();
}

function getInformation(input) {
  if (input.includes("iphone 16")) {
    return {
      text: "iPhone 16 - Apple tomonidan chiqarilgan eng yangi smartfon. Ushbu telefon yuqori darajadagi texnologiyalar, kuchli kameralar va ilg'or ishlash quvvatiga ega.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1c/IPhone_16_%28mockup%29.jpg",
    };
  }
  return null;
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
