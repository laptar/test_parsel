document.querySelector(".api-search").addEventListener("input",(function(e){var n;console.log(e.target.value),(n=e.target.value,void fetch("".concat("https://swapi.dev/api/").concat("people/?search=").concat(n)).then((function(e){return e.json()})).then((function(e){return console.log(e)}))).then((function(e){return console.log(e)}))}));
//# sourceMappingURL=index.0e23d4bf.js.map
