document.addEventListener("DOMContentLoaded", function () {
// Task 2: Adding Risk Items Dynamically
    const riskDashboard = document.getElementById("riskDashboard");
    const riskForm = document.getElementById("riskForm");
    const riskInput = document.getElementById("riskInput");
    console.log("Risk Dashboard Loaded");

    
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
        
// Task 4: Risk categorization
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

// Task 5: Bulk Risk Updates
    const increaseRiskButton = document.createElement("button");
    increaseRiskButton.textContent = "Increase Risk Levels";
    increaseRiskButton.addEventListener("click", function () {
        document.querySelectorAll(".riskCard").forEach(card => {
            let riskText = card.innerHTML;
            if (riskText.includes("Low")) {
                card.innerHTML = riskText.replace("Low", "Medium");
                card.style.backgroundColor = "yellow";
            } else if (riskText.includes("Medium")) {
                card.innerHTML = riskText.replace("Medium", "High");
                card.style.backgroundColor = "red";
            }
        });
    });
    document.body.insertBefore(increaseRiskButton, riskDashboard);

// Task 6: Handling Event Propagation
    riskDashboard.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // The test Cases
    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");
    addRiskItem("Market Fluctuations", "High", "Finance");
    addRiskItem("Cybersecurity Threat", "High", "IT");
    addRiskItem("HR Compliance Issue", "Low", "Human Resources");
    addRiskItem("Employee Retention", "Low", "HR");
});
