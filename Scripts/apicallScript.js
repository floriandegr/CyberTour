document.addEventListener("DOMContentLoaded", function () {
    let savedEmail = localStorage.getItem("email");


    console.log(savedEmail);

    function runMock(){


        const email=document.getElementById("email").value;
        const status=document.getElementById("status");
        const results=document.getElementById("results");

        if(!email || !email.includes("@")){
            status.innerHTML="<span style='color:red'>Voer een geldig e-mailadres in.</span>";
            return;
        }

        results.innerHTML="";
        status.innerText="Analyse bezig... Publieke bronnen worden gecorreleerd.";

        setTimeout(()=>{

            status.innerHTML="⚠️ KRITIEKE BLOOTSTELLING GEDTECTEERD";

            createCard("Publieke datalekken gevonden","7","danger");
            createCard("Gecompromitteerde databases","3","warning");
            createCard("Dark web vermeldingen","22","danger");
            createCard("Totale risicoscore","89 / 100","danger");

        },1200);

        function createCard(title,value,type){
            const card=document.createElement("div");
            card.className="card";

            let colorClass="";
            if(type==="danger") colorClass="danger";
            if(type==="warning") colorClass="warning";
            if(type==="safe") colorClass="safe";

            card.innerHTML=`
<h3>${title}</h3>
<p class="${colorClass}">${value}</p>
`;

            results.appendChild(card);
        }

    }
    runMock();



});