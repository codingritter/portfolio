"use strict";
// tslint:disable-next-line: no-namespace
var Portfolio;
(function (Portfolio) {
    function main() {
        window.addEventListener("load", handleLoad);
        function handleLoad(_event) {
            console.log("hi");
            let viewPortfolioButton = document.getElementById("viewPortfolioButton");
            viewPortfolioButton.addEventListener("click", viewPortfolio);
            let buttonContact = document.getElementById("ButtonContact");
            buttonContact.addEventListener("click", contactEmail);
            console.log(Portfolio.jsonImport.skills[0].image);
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