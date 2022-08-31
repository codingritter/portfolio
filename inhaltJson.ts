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
    titel: string;
    content: string;
    link: string;
}];
portfolio: [{
    image: string;
    imageWidth: string;
    titel: string;
    content: string;
    link: string;
}];
zertifikate: [{
    image: string;
    imageWidth: string;
    titel: string;
    content: string;
    link: string;
}];
}

export let jsonImport: JsonImport;
loadArtikel("data.json");

async function loadArtikel(_url: RequestInfo): Promise<void> {
    const response: Response = await fetch(_url);
    const jsonArray: JSON = await response.json();
    jsonImport = await JSON.parse(JSON.stringify(jsonArray));
    main();

}
}
