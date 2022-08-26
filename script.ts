// tslint:disable-next-line: no-namespace
namespace Portfolio{
export function main(): void {
window.addEventListener("load", handleLoad);

function handleLoad(_event: Event) {
    console.log("hi");
    let viewPortfolioButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("viewPortfolioButton");
    viewPortfolioButton.addEventListener("click", viewPortfolio);

    let buttonContact: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ButtonContact");
    buttonContact.addEventListener("click", contactEmail);

    console.log(jsonImport.skills[0].image);
}
function viewPortfolio() {
    location.href = "#portfolioTitel";
}
function contactEmail () {
    window.location.href = "mailto:marcelritterbuisan@gmail.com";
}
}
}
