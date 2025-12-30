const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("loginBtn");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");
const result = document.getElementById("result");
btn.addEventListener("click", function () 
{
  let emailVal = email.value.trim();
  let passVal = password.value.trim();
  emailErr.textContent = "";
  passErr.textContent = "";
  result.textContent = "";
  if (emailVal === "") {
    emailErr.textContent = "Email required";
    return;
  }
  if (!emailVal.includes("@")) {
    emailErr.textContent = "Invalid email format";
    return;
  }
  if (passVal === "") {
    passErr.textContent = "Password required";
    return;
  }
  if (passVal.length < 6) {
    passErr.textContent = "Password must be at least 6 characters";
    return;
  }
  result.textContent = "Login Successful";
  result.style.color = "green";

});
