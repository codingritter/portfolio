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
            let zertifikateBoxes = document.getElementById("zertifikateBoxes");
            let portfolioBoxes = document.getElementById("portfolioBoxes");
            let kategorienHTML = [skillBoxes, zertifikateBoxes, portfolioBoxes];
            let kategorienLength = [Portfolio.jsonImport.skills.length, Portfolio.jsonImport.zertifikate.length, Portfolio.jsonImport.portfolio.length];
            let kategorien = [Portfolio.jsonImport.skills, Portfolio.jsonImport.zertifikate, Portfolio.jsonImport.portfolio];
            for (let i = 0; i < kategorienHTML.length; i++) {
                for (let y = 0; y < kategorienLength[i]; y++) {
                    let boxDiv = document.createElement("div");
                    boxDiv.setAttribute("class", "box");
                    kategorienHTML[i].appendChild(boxDiv);
                    let boxContent = document.createElement("div");
                    boxContent.setAttribute("class", "boxContent");
                    boxDiv.appendChild(boxContent);
                    let boxImage = document.createElement("img");
                    boxImage.setAttribute("src", kategorien[i][y].image);
                    boxDiv.appendChild(boxImage);
                    let boxTitel = document.createElement("h3");
                    boxTitel.innerHTML = kategorien[i][y].titel;
                    boxDiv.appendChild(boxTitel);
                    let boxText = document.createElement("p");
                    boxText.innerHTML = kategorien[i][y].content;
                    boxDiv.appendChild(boxText);
                }
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