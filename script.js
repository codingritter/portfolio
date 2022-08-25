"use strict";
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    console.log("hi");
    let viewPortfolioButton = document.getElementById("viewPortfolioButton");
    viewPortfolioButton.addEventListener("click", viewPortfolio);
}
function viewPortfolio() {
    location.href = "#portfolioTitel";
}
//# sourceMappingURL=script.js.map