// tslint:disable-next-line: no-namespace
namespace Portfolio {
    export function main(): void {
        window.addEventListener("load", handleLoad);

        function handleLoad(_event: Event) {
            console.log("hey");
            let viewPortfolioButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("viewPortfolioButton");
            viewPortfolioButton.addEventListener("click", viewPortfolio);

            let buttonContact: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ButtonContact");
            buttonContact.addEventListener("click", contactEmail);

            let skillBoxes: HTMLDivElement = <HTMLDivElement>document.getElementById("skillBoxes");
            let zertifikateBoxes: HTMLDivElement = <HTMLDivElement>document.getElementById("zertifikateBoxes");
            let portfolioBoxes: HTMLDivElement = <HTMLDivElement>document.getElementById("portfolioBoxes");
            let kategorienHTML: HTMLDivElement[] = [skillBoxes, zertifikateBoxes, portfolioBoxes];
            let kategorienLength: number[] = [jsonImport.skills.length, jsonImport.zertifikate.length, jsonImport.portfolio.length];
            let kategorien = [jsonImport.skills, jsonImport.zertifikate, jsonImport.portfolio];



            for (let i: number = 0; i < kategorienHTML.length; i++) {
                for (let y: number = 0; y < kategorienLength[i]; y++) {
                    let boxDiv: HTMLDivElement = document.createElement("div");
                    boxDiv.setAttribute("class", "box");
                    kategorienHTML[i].appendChild(boxDiv);
                    let boxContent: HTMLDivElement = document.createElement("div");
                    boxContent.setAttribute("class", "boxContent");
                    boxDiv.appendChild(boxContent);
                    let boxImage: HTMLImageElement = document.createElement("img");
                    boxImage.setAttribute("src", kategorien[i][y].image);
                    boxDiv.appendChild(boxImage);
                    let boxTitel: HTMLParagraphElement = document.createElement("h3");
                    boxTitel.innerHTML = kategorien[i][y].titel;
                    boxDiv.appendChild(boxTitel);
                    let boxText: HTMLParagraphElement = document.createElement("p");
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
}
