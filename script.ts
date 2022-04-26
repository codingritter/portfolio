namespace portfolio {
    export function maintextAufrufen(): void {
        let uebermichHtml: HTMLElement = <HTMLElement>document.getElementById("uebermich");
        uebermichHtml.innerHTML = kategorien.informationen.uebermich;

        let uebermichButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ueberMichButton");
        uebermichButton.addEventListener("click", uebermichKlick);
        function uebermichKlick(_event: Event): void {
            window.location.href = "#uebermichAnker";
        }

        let projekteButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("projekteButton");
        projekteButton.addEventListener("click", projekteKlick);
        function projekteKlick(_event: Event): void {
            window.location.href = "#projekteAnker";
        }

        let kontaktButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("kontaktButton");
        kontaktButton.addEventListener("click", kontaktKlick);
        function kontaktKlick(_event: Event): void {
            window.location.href = "#kontaktAnker";
        }

        let mailButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("mail");
        mailButton.addEventListener("click", mailKlick);
        function mailKlick(_event: Event): void {
            window.location.href = "mailto:marcelritterbuisan@gmail.com";
        }
        let kurseDiv: HTMLDivElement = document.createElement("div");
        kurseDiv.setAttribute("id", "inhaltDiv");

        for (let i: number = 0; i < kategorien.weiterbildungen.length; i++) {
            let element: HTMLDivElement = document.createElement("div");
            element.setAttribute("id", "elementDiv");
            kurseDiv.appendChild(element);
            let name: HTMLElement = document.createElement("h2");
            name.innerHTML = kategorien.weiterbildungen[i].name;
            element.appendChild(name);
            let bild: HTMLImageElement = document.createElement("img");
            bild.setAttribute("src", kategorien.weiterbildungen[i].bild);
            bild.addEventListener("click", bildKlick);
            element.appendChild(bild);
            let beschreibung: HTMLElement = document.createElement("p");
            beschreibung.setAttribute("id", "beschreibung");
            beschreibung.innerHTML = kategorien.weiterbildungen[i].beschreibung;
            element.appendChild(beschreibung);
            function bildKlick(_event: Event): void {
                window.open(kategorien.weiterbildungen[i].link, "_blank");
            }
        }
        document.getElementById("kurse")?.appendChild(kurseDiv);

        let inhaltDiv: HTMLDivElement = document.createElement("div");
        inhaltDiv.setAttribute("id", "inhaltDiv");
        for (let i: number = 0; i < kategorien.projekte.length; i++) {
            let element: HTMLDivElement = document.createElement("div");
            element.setAttribute("id", "elementDiv");
            inhaltDiv.appendChild(element);
            let name: HTMLElement = document.createElement("h2");
            name.innerHTML = kategorien.projekte[i].name;
            element.appendChild(name);
            let bild: HTMLImageElement = document.createElement("img");
            bild.setAttribute("src", kategorien.projekte[i].bild);
            bild.addEventListener("click", bildKlick);
            element.appendChild(bild);
            let beschreibung: HTMLElement = document.createElement("p");
            beschreibung.setAttribute("id", "beschreibung");
            beschreibung.innerHTML = kategorien.projekte[i].beschreibung;
            element.appendChild(beschreibung);

            function bildKlick(_event: Event): void {
                window.open(kategorien.projekte[i].link, "_blank");
            }
        }
        document.getElementById("projekte")?.appendChild(inhaltDiv);
    }
}