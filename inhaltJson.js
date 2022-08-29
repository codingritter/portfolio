"use strict";
// tslint:disable-next-line: no-namespace
var Portfolio;
(function (Portfolio) {
    loadArtikel("data.json");
    async function loadArtikel(_url) {
        const response = await fetch(_url);
        const jsonArray = await response.json();
        Portfolio.jsonImport = await JSON.parse(JSON.stringify(jsonArray));
        Portfolio.main();
    }
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=inhaltJson.js.map