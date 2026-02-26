// Function to display the chosen option
function displayChoice(option) {
    const result = document.getElementById("result");
    const indicator = document.getElementById("storageIndicator");
    if (!result) return;

    if (option) {
        // Show indicator if choice exists
        if (indicator) indicator.style.display = "block";
    } else {
        // Hide indicator if no choice
        if (indicator) indicator.style.display = "none";
    }

    switch(option) {
        case "usb":
            result.innerHTML = `
                <h1>🔌 USB gekozen</h1>
                <p>Back-up offline veiliggesteld.</p>
                <p>⚠️ Risico op verlies of infectie.</p>
            `;
            localStorage.setItem("backupChoice","usb")
            break;

        case "cloud":
            result.innerHTML = `
                <h1>☁️ Cloud upload</h1>
                <p>Snelle externe opslag.</p>
                <p>⚠️ Zonder MFA mogelijk risico.</p>
            `;
            localStorage.setItem("backupChoice","cloud")
            break;

        case "mail":
            result.innerHTML = `
                <h1>📧 Doorgemaild</h1>
                <p>❌ Groot risico op datalek.</p>
            `;
            localStorage.setItem("backupChoice","mail")
            break;

        case "cassette":
            result.innerHTML = `
                <h1>📼 Tape backup</h1>
                <p>✅ Air-gapped en zeer veilig.</p>
                <p>⏳ Langzaam herstel.</p>
            `;
            localStorage.setItem("backupChoice","cassette")
            break;

        case "nothing":
            result.innerHTML = `
                <h1> Niets gedaan</h1>
                <p>💰 Schade blijft stijgen...</p>
            `;
            localStorage.setItem("backupChoice","nothing")
            break;

        default:
            result.innerHTML = `
                <h1>Maak een keuze</h1>
                <p>Klik op een optie op de andere pagina.</p>
            `;

    }
}

// ---------- INITIAL LOAD ----------
window.onload = function() {
    const savedChoice = localStorage.getItem("backupChoice");
    displayChoice(savedChoice);

    // Redirect if savedChoice is "goNext"

};

// ---------- LISTEN FOR LOCALSTORAGE CHANGES ----------
window.addEventListener("storage", function(event) {
    if (event.key === "backupChoice") {
        displayChoice(event.newValue);

        // Redirect if new value is "goNext"

    }
});

// ---------- OPTIONAL: POLLING FOR SAME TAB CHANGES ----------
setInterval(() => {
    const savedChoice = localStorage.getItem("backupChoice");
    displayChoice(savedChoice);

    // Redirect if savedChoice is "goNext"

}, 1000);
//------------VERWIJDER KNOP---------------
document.getElementById("clearStorage").onclick = function() {
    // Clear all localStorage
    localStorage.clear();

    // Optional: reset display content if needed
    const result = document.getElementById("result");
    if(result) {
        result.innerHTML = `
            <h1>Storage cleared</h1>
            <p>Alle keuzes zijn verwijderd. Maak een nieuwe keuze.</p>
        `;
    }

    // Optional: alert the user
    alert("✅ Alle opgeslagen keuzes zijn gewist!");
};

//-----------------------------------------
function updateStorageIndicator() {
    const savedChoice = localStorage.getItem("backupChoice");
    const indicator = document.getElementById("storageIndicator");

    if (savedChoice && indicator) {
        indicator.style.display = "block";
    } else if (indicator) {
        indicator.style.display = "none";
    }
}

// Run on page load
window.onload = updateStorageIndicator;

// Listen for localStorage changes in other tabs/windows
window.addEventListener("storage", (event) => {
    if (event.key === "backupChoice") {
        updateStorageIndicator();
    }
});

// EXAMPLE: Call this function whenever you update or clear localStorage in THIS tab
function setChoice(option) {
    if (option) {
        localStorage.setItem("backupChoice", option);
    } else {
        localStorage.removeItem("backupChoice");
    }
    updateStorageIndicator();  // <-- update UI immediately
}

// EXAMPLE: clear button handler calls setChoice(null)
document.getElementById("clearStorage").onclick = function() {
    setChoice(null);
    alert("✅ Alle opgeslagen keuzes zijn gewist!");
};

document.getElementById("goNext").onclick = function() {
    localStorage.setItem("backupChoice","goNext");
}