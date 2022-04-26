namespace portfolio {
    export interface Kategorien {
        informationen: { 
            uebermich: string;
        };
        projekte: [{
            name: string;
            bild: string;
            beschreibung: string;
            link: string;
        
        }];
        weiterbildungen: [{
            name: string;
            bild: string;
            beschreibung: string;
            link: string; 
        }];
    }

    export let kategorien: Kategorien;

    loadArtikel("data.json");

    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        kategorien = await JSON.parse(JSON.stringify(jsonArray));
        maintextAufrufen();
    }
}