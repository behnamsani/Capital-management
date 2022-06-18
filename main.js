const allC = document.querySelector("#allC");
const rC = document.querySelector("#rC");
const lC = document.querySelector("#lC");
const rpC = document.querySelector("#rpC");
const capital = document.querySelector("#capital");
const btn = document.querySelector("#btn");
const btnClear = document.querySelector("#btn2");
const result = document.querySelector("#exit");

btn.addEventListener("click", () => {
  result.style.display = "block";
  let a = parseInt(allC.value);
  let b = parseInt(rC.value);
  let c = parseInt(lC.value);
  let d = parseFloat(rpC.value);
  let e = (a * b) / (c * d);
  console.log(validationNumber(allC.value));
  console.log(a);
  console.log(allC.value);
  console.log(rC.value);
  if (allC.value == "" || rC.value == "" || lC.value == "" || rpC.value == "") {
    capital.innerHTML = "ورودی ها نمی توانند خالی باشند";
  } else if (validationNumber(allC.value) === false || validationNumber(lC.value) === false || validationNumber(rpC.value) === false || validationNumber(rC.value) === false) {
    capital.innerHTML = "لطفا فقط عدد وارد نمایید";
  } else {
    e = e.toFixed(2);
    e = parseInt(e);

    capital.innerHTML = `$ ${e} `;
    const txt = document.createElement("p");
    txt.innerHTML = "معادل";
    capital.appendChild(txt);
    const riskPer = document.createElement("p");
    riskPer.id = "riskPer";
    riskPer.innerHTML = `% ${Math.round(
      (100 * e) / a
    )} درصد از کل سرمایه را وارد پوزیشن کنید`;
    capital.appendChild(riskPer);
  }
});

btnClear.addEventListener("click", () => {});

function validationNumber(a) {
  if (a / 1 == a) {
    return true;
  } else {
    return false;
  }
}
