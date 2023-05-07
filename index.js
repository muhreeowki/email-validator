const userEmail = document.getElementById("user-email");
const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");

let mailMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
checkButton.onclick = () => {
  if (userEmail.value == "") {
    result.innerHTML = "Please enter and email address";
    result.style.color = "white";
  } else if (userEmail.value.match(mailMatch)) {
    result.innerHTML = "Valid Email";
    result.style.color = "green";
  } else {
    result.innerHTML = "Invalid Email";
    result.style.color = "red";
  }
};
