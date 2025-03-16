// Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    riskCard.innerHTML = `<strong>Risk Name:</strong> ${riskName}<br>
                          <strong>Risk Level:</strong> ${riskLevel}<br>
                          <strong>Department:</strong> ${department}<br>`;
  // Task 3: Removing Risk Items
  const resolveButton = document.createElement("button");
  resolveButton.textContent = "Resolve";
  resolveButton.addEventListener("click", function (event) {
      event.stopPropagation();
      riskDashboard.removeChild(riskCard);
  });
  riskCard.appendChild(resolveButton);

   // Task 4: Categorizing Risks by Level
   if (riskLevel === "Low") {
    riskCard.style.backgroundColor = "green";
} else if (riskLevel === "Medium") {
    riskCard.style.backgroundColor = "yellow";
} else if (riskLevel === "High") {
    riskCard.style.backgroundColor = "red";
}

riskDashboard.appendChild(riskCard);
}

riskForm.addEventListener("submit", function (event) {
event.preventDefault();
const riskName = riskInput.value.trim();
const riskLevel = "Medium"; // Default risk level for now
const department = "General"; // Default department for now
if (riskName) {
    addRiskItem(riskName, riskLevel, department);
    riskInput.value = "";
}
});