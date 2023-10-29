// tslint:disable-next-line: no-namespace
namespace Portfolio {
export interface JsonImport {
    webTexte: [{
        introText: string;
        aboutMeText: string;
    }]
skills: [{
    image: string;
    imageWidth: string;
    title: string;
    content: string;
    link: string;
}];
practicalExperiences: [{
    image: string;
    imageWidth: string;
    title: string;
    content: string;
    link: string;
}];
zertifikate: [{
    image: string;
    imageWidth: string;
    title: string;
    content: string;
    link: string;
}];
portfolio: [{
    image: string;
    imageWidth: string;
    title: string;
    content: string;
    link: string;
}];
weitereInteressen: [{
    image: string;
    imageWidth: string;
    title: string;
    content: string;
    link: string;
}];
}

export let jsonImport: JsonImport;
    loadArtikel("data.json");

    async function loadArtikel(_url: RequestInfo, retries: number = 3): Promise<void> {
        try {
            const response: Response = await fetch(_url);
            if (!response.ok) {
                throw new Error(`Netzwerkantwort war nicht ok. Status: ${response.status}`);
            }
            jsonImport = await response.json();
            main();
        } catch (error) {
            console.error('Es gab ein Problem mit dem Abrufen des JSON: ', error.message);
            if (retries > 0) {
                console.log(`Versuche erneut... Verbleibende Versuche: ${retries}`);
                await loadArtikel(_url, retries - 1);
            } else {
                console.error('Maximale Anzahl von Wiederholungsversuchen erreicht.');
            }
        }
    }
}
