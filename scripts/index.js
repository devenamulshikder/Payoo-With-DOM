document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const mobileNumber = document.getElementById("mobile-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  const intPinNumber = parseFloat(pinNumber);
  if (mobileNumber.length === 11) {
    if (intPinNumber === 1234){
window.location.href = "./home.html";
    }  else{
      alert("Invalid Pin Number")
    }
  } else {
    alert('Invalid Mobile Number or Pin Number')
  }
});
