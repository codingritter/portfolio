"use strict";
var portfolio;
(function (portfolio) {
    function maintextAufrufen() {
        let uebermichHtml = document.getElementById("uebermich");
        uebermichHtml.innerHTML = portfolio.kategorien.informationen.uebermich;
        let uebermichButton = document.getElementById("ueberMichButton");
        uebermichButton.addEventListener("click", uebermichKlick);
        function uebermichKlick(_event) {
            window.location.href = "#uebermichAnker";
        }
        let projekteButton = document.getElementById("projekteButton");
        projekteButton.addEventListener("click", projekteKlick);
        function projekteKlick(_event) {
            window.location.href = "#projekteAnker";
        }
        let kontaktButton = document.getElementById("kontaktButton");
        kontaktButton.addEventListener("click", kontaktKlick);
        function kontaktKlick(_event) {
            window.location.href = "#kontaktAnker";
        }
        let mailButton = document.getElementById("mail");
        mailButton.addEventListener("click", mailKlick);
        function mailKlick(_event) {
            window.location.href = "mailto:marcelritterbuisan@gmail.com";
        }
        let kurseDiv = document.createElement("div");
        kurseDiv.setAttribute("id", "inhaltDiv");
        for (let i = 0; i < portfolio.kategorien.weiterbildungen.length; i++) {
            let element = document.createElement("div");
            element.setAttribute("id", "elementDiv");
            kurseDiv.appendChild(element);
            let name = document.createElement("h2");
            name.innerHTML = portfolio.kategorien.weiterbildungen[i].name;
            element.appendChild(name);
            let bild = document.createElement("img");
            bild.setAttribute("src", portfolio.kategorien.weiterbildungen[i].bild);
            bild.addEventListener("click", bildKlick);
            element.appendChild(bild);
            let beschreibung = document.createElement("p");
            beschreibung.setAttribute("id", "beschreibung");
            beschreibung.innerHTML = portfolio.kategorien.weiterbildungen[i].beschreibung;
            element.appendChild(beschreibung);
            function bildKlick(_event) {
                window.open(portfolio.kategorien.weiterbildungen[i].link, "_blank");
            }
        }
        document.getElementById("kurse")?.appendChild(kurseDiv);
        let inhaltDiv = document.createElement("div");
        inhaltDiv.setAttribute("id", "inhaltDiv");
        for (let i = 0; i < portfolio.kategorien.projekte.length; i++) {
            let element = document.createElement("div");
            element.setAttribute("id", "elementDiv");
            inhaltDiv.appendChild(element);
            let name = document.createElement("h2");
            name.innerHTML = portfolio.kategorien.projekte[i].name;
            element.appendChild(name);
            let bild = document.createElement("img");
            bild.setAttribute("src", portfolio.kategorien.projekte[i].bild);
            bild.addEventListener("click", bildKlick);
            element.appendChild(bild);
            let beschreibung = document.createElement("p");
            beschreibung.setAttribute("id", "beschreibung");
            beschreibung.innerHTML = portfolio.kategorien.projekte[i].beschreibung;
            element.appendChild(beschreibung);
            function bildKlick(_event) {
                window.open(portfolio.kategorien.projekte[i].link, "_blank");
            }
        }
        document.getElementById("projekte")?.appendChild(inhaltDiv);
    }
    portfolio.maintextAufrufen = maintextAufrufen;
})(portfolio || (portfolio = {}));
//# sourceMappingURL=script.js.map