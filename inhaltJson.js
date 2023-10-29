"use strict";
// tslint:disable-next-line: no-namespace
var Portfolio;
(function (Portfolio) {
    loadArtikel("data.json");
    async function loadArtikel(_url, retries = 3) {
        try {
            const response = await fetch(_url);
            if (!response.ok) {
                throw new Error(`Netzwerkantwort war nicht ok. Status: ${response.status}`);
            }
            Portfolio.jsonImport = await response.json();
            Portfolio.main();
        }
        catch (error) {
            console.error('Es gab ein Problem mit dem Abrufen des JSON: ', error.message);
            if (retries > 0) {
                console.log(`Versuche erneut... Verbleibende Versuche: ${retries}`);
                await loadArtikel(_url, retries - 1);
            }
            else {
                console.error('Maximale Anzahl von Wiederholungsversuchen erreicht.');
            }
        }
    }
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=inhaltJson.js.map