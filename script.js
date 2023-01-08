"use strict";
// tslint:disable-next-line: no-namespace
var Portfolio;
(function (Portfolio) {
    function main() {
        const introText = document.getElementById("introText");
        introText.innerHTML = Portfolio.jsonImport.webTexte[0].introText;
        const aboutMeText = document.getElementById("aboutMeText");
        aboutMeText.innerHTML = Portfolio.jsonImport.webTexte[0].aboutMeText;
        const viewPortfolioButton = document.getElementById("viewPortfolioButton");
        viewPortfolioButton.addEventListener("click", viewPortfolio);
        const buttonContact = document.getElementById("ButtonContact");
        buttonContact.addEventListener("click", contactEmail);
        const skillBoxes = document.getElementById("skillBoxes");
        const zertifikateBoxes = document.getElementById("zertifikateBoxes");
        const portfolioBoxes = document.getElementById("portfolioBoxes");
        const weitereInteressen = document.getElementById("weitereInteressenBoxes");
        const kategorienHTML = [skillBoxes, zertifikateBoxes, portfolioBoxes, weitereInteressen];
        const kategorienLength = [Portfolio.jsonImport.skills.length, Portfolio.jsonImport.zertifikate.length, Portfolio.jsonImport.portfolio.length, Portfolio.jsonImport.weitereInteressen.length];
        const kategorien = [Portfolio.jsonImport.skills, Portfolio.jsonImport.zertifikate, Portfolio.jsonImport.portfolio, Portfolio.jsonImport.weitereInteressen];
        for (let i = 0; i < kategorienHTML.length; i++) {
            for (let y = 0; y < kategorienLength[i]; y++) {
                const boxDiv = document.createElement("div");
                boxDiv.setAttribute("class", "box");
                if (kategorien[i][y].link && kategorien[i][y].link !== "") {
                    boxDiv.style.cursor = "pointer";
                    boxDiv.addEventListener("click", () => {
                        window.location.href = kategorien[i][y].link;
                    });
                }
                const boxContent = document.createElement("div");
                boxContent.setAttribute("class", "boxContent");
                boxDiv.appendChild(boxContent);
                if (kategorien[i][y].image) {
                    const boxImage = document.createElement("img");
                    boxImage.setAttribute("src", kategorien[i][y].image);
                    if (kategorien[i][y].imageWidth && kategorien[i][y].imageWidth !== "") {
                        boxImage.style.width = kategorien[i][y].imageWidth;
                    }
                    boxDiv.appendChild(boxImage);
                }
                const boxTitel = document.createElement("h3");
                boxTitel.innerHTML = kategorien[i][y].titel;
                boxDiv.appendChild(boxTitel);
                if (!kategorien[i][y].image && window.innerWidth < 1600) {
                    boxTitel.style.marginTop = "82px";
                }
                else if (!kategorien[i][y].image && window.innerWidth >= 1600) {
                    boxTitel.style.marginTop = "110px";
                }
                const boxText = document.createElement("p");
                boxText.innerHTML = kategorien[i][y].content;
                boxDiv.appendChild(boxText);
                kategorienHTML[i].appendChild(boxDiv);
            }
        }
        function viewPortfolio() {
            location.href = "#aboutMeTitel";
        }
        function contactEmail() {
            window.location.href = "mailto:kontakt@marcelritterbuisan.de";
        }
    }
    Portfolio.main = main;
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=script.js.map