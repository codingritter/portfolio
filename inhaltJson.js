"use strict";
var portfolio;
(function (portfolio) {
    loadArtikel("data.json");
    async function loadArtikel(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        portfolio.kategorien = await JSON.parse(JSON.stringify(jsonArray));
        portfolio.maintextAufrufen();
    }
})(portfolio || (portfolio = {}));
//# sourceMappingURL=inhaltJson.js.map