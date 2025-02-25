// add money formula
document.getElementById("add-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const amountToAdd = document.getElementById("ammount-to-add").value;
  const remainingAmount = document.getElementById("remaining-amount").innerText;
  const afterAdding = parseInt(remainingAmount) + parseFloat(amountToAdd);
  const pin = document.getElementById("pin").value;
  const convertedPin = parseInt(pin);
 if (afterAdding < 0) {
   alert("Enter Positive Amount!");
   return;
 }
  if (convertedPin === 1234) {
    document.getElementById("remaining-amount").innerText = afterAdding;
    alert("Money Added Successfully");
  } else {
    alert("Invalid Pin Number");
  }
});

// cash out formula
document.getElementById("cash-out-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const withdrawAmount = document.getElementById("withdraw-amount").value;

  const remainingAmount = document.getElementById("remaining-amount").innerText;
  const afterWithdraw = parseInt(remainingAmount) - parseInt(withdrawAmount);
  const pin = document.getElementById("cash-out-pin").value;
  const convertedPin = parseInt(pin);
 
  if(withdrawAmount > remainingAmount){
    alert('You have not enough money!')
    return
  }
  

  if (convertedPin === 1234) {
    if (withdrawAmount <= 0) {
      alert("Enter positive amount");
    } else {
      document.getElementById("remaining-amount").innerText = afterWithdraw;
      alert("Cash Out successful!");
    }
  } else {
    alert("Provide your valid PIN...");
  }
});

// add-money
document.getElementById("add-money").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("add-money-form").style.display = "block";
  document.getElementById("cash-out-form").style.display = "none";
  document.getElementById("transfer-form").style.display = "none";
  document.getElementById("get-bonus-form").style.display = "none";
  document.getElementById("pay-bill-form").style.display = "none";
});
// cash - out
document.getElementById("cash-out").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("add-money-form").style.display = "none";
  document.getElementById("cash-out-form").style.display = "block";
  document.getElementById("transfer-form").style.display = "none";
  document.getElementById("get-bonus-form").style.display = "none";
  document.getElementById("pay-bill-form").style.display = "none";
});

// transfer-money

document.getElementById("transfer-money").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("cash-out-form").style.display = "none";
  document.getElementById("add-money-form").style.display = "none";
  document.getElementById("transfer-form").style.display = "block";
  document.getElementById("get-bonus-form").style.display = "none";
  document.getElementById("pay-bill-form").style.display = "none";
});

// get bonus
document.getElementById("get-bonus").addEventListener("click", () => {
  document.getElementById("add-money-form").style.display = "none";
  document.getElementById("cash-out-form").style.display = "none";
  document.getElementById("transfer-form").style.display = "none";
  document.getElementById("get-bonus-form").style.display = "block";
  document.getElementById("pay-bill-form").style.display = "none";
});

// pay bill
document.getElementById("pay-bill").addEventListener("click", () => {
  document.getElementById("add-money-form").style.display = "none";
  document.getElementById("cash-out-form").style.display = "none";
  document.getElementById("transfer-form").style.display = "none";
  document.getElementById("get-bonus-form").style.display = "none";
  document.getElementById("pay-bill-form").style.display = "block";
});

//logout
document.getElementById("logOut-btn").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "../index.html";
});
