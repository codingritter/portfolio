"use strict";
// tslint:disable-next-line: no-namespace
var Portfolio;
(function (Portfolio) {
    loadArtikel("data.json");
    async function loadArtikel(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        Portfolio.jsonImport = await JSON.parse(JSON.stringify(jsonArray));
        Portfolio.main();
    }
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=inhaltJson.js.map