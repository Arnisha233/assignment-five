// click btn and copy btn for function

function copyClick(id) {
  let countBtn = document.getElementById(id);
  let parseConvert = parseInt(countBtn.innerText);
  let count = parseConvert + 1;
  countBtn.innerText = count;
}

// heart button click with delegation
document.getElementById("card").addEventListener("click", function (e) {
  if (e.target.className.includes("heart-btn")) {
    copyClick("count-btn");
  }
});

// click call button delegation
document.getElementById("card").addEventListener("click", function (e) {
  if (e.target.className.includes("call")) {
    const cointCall = document.getElementById("coint");
    const coinParse = Number(cointCall.innerText);
    if (coinParse >= 20) {
      const countCoint = coinParse - 20;
      cointCall.innerText = countCoint;
      const serviceName = e.target.parentNode.parentNode.children[1].innerText;
      const serviceNumber =
        e.target.parentNode.parentNode.children[3].innerText;
      alert(`📞 calling ${serviceName} ${serviceNumber}...`);
      const historyContainer = document.getElementById("history");
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="bg-[#FAFAFA] p-4 rounded-lg flex justify-between my-4">
                            <div>
                                <h2 class="text-[#111] text-lg font-semibold">${serviceName}</h2>
                                <p class="text-[#5C5C5C] text-lg font-normal">${serviceNumber}</p>
                            </div>
                            <div>
                                <p>${new Date().toLocaleTimeString()}</p>
                            </div>
                        </div>
      `;
      historyContainer.appendChild(div);
      document
        .getElementById("clear-btn")
        .addEventListener("click", function () {
          document.createElement("div");

          div.innerHTML = "";
        });
    } else {
      alert("❌ You don't have enough coins. You'll need at least 20 conins");
    }
  }
});

// click copy button with delegation
document.getElementById("card").addEventListener("click", function (e) {
  if (e.target.className.includes("copy")) {
    copyClick("copy-btn");
    const serviceNumber = e.target.parentNode.parentNode.children[3].innerText;
    alert(`Number copied ${serviceNumber}`);
    navigator.clipboard.writeText(serviceNumber);
  }
});
