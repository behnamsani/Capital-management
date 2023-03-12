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
  let kolesarmaye = parseInt(allC.value);
  let riskFull = parseFloat(rC.value);
  let levrage = parseInt(lC.value);
  let riskPosition = parseFloat(rpC.value);
  let e = (kolesarmaye * riskFull) / (levrage * riskPosition);
  console.log(validationNumber(allC.value));
  console.log(kolesarmaye);
  console.log(allC.value);
  console.log(rC.value);
  if (allC.value == "" || rC.value == "" || lC.value == "" || rpC.value == "") {
    capital.innerHTML = "ورودی ها نمی توانند خالی باشند";
  } else if (
    validationNumber(allC.value) === false ||
    validationNumber(lC.value) === false ||
    validationNumber(rpC.value) === false ||
    validationNumber(rC.value) === false
  ) {
    capital.innerHTML = "لطفا فقط عدد وارد نمایید";
  } else {
    e = e.toFixed(2);
    e = parseInt(e);

    if (e >= kolesarmaye) {
      capital.innerHTML = `کل سرمایه را می توانید وارد پوزیشن کنید `;
    } else {
      capital.innerHTML = `$ ${e} `;
      const txt = document.createElement("p");
      txt.innerHTML = "معادل";
      capital.appendChild(txt);

      const riskPer = document.createElement("p");
      riskPer.id = "riskPer";
      riskPer.innerHTML = `% ${Math.round(
        (100 * e) / kolesarmaye
      )} درصد از کل سرمایه را وارد پوزیشن کنید`;
      capital.appendChild(riskPer);

      const lot = document.createElement("p");
      lot.id = "lot";
      lot.innerHTML = `LOT ${
        e / 100000
      }  سایز پوزیشن به لات استاندارد در فارکس `;
      capital.appendChild(lot);
    }
  }
});

btnClear.addEventListener("click", () => {
  console.log("btnClear");
  allC.innerHTML = "";
  allC.value = "";
  lC.innerHTML = "";
  lC.value = "";
  rC.innerHTML = "";
  rC.value = "";
  rpC.innerHTML = "";
  rpC.value = "";

  result.style.display = "none";
  // location.reload();
});

function validationNumber(a) {
  if (a / 1 == a) {
    return true;
  } else {
    return false;
  }
}
