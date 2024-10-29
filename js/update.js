async function checkForUpdates() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/husayn35/Apple-store/commits"
    );
    const data = await response.json();

    console.log("GitHub API Response:", data); // So'rov javobini ko'rish

    const lastUpdate = localStorage.getItem("lastUpdate");
    const newUpdate = data[0].sha;
    const commitMessage = data[0].commit.message;

    console.log("Old Update SHA:", lastUpdate); // Avvalgi commit ID
    console.log("New Update SHA:", newUpdate); // Yangi commit ID

    if (lastUpdate !== newUpdate) {
      alert("Yangi yangilanish mavjud: " + commitMessage);
      localStorage.setItem("lastUpdate", newUpdate);
    }
  } catch (error) {
    console.error("Yangilanishni tekshirishda xato:", error);
  }
}

document.addEventListener("DOMContentLoaded", checkForUpdates);
