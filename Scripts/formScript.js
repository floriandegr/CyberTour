document.addEventListener("DOMContentLoaded", function () {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let button = document.getElementById("submit");

    button.addEventListener("click", async function (event) {

        event.preventDefault(); // ✅ prevents form from refreshing page

        // Text fields
        localStorage.setItem("naam", document.getElementById("naam").value);
        localStorage.setItem("bedrijf", document.getElementById("bedrijf").value);
        localStorage.setItem("email", document.getElementById("email").value);
        localStorage.setItem("plaats", document.getElementById("plaats").value);
        localStorage.setItem("postcode", document.getElementById("postcode").value);
        localStorage.setItem("werknemers", document.getElementById("werknemers").value);

        // Radio buttons (omzet)
        const omzetSelected = document.querySelector('input[name="omzet"]:checked');
        let bedrag = 0;

        if (omzetSelected) {   // ✅ prevents crash if nothing selected
            switch (omzetSelected.id) {
                case "o1": bedrag = 200000; break;
                case "o2": bedrag = 450000; break;
                case "o3": bedrag = 950000; break;
                case "o4": bedrag = 2000000; break;
                case "o5": bedrag = 9000000; break;
                case "o6": bedrag = 10000000; break;
            }
        }

        localStorage.setItem("omzet", bedrag);

        // Radio buttons (type)
        const typeSelected = document.querySelector('input[name="type"]:checked');
        let bedrijfType = "";

        if (typeSelected) {   // ✅ prevents crash
            switch (typeSelected.id) {
                case "t1": bedrijfType = "MKB"; break;
                case "t2": bedrijfType = "Zorg"; break;
                case "t3": bedrijfType = "Finance"; break;
                case "t4": bedrijfType = "Overheid"; break;
                case "t5": bedrijfType = "Industrie"; break;
                case "t6": bedrijfType = "Retail"; break;
                case "t7": bedrijfType = "Onderwijs"; break;
                case "t8": bedrijfType = "IT/SAAS"; break;
                case "t9": bedrijfType = "Logistiek"; break;
                case "t10": bedrijfType = "Energie"; break;
                case "t11": bedrijfType = "Consultancy"; break;
            }
        }

        localStorage.setItem("type", bedrijfType);



        await sleep(1000); // ✅ now actually waits

        window.location.href = "apicall.html"; // make sure file exists
    });

});