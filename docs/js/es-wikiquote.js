

var pon_frase_en_span = function (data) {

frase=data['parse']['text']['*'];

//para los enlaces
frase=frase.replace(/\/wiki\//g, "http://es.wikiquote.org/wiki/")


///////////////////////////////////
//si para dentro de un span es asi:

document.getElementById ('seoo').innerHTML =frase;
///////////////////////////////////


};

var dame_frase_wikiquote = function () {
var now = new Date ();
var day = now.getDay();
if(day == 0) titulo='{{Plantilla:Frase-domingo}}';
if(day == 1) titulo='{{Plantilla:Frase-lunes}}';
if(day == 2) titulo='{{Plantilla:Frase-martes}}';
if(day == 3) titulo='{{Plantilla:Frase-miércoles}}';
if(day == 4) titulo='{{Plantilla:Frase-jueves}}';
if(day == 5) titulo='{{Plantilla:Frase-viernes}}';
if(day == 6) titulo='{{Plantilla:Frase-sábado}}';



 url = 'http://es.wikiquote.org/w/api.php?action=parse&text='+titulo+'&format=json&callback=pon_frase_en_span';
//  url = 'json/es.wikiquote.org_api-result.json';

 var elem = document.createElement ('script');
 elem.setAttribute ('src', url);
 elem.setAttribute ('type','text/javascript');
 document.getElementsByTagName ('head') [0].appendChild (elem);
};

