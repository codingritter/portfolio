"use strict";
// tslint:disable-next-line: no-namespace
var Portfolio;
(function (Portfolio) {
    function main() {
        window.addEventListener("load", handleLoad);
        function handleLoad(_event) {
            console.log("hey");
            let viewPortfolioButton = document.getElementById("viewPortfolioButton");
            viewPortfolioButton.addEventListener("click", viewPortfolio);
            let buttonContact = document.getElementById("ButtonContact");
            buttonContact.addEventListener("click", contactEmail);
            let skillBoxes = document.getElementById("skillBoxes");
            let portfolioBoxes = document.getElementById("portfolioBoxes");
            console.log(Portfolio.jsonImport.skills[0].image);
            //Skills
            for (let i = 0; i < Portfolio.jsonImport.skills.length; i++) {
                let boxDiv = document.createElement("div");
                boxDiv.setAttribute("class", "box");
                skillBoxes.appendChild(boxDiv);
                let boxContent = document.createElement("div");
                boxContent.setAttribute("class", "boxContent");
                boxDiv.appendChild(boxContent);
                let boxImage = document.createElement("img");
                boxImage.setAttribute("src", Portfolio.jsonImport.skills[i].image);
                boxDiv.appendChild(boxImage);
                let boxTitel = document.createElement("h3");
                boxTitel.innerHTML = Portfolio.jsonImport.skills[i].titel;
                boxDiv.appendChild(boxTitel);
                let boxText = document.createElement("p");
                boxText.innerHTML = Portfolio.jsonImport.skills[i].content;
                boxDiv.appendChild(boxText);
            }
            //Portfolio
            for (let i = 0; i < Portfolio.jsonImport.skills.length; i++) {
                let boxDiv = document.createElement("div");
                boxDiv.setAttribute("class", "box");
                portfolioBoxes.appendChild(boxDiv);
                let boxContent = document.createElement("div");
                boxContent.setAttribute("class", "boxContent");
                boxDiv.appendChild(boxContent);
                let boxImage = document.createElement("img");
                boxImage.setAttribute("src", Portfolio.jsonImport.skills[i].image);
                boxDiv.appendChild(boxImage);
                let boxTitel = document.createElement("h3");
                boxTitel.innerHTML = Portfolio.jsonImport.skills[i].titel;
                boxDiv.appendChild(boxTitel);
                let boxText = document.createElement("p");
                boxText.innerHTML = Portfolio.jsonImport.skills[i].content;
                boxDiv.appendChild(boxText);
            }
        }
        function viewPortfolio() {
            location.href = "#portfolioTitel";
        }
        function contactEmail() {
            window.location.href = "mailto:marcelritterbuisan@gmail.com";
        }
    }
    Portfolio.main = main;
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=script.js.map