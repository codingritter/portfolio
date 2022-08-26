// tslint:disable-next-line: no-namespace
namespace Portfolio {
export interface JsonImport {
skills: [{
    image: string;
    titel: string;
    content: string;
}];
}

export let jsonImport: JsonImport;
loadArtikel("data.json");

async function loadArtikel(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    let jsonArray: JSON = await response.json();
    jsonImport = await JSON.parse(JSON.stringify(jsonArray));
    main();

}
}
