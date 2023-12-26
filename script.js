let dayText = document.querySelector("#day-bar");
let monthText = document.querySelector("#month-bar");
let yearText = document.querySelector("#year-bar");
let getOutputButton = document.querySelector("svg");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let outputYears = document.querySelectorAll(".answer")[0];
let outputMonths = document.querySelectorAll(".answer")[1];
let outputDays = document.querySelectorAll(".answer")[2];
let answerYears, answerMonths, answerDays;
let totalDays = 0;
let validator = 0;
//if this is 1, (no errors found in the inputs), then only we calculate the age.
getOutputButton.addEventListener("click", () => {
  validator = 0;
  answerYears = parseInt(yearText.value);
  answerMonths = parseInt(monthText.value);
  answerDays = parseInt(dayText.value);
  console.log("click working");
  if (dayText.value == "") {
    dayText.style.border = "1px solid hsl(0, 100%, 67%)";
    document.querySelector("#empty-day").classList.remove("unactive");
    document.querySelector("#invalid-day").classList.add("unactive");
    day.style.color = "hsl(0, 100%, 67%)";
    outputYears.textContent = "--" + " ";
    outputMonths.textContent = "--" + " ";
    outputDays.textContent = "--" + " ";
  } else {
    document.querySelector("#empty-day").classList.add("unactive");
  }
  if (monthText.value == "") {
    monthText.style.border = "1px solid hsl(0, 100%, 67%)";
    document.querySelector("#empty-month").classList.remove("unactive");
    month.style.color = "hsl(0, 100%, 67%)";
    document.querySelector("#invalid-month").classList.add("unactive");
    outputYears.textContent = "--" + " ";
    outputMonths.textContent = "--" + " ";
    outputDays.textContent = "--" + " ";
  } else {
    document.querySelector("#empty-month").classList.add("unactive");
  }
  if (yearText.value == "") {
    yearText.style.border = "1px solid hsl(0, 100%, 67%)";
    document.querySelector("#empty-year").classList.remove("unactive");
    document.querySelector("#invalid-year").classList.add("unactive");
    year.style.color = "hsl(0, 100%, 67%)";
    outputYears.textContent = "--" + " ";
    outputMonths.textContent = "--" + " ";
    outputDays.textContent = "--" + " ";
  } else {
    document.querySelector("#empty-year").classList.add("unactive");
  }
  if ((isNaN(dayText.value) && dayText.value != "") || answerDays > 31) {
    dayText.style.border = "1px solid hsl(0, 100%, 67%)";
    document.querySelector("#invalid-day").classList.remove("unactive");
    day.style.color = "hsl(0, 100%, 67%)";
    document.querySelector("#empty-day").classList.add("unactive");
    outputYears.textContent = "--" + " ";
    outputMonths.textContent = "--" + " ";
    outputDays.textContent = "--" + " ";
  } else {
    document.querySelector("#invalid-day").classList.add("unactive");
  }
  if ((isNaN(monthText.value) && monthText.value != "") || answerMonths > 12) {
    dayText.style.border = "1px solid hsl(0, 100%, 67%)";
    document.querySelector("#invalid-month").classList.remove("unactive");
    month.style.color = "hsl(0, 100%, 67%)";
    outputYears.textContent = "--" + " ";
    outputMonths.textContent = "--" + " ";
    outputDays.textContent = "--" + " ";

    document.querySelector("#empty-month").classList.add("unactive");
  } else {
    document.querySelector("#invalid-month").classList.add("unactive");
  }
  if ((isNaN(yearText.value) && yearText.value != "") || answerYears > 2023) {
    dayText.style.border = "1px solid hsl(0, 100%, 67%)";
    document.querySelector("#invalid-year").classList.remove("unactive");
    document.querySelector("#empty-year").classList.add("unactive");
    year.style.color = "hsl(0, 100%, 67%)";
    outputYears.textContent = "--" + " ";
    outputMonths.textContent = "--" + " ";
    outputDays.textContent = "--" + " ";
  } else {
    document.querySelector("#invalid-year").classList.add("unactive");
  }

  if (!isNaN(dayText.value) && dayText.value != "" && answerDays <= 31) {
    day.style.color = "hsl(0, 1%, 44%)";
    dayText.style.border = "1px solid hsl(0, 1%, 44%)";
    validator++;
  }
  if (!isNaN(monthText.value) && monthText.value != "" && answerMonths <= 12) {
    month.style.color = "hsl(0, 1%, 44%)";
    monthText.style.border = "1px solid hsl(0, 1%, 44%)";
    validator++;
  }
  if (!isNaN(yearText.value) && yearText.value != "" && answerYears < 2024) {
    year.style.color = "hsl(0, 1%, 44%)";
    yearText.style.border = "1px solid hsl(0, 1%, 44%)";
    validator++;
  }
  if (validator == 3) {
    totalDays =
      365 * 2022 +
      31 * 11 +
      26 -
      (365 * (answerYears - 1) + 31 * (answerMonths - 1) + answerDays);
    console.log(totalDays);
    answerYears = Math.floor(totalDays / 365);
    totalDays = Math.floor(totalDays % (365 * answerYears));
    answerMonths = Math.floor(totalDays / 31);
    totalDays = totalDays % answerMonths;
    answerDays = totalDays;
    outputYears.textContent = answerYears + " ";
    outputMonths.textContent = answerMonths + " ";
    outputDays.textContent = answerDays + " ";
  }
});
