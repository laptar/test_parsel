document.querySelector(".api-search").addEventListener("input",(function(e){console.log(e.target.value);(t=e.target.value,void fetch(`https://swapi.dev/api/people/?search=${t}`).then((e=>e.json())).then((e=>console.log(e)))).then((e=>console.log(e)));var t}));
//# sourceMappingURL=index.128474c0.js.map
