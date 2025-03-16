// Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    riskCard.innerHTML = `<strong>Risk Name:</strong> ${riskName}<br>
                          <strong>Risk Level:</strong> ${riskLevel}<br>
                          <strong>Department:</strong> ${department}<br>`;