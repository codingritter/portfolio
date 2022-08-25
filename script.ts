window.addEventListener("load", handleLoad);

function handleLoad(_event: Event) {
    console.log("hi");
    let viewPortfolioButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("viewPortfolioButton");
    viewPortfolioButton.addEventListener("click", viewPortfolio);
}
function viewPortfolio() {
    location.href = "#portfolioTitel";
}
