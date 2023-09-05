// let url = "https://eo.wikiquote.org/w/api.php?format=json&action=parse&page=Vikicitaro:Citaĵo_de_la_tago/CDLT";
// let url = "json/eo.wikiquote.org_api-result.json";
let QOTD = "";
let quote = "";
let author = "";

fetch('json/eo.wikiquote.org_api-result.json')
.then(res => res.json())
.then(data => console.log(data.parse.text))
.then(frase=data.parse.text['*'])
.catch(err => console.log(err));

var pon_frase_en_span = function (data) {

frase=data['parse']['text']['*'];

//para los enlaces
frase=frase.replace(/\/wiki\//g, "http://es.wikiquote.org/wiki/")

///////////////////////////////////
//si para dentro de un span es asi:
document.getElementById ('seoo').innerHTML =frase;
///////////////////////////////////

};

// quote = data.parse

console.log(quote);
console.log(frase);

