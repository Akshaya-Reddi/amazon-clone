const signinBtn = document.getElementById("signin-btn");
const modal = document.getElementById("signin-modal");
const closeModal = document.getElementById("close-modal");
const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

signinBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

loginBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }

  modal.style.display = "none";
  signinBtn.innerHTML = `<p><span>Hello, ${username}</span></p><p class="nav-second">Your Account</p>`;
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
