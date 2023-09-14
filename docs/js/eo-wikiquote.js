let url = 'https://eo.wikiquote.org/w/api.php?format=json&origin=*&action=parse&page=Vikicitaro:Citaĵo_de_la_tago/CDLT'

let wqQuoteHtml = "";
let wqAuthorHtml = "";

fetch(url)
    .then(response => response.json())
    .then(data => fecthData(data))
    .catch(error => console.log(error))

    const fecthData = (data) => {
    let body = `${data.parse.text['*']}`
    bodyHtml = body.replace(/\n*/gm, "").replace(/\/wiki\//gm, "https://eo.wikiquote.org/wiki/");
    wqQuoteHtml = bodyHtml.replace(/.+<blockquote/gm, "<blockquote").replace(/<\/blockquote.+/gm, "</blockquote");
    wqAuthorHtml = bodyHtml.replace(/\n*/gm, "").replace(/.+<big id="Aŭtoro_CDLT"/gm, '<big id="Aŭtoro_CDLT"').replace(/<\/big><br\/>.+/gm, "</big>");
   
    document.getElementById('eoWikiquote').innerHTML = `<figure id="figEoWikiquote">${wqQuoteHtml} + <figcaption>—${wqAuthorHtml}</figcaption></figure>`
}