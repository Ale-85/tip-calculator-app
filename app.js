const totalBill = document.querySelector(".total-bill-input");
const totalPeople = document.querySelector(".total-people-input");
const tipAmount = document.getElementById("tip-amount");
const totalPerson = document.getElementById("total-person");
const customTip = document.querySelector(".custom");
const resetBtn = document.querySelector(".reset");
const errorMsg = document.querySelector(".error");

const tipPercentage = [
  {
    tip: document.getElementById("0"),
    button: document.getElementById("button1"),
  },
  {
    tip: document.getElementById("1"),
    button: document.getElementById("button2"),
  },
  {
    tip: document.getElementById("2"),
    button: document.getElementById("button3"),
  },
  {
    tip: document.getElementById("3"),
    button: document.getElementById("button4"),
  },
  {
    tip: document.getElementById("4"),
    button: document.getElementById("button5"),
  },
];

tipPercentage.forEach((tip) => {
  tip.button.addEventListener("click", (e) => {
    e.preventDefault();
    tip.button.style.backgroundColor = "hsl(172, 67%, 45%)";
    tip.button.style.color = "hsl(183, 100%, 15%)";
    if (totalPeople.value === "") {
      errorMsg.style.visibility = "visible";
      totalPeople.style.border = "2px solid hsl(23, 75%, 58%)";
    } else {
      let calcTip = (totalBill.value * tip.tip.innerText) / 100;

      let tipXPerson = Number(calcTip / totalPeople.value).toFixed(2);

      tipAmount.innerText = tipXPerson;

      totalPerson.innerText = (
        (Number(totalBill.value) + calcTip) /
        totalPeople.value
      ).toFixed(2);
    }
  });
});

customTip.addEventListener("input", (e) => {
  e.preventDefault();
  if (totalPeople.value === "") {
    errorMsg.style.visibility = "visible";
    totalPeople.style.border = "2px solid hsl(23, 75%, 58%)";
  } else {
    let calcCustomTip = (totalBill.value * customTip.value) / 100;
    let customTipXPerson = Number(calcCustomTip / totalPeople.value).toFixed(2);
    tipAmount.innerText = customTipXPerson;
    totalPerson.innerText = (
      (Number(totalBill.value) + calcCustomTip) /
      totalPeople.value
    ).toFixed(2);
  }
});

resetBtn.addEventListener("click", function () {
  location.reload();
});
