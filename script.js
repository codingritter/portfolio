"use strict";
// tslint:disable-next-line: no-namespace
var Portfolio;
(function (Portfolio) {
    function main() {
        const introText = document.getElementById("intro-text");
        introText.innerHTML = Portfolio.jsonImport.webTexte[0].introText;
        const aboutMeText = document.getElementById("about-text");
        aboutMeText.innerHTML = Portfolio.jsonImport.webTexte[0].aboutMeText;
        const viewPortfolioButton = document.getElementById("portfolio-btn");
        viewPortfolioButton.addEventListener("click", viewPortfolio);
        const buttonContact = document.getElementById("contact-btn");
        buttonContact.addEventListener("click", contactEmail);
        const skillBoxes = document.getElementById("skills-list");
        const practicalExperiencesBoxes = document.getElementById("practical-experiences-list");
        const zertifikateBoxes = document.getElementById("certificates-list");
        const portfolioBoxes = document.getElementById("projects-list");
        const weitereInteressen = document.getElementById("other-interests-list");
        const kategorienHTML = [skillBoxes, practicalExperiencesBoxes, zertifikateBoxes, portfolioBoxes, weitereInteressen];
        const kategorienLength = [Portfolio.jsonImport.skills.length, Portfolio.jsonImport.practicalExperiences.length, Portfolio.jsonImport.zertifikate.length, Portfolio.jsonImport.portfolio.length, Portfolio.jsonImport.weitereInteressen.length];
        const kategorien = [Portfolio.jsonImport.skills, Portfolio.jsonImport.practicalExperiences, Portfolio.jsonImport.zertifikate, Portfolio.jsonImport.portfolio, Portfolio.jsonImport.weitereInteressen];
        for (let i = 0; i < kategorienHTML.length; i++) {
            for (let y = 0; y < kategorienLength[i]; y++) {
                const boxDiv = document.createElement("div");
                boxDiv.setAttribute("class", "box");
                if (kategorien[i][y].link && kategorien[i][y].link !== "") {
                    boxDiv.setAttribute("class", "boxMitLink");
                    boxDiv.style.cursor = "pointer";
                    boxDiv.addEventListener("click", () => {
                        window.open(kategorien[i][y].link, '_blank' // <- This is what makes it open in a new window.
                        );
                    });
                }
                const boxContent = document.createElement("div");
                if (kategorienHTML[i] === skillBoxes || kategorienHTML[i] === zertifikateBoxes) {
                    boxContent.setAttribute("class", "box-content-center");
                }
                else {
                    boxContent.setAttribute("class", "box-content");
                }
                if (kategorien[i][y].image) {
                    const boxImage = document.createElement("img");
                    boxImage.setAttribute("src", kategorien[i][y].image);
                    if (kategorien[i][y].imageWidth && kategorien[i][y].imageWidth !== "") {
                        boxImage.style.width = kategorien[i][y].imageWidth;
                    }
                    boxContent.appendChild(boxImage);
                }
                const boxTitel = document.createElement("h3");
                boxTitel.innerHTML = kategorien[i][y].title;
                boxContent.appendChild(boxTitel);
                if (!kategorien[i][y].image && window.innerWidth > 1600) {
                    boxTitel.style.marginTop = "59px";
                }
                else if (!kategorien[i][y].image && window.innerWidth < 1000 && window.innerWidth > 690) {
                    boxTitel.style.marginTop = "65px";
                }
                else if (!kategorien[i][y].image && window.innerWidth <= 690) {
                    boxTitel.style.marginTop = "0px";
                }
                const boxText = document.createElement("p");
                boxText.innerHTML = kategorien[i][y].content;
                boxContent.appendChild(boxText);
                boxDiv.appendChild(boxContent);
                kategorienHTML[i].appendChild(boxDiv);
            }
        }
        function viewPortfolio() {
            location.href = "#portfolio-section";
        }
        function contactEmail() {
            window.location.href = "mailto:mail@marcelritterbuisan.de";
        }
    }
    Portfolio.main = main;
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=script.js.map