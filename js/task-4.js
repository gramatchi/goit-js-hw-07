const formRef = document.querySelector(".login-form");
const emailInputRef = formRef.elements["email"];
const passwordInputRef = formRef.elements["password"];

formRef.addEventListener("submit", (e) => {
  e.preventDefault();

  const userInfo = {};

  if (!emailInputRef.value.trim() || !passwordInputRef.value.trim()) {
    alert("All form fields must be filled in");
  } else {
    userInfo.email = emailInputRef.value.trim();
    userInfo.password = passwordInputRef.value.trim();
    console.log(userInfo);
    formRef.reset();
  }
});
