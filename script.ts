// tslint:disable-next-line: no-namespace
namespace Portfolio {
    export function main(): void {
        window.addEventListener("load", handleLoad);

        function handleLoad(_event: Event) {
            const viewPortfolioButton: HTMLButtonElement = document.getElementById("viewPortfolioButton") as HTMLButtonElement;
            viewPortfolioButton.addEventListener("click", viewPortfolio);

            const buttonContact: HTMLButtonElement = document.getElementById("ButtonContact") as HTMLButtonElement;
            buttonContact.addEventListener("click", contactEmail);

            const skillBoxes: HTMLDivElement = document.getElementById("skillBoxes") as HTMLDivElement;
            const zertifikateBoxes: HTMLDivElement = document.getElementById("zertifikateBoxes") as HTMLDivElement;
            const portfolioBoxes: HTMLDivElement = document.getElementById("portfolioBoxes") as HTMLDivElement;
            const kategorienHTML: HTMLDivElement[] = [skillBoxes, zertifikateBoxes, portfolioBoxes];
            const kategorienLength: number[] = [jsonImport.skills.length, jsonImport.zertifikate.length, jsonImport.portfolio.length];
            const kategorien = [jsonImport.skills, jsonImport.zertifikate, jsonImport.portfolio];



            for (let i: number = 0; i < kategorienHTML.length; i++) {
                for (let y: number = 0; y < kategorienLength[i]; y++) {
                    const boxDiv: HTMLDivElement = document.createElement("div");
                    boxDiv.setAttribute("class", "box");
                    kategorienHTML[i].appendChild(boxDiv);
                    const boxContent: HTMLDivElement = document.createElement("div");
                    boxContent.setAttribute("class", "boxContent");
                    boxDiv.appendChild(boxContent);
                    const boxImage: HTMLImageElement = document.createElement("img");
                    boxImage.setAttribute("src", kategorien[i][y].image);
                    boxDiv.appendChild(boxImage);
                    const boxTitel: HTMLParagraphElement = document.createElement("h3");
                    boxTitel.innerHTML = kategorien[i][y].titel;
                    boxDiv.appendChild(boxTitel);
                    const boxText: HTMLParagraphElement = document.createElement("p");
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
}
