/**
 * @param name {string}
 * @returns {string | null}
 */
function getPublicAdminData(name) {
  return localStorage.getItem(name);
}

/**
 * @type {string|null}
 */
const data = getPublicAdminData("yy-public-admin-info");

if (data) {
  const parsedData = JSON.parse(data);
  const loadingNode = document.getElementById("loading-dots");

  if (loadingNode && parsedData) {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const greetingEl = document.createElement("div");
    let greetingWords;

    if (hour < 5) {
      greetingWords = "Доброй ночи";
    } else if (hour < 12) {
      greetingWords = "Доброе утро";
    } else if (hour < 17) {
      greetingWords = "Добрый день";
    } else {
      greetingWords = "Добрый вечер";
    }

    if (parsedData.firstName) {
      greetingWords += `, ${parsedData.firstName}`;
    }

    greetingEl.textContent = `${greetingWords}!`;
    greetingEl.classList.add("greetings-node");
    loadingNode.appendChild(greetingEl);
  }
}
