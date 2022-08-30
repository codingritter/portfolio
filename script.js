"use strict";
// tslint:disable-next-line: no-namespace
var Portfolio;
(function (Portfolio) {
    function main() {
        window.addEventListener("load", handleLoad);
        function handleLoad(_event) {
            const viewPortfolioButton = document.getElementById("viewPortfolioButton");
            viewPortfolioButton.addEventListener("click", viewPortfolio);
            const buttonContact = document.getElementById("ButtonContact");
            buttonContact.addEventListener("click", contactEmail);
            const skillBoxes = document.getElementById("skillBoxes");
            const zertifikateBoxes = document.getElementById("zertifikateBoxes");
            const portfolioBoxes = document.getElementById("portfolioBoxes");
            const kategorienHTML = [skillBoxes, zertifikateBoxes, portfolioBoxes];
            const kategorienLength = [Portfolio.jsonImport.skills.length, Portfolio.jsonImport.zertifikate.length, Portfolio.jsonImport.portfolio.length];
            const kategorien = [Portfolio.jsonImport.skills, Portfolio.jsonImport.zertifikate, Portfolio.jsonImport.portfolio];
            for (let i = 0; i < kategorienHTML.length; i++) {
                for (let y = 0; y < kategorienLength[i]; y++) {
                    const boxDiv = document.createElement("div");
                    boxDiv.setAttribute("class", "box");
                    kategorienHTML[i].appendChild(boxDiv);
                    if (kategorien[i][y].link) {
                        boxDiv.addEventListener("click", () => {
                            window.location.href = kategorien[i][y].link;
                        });
                    }
                    const boxContent = document.createElement("div");
                    boxContent.setAttribute("class", "boxContent");
                    boxDiv.appendChild(boxContent);
                    const boxImage = document.createElement("img");
                    boxImage.setAttribute("src", kategorien[i][y].image);
                    boxDiv.appendChild(boxImage);
                    const boxTitel = document.createElement("h3");
                    boxTitel.innerHTML = kategorien[i][y].titel;
                    boxDiv.appendChild(boxTitel);
                    const boxText = document.createElement("p");
                    boxText.innerHTML = kategorien[i][y].content;
                    boxDiv.appendChild(boxText);
                }
            }
        }
        function viewPortfolio() {
            location.href = "#aboutMeTitel";
        }
        function contactEmail() {
            window.location.href = "mailto:marcelritterbuisan@gmail.com";
        }
    }
    Portfolio.main = main;
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=script.js.map