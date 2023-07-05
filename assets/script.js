
const nameP = document.getElementById("nameP");
const numCard = document.getElementById("numCard");
const month = document.getElementById("month");
const year = document.getElementById("year");
const numCVC = document.getElementById("numCVC");
const confirm = document.getElementById("confirm");
const sectionRight = document.getElementById("sectionRight");
const part2 = document.getElementById("part2");

const spanName = document.getElementById("spanName");
const spanNumCard = document.getElementById("spanNumCard");
const spanMM = document.getElementById("spanMM");
const spanYY = document.getElementById("spanYY");
const spanCVC = document.getElementById("spanCVC");

numCard.addEventListener("input", function() {
  const cardNumber = numCard.value.replace(/\D/g, '').substring(0, 16);
  const separated = cardNumber.match(/.{1,4}/g);
  numCard.value = separated ? separated.join(' ') : cardNumber;
});

month.addEventListener("input", function() {
  const numMonth = month.value.replace(/\D/g, '').substring(0, 2);
  month.value = numMonth;
});

year.addEventListener("input", function() {
  const numYear = year.value.replace(/\D/g, '').substring(0, 2);
  year.value = numYear;
});

numCVC.addEventListener("input", function() {
  const numCVC = numCVC.value.replace(/\D/g, '').substring(0, 3);
  numCVC.value = numCVC;
});

function removeNonNumericChars(input) {
  return input.value.replace(/\D/g, '');
}

function validateEmptyField(input, span) {
  if (input.value === '') {
    setInvalidInput(input, span, "Can't be blank");
  } else {
    setValidInput(input, span);
  }
}

function setInvalidInput(input, span, message) {
  input.style.border = "1px solid red";
  span.textContent = message;
}

function setValidInput(input, span) {
  input.style.border = "";
  span.textContent = "";
  span.style.color = "";
}

confirm.addEventListener("click", function() {
  const now = new Date();
  const nowYear = (now.getFullYear() - 2000);

  validateEmptyField(nameP, spanName);
  validateEmptyField(numCard, spanNumCard);
  validateEmptyField(month, spanMM);
  validateEmptyField(year, spanYY);
  validateEmptyField(numCVC, spanCVC);

  if (month.value > 12 || month.value < 1) {
    spanMM.textContent = "From 1 to 12 months";
  }
  if (year.value < nowYear) {
    spanYY.textContent = "From " + nowYear + " onwards";
  }

  if (numCard.value.length < 16 || month.value.length < 2 || year.value.length < 2 || numCVC.value.length < 3) {
    const text = "Missing Numbers";
    if (numCard.value.length < 16) {
      spanNumCard.textContent = text;
    } else {
      spanNumCard.textContent = '';
    }
    if (month.value.length < 2) {
      spanMM.textContent = text;
    } else {
      spanMM.textContent = '';
    }
    if (year.value.length < 2) {
      spanYY.textContent = text;
    } else {
      spanYY.textContent = '';
    }
    if (numCVC.value.length < 3) {
      spanCVC.textContent = text;
    } else {
      spanCVC.textContent = '';
    }
  }
  
  if (month.value > 12 || month.value < 1) {
    spanMM.textContent = "From 1 to 12 months";
  }else if (year.value < nowYear) {
    spanYY.textContent = "From " + nowYear + " onwards";
  }else {
    const numCVCBack = document.getElementById("numberCVCBack");
    const namePerson = document.getElementById("namePerson");
    const numberCard = document.getElementById("numberCard");
    const numMMYY = document.getElementById("numMMYY");

    const cardNumber = removeNonNumericChars(numCard);
    const separated = cardNumber.match(/.{1,4}/g);
    numCard.value = separated ? separated.join(' ') : cardNumber;

    namePerson.textContent = nameP.value;
    numberCard.textContent = separated ? separated.join(' ') : cardNumber;
    numMMYY.textContent = month.value + '/' + year.value;
    numCVCBack.textContent = numCVC.value;

    sectionRight.style.display = "none";
    part2.style.display = "block";
  }
});