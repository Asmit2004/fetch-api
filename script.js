const userContainer = document.getElementById("user-container");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUsers() {
  userContainer.innerHTML = "Loading...";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Network response was not ok");
    const users = await response.json();

    displayUsers(users);
  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">Error fetching data: ${error.message}</p>`;
  }
}

function displayUsers(users) {
  userContainer.innerHTML = ""; // Clear old content
  users.forEach(user => {
    const div = document.createElement("div");
    div.className = "user-card";
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Address: ${user.address.street}, ${user.address.city}</p>
    `;
    userContainer.appendChild(div);
  });
}

reloadBtn.addEventListener("click", fetchUsers);

fetchUsers();
