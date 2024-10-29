async function checkForUpdates() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/husayn/Apple-store/commits"
    );
    const data = await response.json();

    const lastUpdate = localStorage.getItem("lastUpdate");
    const newUpdate = data[0].sha;
    const commitMessage = data[0].commit.message;

    if (lastUpdate !== newUpdate) {
      alert("Yangi yangilanish mavjud: " + commitMessage);
      localStorage.setItem("lastUpdate", newUpdate);
    }
  } catch (error) {
    console.error("Yangilanishni tekshirishda xato:", error);
  }
}

document.addEventListener("DOMContentLoaded", checkForUpdates);
