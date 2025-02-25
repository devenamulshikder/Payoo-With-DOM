document.getElementById("add-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const amountToAdd = document.getElementById("ammount-to-add").value;
  const remainingAmount = document.getElementById("remaining-amount").innerText;
  const afterAdding = parseInt(remainingAmount) + parseFloat(amountToAdd);
  const pin = document.getElementById("pin").value;
  const convertedPin = parseInt(pin);

  if (convertedPin === 1234) {
    document.getElementById("remaining-amount").innerText = afterAdding;
    alert("Money Added Successfully");
  } else {
    alert("Invalid Pin Number");
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


// 