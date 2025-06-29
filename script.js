const input = document.querySelector("#input");

const searchBtn = document.querySelector("#searchBtn");

const user = document.querySelector("#username");

const profile = document.querySelector("#profile");

searchBtn.addEventListener("click", () => {
  const username = input.value;

  if (username) {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        user.textContent = data.login;
        profile.src = data.avatar_url;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
});
