// tslint:disable-next-line: no-namespace
namespace Portfolio {
    export function main(): void {
        window.addEventListener("load", handleLoad);

        function handleLoad(_event: Event) {
            const introText: HTMLParagraphElement = document.getElementById("introText") as HTMLParagraphElement;
            introText.innerHTML = jsonImport.webTexte[0].introText;
            const aboutMeText: HTMLParagraphElement = document.getElementById("aboutMeText") as HTMLParagraphElement;
            aboutMeText.innerHTML = jsonImport.webTexte[0].aboutMeText;

            const viewPortfolioButton: HTMLButtonElement = document.getElementById("viewPortfolioButton") as HTMLButtonElement;
            viewPortfolioButton.addEventListener("click", viewPortfolio);

            const buttonContact: HTMLButtonElement = document.getElementById("ButtonContact") as HTMLButtonElement;
            buttonContact.addEventListener("click", contactEmail);

            const skillBoxes: HTMLDivElement = document.getElementById("skillBoxes") as HTMLDivElement;
            const zertifikateBoxes: HTMLDivElement = document.getElementById("zertifikateBoxes") as HTMLDivElement;
            const portfolioBoxes: HTMLDivElement = document.getElementById("portfolioBoxes") as HTMLDivElement;
            const weitereInteressen: HTMLDivElement = document.getElementById("weitereInteressenBoxes") as HTMLDivElement;
            const kategorienHTML: HTMLDivElement[] = [skillBoxes, zertifikateBoxes, portfolioBoxes, weitereInteressen];
            const kategorienLength: number[] = [jsonImport.skills.length, jsonImport.zertifikate.length, jsonImport.portfolio.length, jsonImport.weitereInteressen.length];
            const kategorien = [jsonImport.skills, jsonImport.zertifikate, jsonImport.portfolio, jsonImport.weitereInteressen];



            for (let i: number = 0; i < kategorienHTML.length; i++) {
                for (let y: number = 0; y < kategorienLength[i]; y++) {
                    const boxDiv: HTMLDivElement = document.createElement("div");
                    boxDiv.setAttribute("class", "box");
                    kategorienHTML[i].appendChild(boxDiv);
                    if (kategorien[i][y].link && kategorien[i][y].link !== "") {
                        boxDiv.style.cursor = "pointer";
                        boxDiv.addEventListener("click", () => {
                            window.location.href = kategorien[i][y].link;
                        })
                    }

                    const boxContent: HTMLDivElement = document.createElement("div");
                    boxContent.setAttribute("class", "boxContent");
                    boxDiv.appendChild(boxContent);
                    if (kategorien[i][y].image) {
                        const boxImage: HTMLImageElement = document.createElement("img");
                        boxImage.setAttribute("src", kategorien[i][y].image);
                        if(kategorien[i][y].imageWidth && kategorien[i][y].imageWidth !== ""){
                        boxImage.style.width = kategorien[i][y].imageWidth;
                    }
                        boxDiv.appendChild(boxImage);
                    }

                    const boxTitel: HTMLParagraphElement = document.createElement("h3");
                    boxTitel.innerHTML = kategorien[i][y].titel;
                    boxDiv.appendChild(boxTitel);

                    if(!kategorien[i][y].image) {
                        boxTitel.style.marginTop = "82px"
                    }
                    // if (!kategorien[i][y].image) {
                    //     boxDiv.removeChild(boxImage);
                    //     boxTitel.style.marginTop = "82px";
                    // }
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
        // und ich programmiere leidenschaftlich im Front End Bereich. bin Student an der Hochschule Furtwangen
    }
}
