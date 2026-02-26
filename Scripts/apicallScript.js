document.addEventListener("DOMContentLoaded", function () {
    let savedEmail = localStorage.getItem("email");
    const button = document.getElementById("button");
    button.addEventListener("click", runMock);

    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
    }

    function runMock() {
        const email = document.getElementById("email").value;
        const status = document.getElementById("status");
        const results = document.getElementById("results");

        if (!email || !email.includes("@")) {
            status.innerHTML = "<span style='color:red'>Voer een geldig e-mailadres in.</span>";
            return;
        }

        results.innerHTML = "";
        status.innerText = "Analyse bezig... Publieke bronnen worden gecorreleerd.";

        setTimeout(() => {
            status.innerHTML = "⚠️ KRITIEKE BLOOTSTELLING GEDTECTEERD";

            createCard("Publieke datalekken gevonden", "7", "danger", "div");
            createCard("Gecompromitteerde databases", "3", "warning", "div");
            createCard("Dark web vermeldingen", "22", "danger", "div");
            createCard("Totale risicoscore", "89 / 100", "danger", "div");
            createCard("Ga naar de volgende stap", "----->", "", "button");

            // Attach event to the newly created button
            const button2 = document.querySelector(".cta-button");
            if (button2) {
                button2.addEventListener("click", () => {
                    window.location.href = "admin.html";
                });
            }
        }, 1200);

        function createCard(title, value, type, style) {
            const card = document.createElement(style);
            card.className = "card";

            let colorClass = "";
            if (type === "danger") colorClass = "danger";
            if (type === "warning") colorClass = "warning";
            if (type === "safe") colorClass = "safe";
            if (style === "button") card.classList.add("cta-button");

            card.innerHTML = `
<h3>${title}</h3>
<p class="${colorClass}">${value}</p>
`;

            results.appendChild(card);
        }
    }
});