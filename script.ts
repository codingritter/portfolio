// tslint:disable-next-line: no-namespace
namespace Portfolio{
export function main(): void {
window.addEventListener("load", handleLoad);

function handleLoad(_event: Event) {
    console.log("hey");
    let viewPortfolioButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("viewPortfolioButton");
    viewPortfolioButton.addEventListener("click", viewPortfolio);

    let buttonContact: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ButtonContact");
    buttonContact.addEventListener("click", contactEmail);

    let skillBoxes: HTMLDivElement = <HTMLDivElement>document.getElementById("skillBoxes");
    let portfolioBoxes: HTMLDivElement = <HTMLDivElement>document.getElementById("portfolioBoxes");


    console.log(jsonImport.skills[0].image);

    //Skills
    for (let i:number = 0; i< jsonImport.skills.length; i++) {
        let boxDiv: HTMLDivElement = document.createElement("div");
        boxDiv.setAttribute("class", "box");
        skillBoxes.appendChild(boxDiv);
        let boxContent: HTMLDivElement = document.createElement("div");
        boxContent.setAttribute("class", "boxContent");
        boxDiv.appendChild(boxContent);
        let boxImage: HTMLImageElement = document.createElement("img");
        boxImage.setAttribute("src", jsonImport.skills[i].image);
        boxDiv.appendChild(boxImage);
        let boxTitel: HTMLParagraphElement = document.createElement("h3");
        boxTitel.innerHTML = jsonImport.skills[i].titel;
        boxDiv.appendChild(boxTitel);
        let boxText: HTMLParagraphElement = document.createElement("p");
        boxText.innerHTML = jsonImport.skills[i].content;
        boxDiv.appendChild(boxText);
    }

    //Portfolio
    for (let i:number = 0; i< jsonImport.skills.length; i++) {
        let boxDiv: HTMLDivElement = document.createElement("div");
        boxDiv.setAttribute("class", "box");
        portfolioBoxes.appendChild(boxDiv);
        let boxContent: HTMLDivElement = document.createElement("div");
        boxContent.setAttribute("class", "boxContent");
        boxDiv.appendChild(boxContent);
        let boxImage: HTMLImageElement = document.createElement("img");
        boxImage.setAttribute("src", jsonImport.skills[i].image);
        boxDiv.appendChild(boxImage);
        let boxTitel: HTMLParagraphElement = document.createElement("h3");
        boxTitel.innerHTML = jsonImport.skills[i].titel;
        boxDiv.appendChild(boxTitel);
        let boxText: HTMLParagraphElement = document.createElement("p");
        boxText.innerHTML = jsonImport.skills[i].content;
        boxDiv.appendChild(boxText);
    }

    
}
function viewPortfolio() {
    location.href = "#portfolioTitel";
}
function contactEmail () {
    window.location.href = "mailto:marcelritterbuisan@gmail.com";
}
}
}
