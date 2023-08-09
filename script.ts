// tslint:disable-next-line: no-namespace
namespace Portfolio {
    export function main(): void {
        const introText: HTMLParagraphElement = document.getElementById("intro-text") as HTMLParagraphElement;
        introText.innerHTML = jsonImport.webTexte[0].introText;
        const aboutMeText: HTMLParagraphElement = document.getElementById("about-text") as HTMLParagraphElement;
        aboutMeText.innerHTML = jsonImport.webTexte[0].aboutMeText;

        const viewPortfolioButton: HTMLButtonElement = document.getElementById("portfolio-btn") as HTMLButtonElement;
        viewPortfolioButton.addEventListener("click", viewPortfolio);

        const buttonContact: HTMLButtonElement = document.getElementById("contact-btn") as HTMLButtonElement;
        buttonContact.addEventListener("click", contactEmail);

        const skillBoxes: HTMLDivElement = document.getElementById("skills-list") as HTMLDivElement;
        const zertifikateBoxes: HTMLDivElement = document.getElementById("certificates-list") as HTMLDivElement;
        const portfolioBoxes: HTMLDivElement = document.getElementById("projects-list") as HTMLDivElement;
        const weitereInteressen: HTMLDivElement = document.getElementById("other-interests-list") as HTMLDivElement;
        const kategorienHTML: HTMLDivElement[] = [skillBoxes, zertifikateBoxes, portfolioBoxes, weitereInteressen];
        const kategorienLength: number[] = [jsonImport.skills.length, jsonImport.zertifikate.length, jsonImport.portfolio.length, jsonImport.weitereInteressen.length];
        const kategorien = [jsonImport.skills, jsonImport.zertifikate, jsonImport.portfolio, jsonImport.weitereInteressen];



        for (let i: number = 0; i < kategorienHTML.length; i++) {
            for (let y: number = 0; y < kategorienLength[i]; y++) {
                const boxDiv: HTMLDivElement = document.createElement("div");
                boxDiv.setAttribute("class", "box");
                if (kategorien[i][y].link && kategorien[i][y].link !== "") {
                    boxDiv.style.cursor = "pointer";
                    boxDiv.addEventListener("click", () => {
                        window.location.href = kategorien[i][y].link;
                    })
                }
                const boxContent: HTMLDivElement = document.createElement("div");

                if(kategorienHTML[i] === skillBoxes || kategorienHTML[i] === zertifikateBoxes) {
                boxContent.setAttribute("class", "box-content-center");
                }else{
                boxContent.setAttribute("class", "box-content");
                }
                if (kategorien[i][y].image) {
                    const boxImage: HTMLImageElement = document.createElement("img");
                    boxImage.setAttribute("src", kategorien[i][y].image);
                    if (kategorien[i][y].imageWidth && kategorien[i][y].imageWidth !== "") {
                        boxImage.style.width = kategorien[i][y].imageWidth;
                    }
                    boxContent.appendChild(boxImage);
                }

                const boxTitel: HTMLParagraphElement = document.createElement("h3");
                boxTitel.innerHTML = kategorien[i][y].title;
                boxContent.appendChild(boxTitel);

                if (!kategorien[i][y].image && window.innerWidth > 1600) {
                    boxTitel.style.marginTop = "70px"

                }else if (!kategorien[i][y].image && window.innerWidth < 1000 && window.innerWidth > 690) {
                    boxTitel.style.marginTop = "65px"
                }
                else if (!kategorien[i][y].image && window.innerWidth <= 690) {
                    boxTitel.style.marginTop = "0px"
                }
                const boxText: HTMLParagraphElement = document.createElement("p");
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
}
