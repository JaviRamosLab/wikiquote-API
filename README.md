Wikiquote API - Quote Of The Day (QOTD)
=====================

## Badges
[![GitHub forks](https://img.shields.io/github/forks/JaviRamosLab/Wikiquote-API?branch=master&label=Forks&logo=GitHub&logoColor=ffffff&labelColor=282828&color=informational&style=flat)]()
[![GitHub stars](https://img.shields.io/github/stars/JaviRamosLab/Wikiquote-API?branch=master&label=Stars&logo=GitHub&logoColor=ffffff&labelColor=282828&color=informational&style=flat)]()
[![GitHub watchers](https://img.shields.io/github/watchers/JaviRamosLab/Wikiquote-API?branch=master&label=Watchers&logo=GitHub&logoColor=ffffff&labelColor=282828&color=informational&style=flat)]()
[![GitHub release](https://img.shields.io/github/release/JaviRamosLab/Wikiquote-API.svg)](https://GitHub.com/JaviRamosLab/Wikiquote-API/releases/)
[![GitHub commits](https://badgen.net/github/commits/JaviRamosLab/Wikiquote-API.js)](https://GitHub.com/JaviRamosLab/Wikiquote-API/commit/)
![GitHub pull requests](https://img.shields.io/github/issues-pr/JaviRamosLab/Wikiquote-API)
![GitHub milestones](https://img.shields.io/github/milestones/all/JaviRamosLab/Wikiquote-API)
![GitHub repo size](https://img.shields.io/github/repo-size/JaviRamosLab/Wikiquote-API)
![GitHub contributors](https://img.shields.io/github/contributors/JaviRamosLab/wikiquote-API)

___Free unlimited quote API___

Fetch info from Wikiquote API's 

## Contents
- [Badges](#Badges)
- [Installation](#Installation)
- [Demo](#Demo)
- [API documentation](#API-documentation)
- [Roadmap/Issues](#Roadmap/Issues)
- [by language](#by-language)
- [Contributing](#Contributing)
- [CSS styles](#CSS-styles)
- [Change log/versions](#Change-log/versions)
- [Integrations](#Integrations)
- [Quotation marks](#Quotation-marks)
- [HTML tags and CSS](#HTML-tags-and-CSS)
- [License](#License)
- [Support me](#Support-me)

## Suport

**Quote Of The Day (QOTD)**
Active QOTD in languages:
- [x] eo (https://eo.wikiquote.org/wiki/Vikicitaro:Citaĵo_de_la_tago)
- [ ] en ()
- [-]  it ()
- [] es ()
- [] pt ()
- [] fr ()
- [] zh ()

Others projects
- as
- da
- fa (https://fa.wikiquote.org/wiki/ویکی‌گفتاورد:نقل‌قول_روز)
- sq
- tr (https://tr.wikiquote.org/wiki/Vikisöz:Günün_sözü)
- sv (https://sv.wikiquote.org/wiki/Wikiquote:Veckans_citat)
- su (https://su.wikiquote.org/wiki/Wikiquote:Cutatan_poé_ieu)
- he (https://he.wikiquote.org/wiki/ויקיציטוט:מיזם_ציטוט_היום)
- fi (https://fi.wikiquote.org/wiki/Wikisitaatit:Viikon_sitaatti)
- et (https://et.wikiquote.org/wiki/Vikitsitaadid:Päeva_tsitaadid)
- bn (https://bn.wikiquote.org/wiki/উইকিউক্তি:আজকের_উক্তি)
- ar (https://ar.wikiquote.org/wiki/ويكي_الاقتباس:اقتباسات_مختارة)

## Installation
in the HTML document were you want to see the QOTD
```html
<span id="eoWikiquote"></span>
```
id... ```enWikiquote```, ```esWikiquote```... or similar depending of the language.

linking JavaScript (in the HTML document before &lt;/body&gt;)
```html
<script src="https://raw.githubusercontent.com/JaviRamosLab/wikiquote-API/main/eo-wikiquote.js"></script>
```

linking style
```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/JaviRamosLab/wikiquote-API/main/css/style-1.css">
```

### Demo
[Demo EO](https://JaviRamosLab.github.io/Wikiquote-API)

## API documentation

**endpoint**
```
https://en.wikiquote.org/w/api.php?format=json&action=parse&page=Template:QoD
```

**URL encode**

url= ```https://```

language= ```en``` <!-- ISO 639-1 -->

url= ```wikiquote.org/w/api.php```

?format= ```json```

&action= ```parse```

&origin= ```*``` <!-- CORS = &origin=* -->

&page= ```page name on wq```


**API documentation**

https://es.wikiquote.org/w/api.php



## Roadmap/Issues
If you have ideas for releases in the future, it is a good idea to list them in the README or open an Issue.
- [x] Basic fetch API
- [x] Quote info
- [x] Author info
- [ ] Tags info
- [ ] Img info
- [ ] Date info
- [ ] Bio info
- [ ] &lt;lang&gt;-wikiquote.js al CDN (milestone)
- [ ] &lt;lang&gt;-wikiquote-full.js (all info: Quote, Author, Tags, Img, Date, Bio...) (milestone)
- [ ] Integration with oters API's (milestone)
- 
- [ ] Telegram bot (milestone)

**Issues**
- [ ] Ramdon quotes (365 days) (milestone)
- [ ] personalized quote list = create the subpage in your userpage (https://en.wikiquote.org/wiki/User:<YourUsername>/Wikiquote-API) (milestone)
- [ ] wikicode generator for your personalized list (milestone)
- [ ] Integration: QOTD + img from pixabay (elected by tags) + download button with html2canvas.js (milestone)


### by language
- [x] #2 (eo) Esperanto wikiquote (eo-wikiquote.js) v0.1.0
- [ ] #1 (en) Esperanto wikiquote (en-wikiquote.js)
- [ ] #3 (es) Esperanto wikiquote (es-wikiquote.js)
- [ ] (it) italian wikiquote (it-wikiquote.js)
- [ ] (tr) Turkish wikiquote (tr-wikiquote.js)

## Contributing
Open to contributions!<!-- [Contribution guidelines for this project](/CONTRIBUTING.md) -->
- Contribute to the Wikiquote-API and submit a pull request.
- Suggest features you'd like to see (add new Issue)
- Track bugs you've found
- Improve the code
- Add your own CSS style document at [/styles](/styles)

## CSS styles
**Basic**
- style/style-&lt;number&gt;.css
- ```style/style-1.css```
- [style-1](/styles/style-1.css)

**For authors**
- style/style-&lt;authorname&gt;-1.css
- ```style/style-javiramoslab-1.css```
- [style-javiramoslab-1](/styles/style-javiramoslab-1.css)

## Change log/versions
v0.1.0
- Esperanto suported
- first styles

v0.2.0
- English suported

v0.3.0
- Spanish suported

v1.0.0
- Full .js

v2.0.0
- CDN

v3.0.0
- Integration: pixabay





## Integrations
**Usefull APIs**

APITemplate.io
Dynamically generate images and PDFs from templates with a simple API
- https://apitemplate.io/

Dagpi
Image manipulation and processing
- https://dagpi.xyz/

Duply
Generate, Edit, Scale and Manage Images and Videos Smarter & Faster
- https://duply.co/docs#getting-started-api

DynaPictures
Generate Hundreds of Personalized Images in Minutes
- https://dynapictures.com/docs/

Readme typing SVG
Customizable typing and deleting text SVG
- https://github.com/DenverCoder1/readme-typing-svg

Filestack
API for image and file manipulation, 250 uploads and 500 uploads per month for free, free CDN, HTML widget.
- https://filestack.com/docs/

### Cloudinary
API for image and video storage and manipulation - free for up to 75,000 images and 7,500 manipulations per month, good documentation, it can also manipulate GIFs and PDFs.
- http://cloudinary.com/documentation
- https://cloudinary.com/documentation/image_transformations
- https://cloudinary.com/documentation/layers





## Quotation marks
https://symbl.cc/en/collections/quotation-marks/

Style by language/country
- “ ”English double.
- ‘ ’English Single.
- « »French "Christmas trees".
- „ “German "paws".
- „ ”Polish.
- » «Swedish reverse.
- " "Double universal.

Quantity of characters: 25
- «
- ‹
- »
- ›
- „
- “
- ‟
- ”
- ’
- "
- ❝
- ❞
- ❮
- ❯
- ⹂
- 〝
- 〞
- 〟
- ＂
- ‚
- ‘
- ‛
- ❛
- ❜
- ❟





## HTML tags and CSS
Aditional info and comments about HTML tags ```<blockquote> <q> <cite> <poem>``` and CSS ```lang="en" hreflang="en" translate="no" :lang()```

### HTML tags
Style of HTML was copied from MDN read more at:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote

```html
<blockquote>
<q>
<cite>
<poem>
```

```html
<figure>
    <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
    </blockquote>
    <figcaption>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
</figure>
```


#### blockquote

**Bootstrap 4**

```html
<blockquote class="blockquote">
  <p>In the digital age, knowledge is our lifeblood. And documents are the DNA of knowledge.</p>
  <footer class="blockquote-footer">Rick Thoman, CEO, <cite title="Xerox Corporation">Xerox</cite></footer>
</blockquote>
```

**Twitter**

```html
<blockquote class="twitter-tweet" data-twitter-extracted-i162792488409698566="true">
<p dir="ltr" lang="es">
…
</p>
<p>
— Aŭtoro 
</p>
</blockquote>
```

**MDN**

```html
<figure>
    <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
    </blockquote>
    <figcaption>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
</figure>
```

**Authors**
La plej granda manko ĉe HTML estas por AŬTORO de la citaĵoj kaj neniu norma solvo ekzistas, vi vidos amasegon da proponoj. Interalie mi vidis: 
```<small class="author">Napoleon Bonaparte<small>```

HTML 5 documentation says, "Small print typically features disclaimers, caveats, legal restrictions, or copyrights. Small print is also sometimes used for attribution, or for satisfying licensing requirements." 

#### q

inline citation

```<q>```

#### cite
```<cite>```

Source:

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite 

**wikisource**------
CITE ĉe vikifontaro kie ĝi multe gravas!

#### poem
```<poem>```

used in:
https://it.wikiquote.org/wiki/Wikiquote:Modello_di_voce#Formattazione

### Lang


```<html lang="eo">```

ĉe parágrafo

```<p lang="en">This paragraph is written in english.</p>```

ĉe ligilo

```<a lang="eo" href="https://ekzemplo.com/alternativa-paĝo" />ekzemplo</a>```






Source:

https://www.w3.org/International/questions/qa-html-language-declarations.es 






#### hreflang
In multilingual webs

```<link rel="alternate" hreflang="eo" href="https://ekzemplo.com/alternativa-paĝo" />```

Ekz:

```html
<link rel="alternate" hreflang="it" href="https://ejemplo.com/ciao" />

<link rel="alternate" hreflang="de" href="https://ejemplo.com/hallo" />
```


### Atributoj and CCS

lang="eo"

translate

:lang()

#### Atributo translate
En vikicitaro ĝi multege utilus ĉe la devenlingvaj tekstoj tiel ke tradukiloj (kiel google traslate, yandex ka.) lasu ilin senĉanĝoj!

```<span translate="no">translate</span>```

```<cite translate="no">How Far Can You Go?</cite>```

```class="notranslate"```




toda una página que no debería ser traducida, puede agregar 

```html
<meta name="google" value="notranslate"> dentro del elemento head de su página y Google no traducirá ningún contenido en esa página. (Sin embargo, también apoya <meta name="google" content="notranslate">.)
```

Source:

https://www.w3.org/International/questions/qa-translate-flag

```html
<footer>
  <small>© 2020 <span translate="no">BrandName</span></small>
</footer>
```

Source:

https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate 



#### :lang()

Por CCS uzado, atentu ke ĝi ne deklaras lingvon de iu ajn teksto ĝi nur modifas la stilon de iu teksto surbaze de ties lingvo. Ekzemple kiajn citilojn uzi kio multe varias laŭ lingvoj.

```CSS
/* Selects any <p> in English (en) */
p:lang(en) {
  quotes: '\201C' '\201D' '\2018' '\2019';
}
```

```html
<div lang="en"><q>This English quote has a <q>nested</q> quote inside.</q></div>
<div lang="fr"><q>This French quote has a <q>nested</q> quote inside.</q></div>
<div lang="de"><q>This German quote has a <q>nested</q> quote inside.</q></div>
```

```CSS
:lang(en) > q { quotes: '\201C' '\201D' '\2018' '\2019'; }
:lang(fr) > q { quotes: '« ' ' »'; }
:lang(de) > q { quotes: '»' '«' '\2039' '\203A'; }
```

Source:

https://developer.mozilla.org/en-US/docs/Web/CSS/:lang

and

https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang 

**Standard**

BCP47

https://tools.ietf.org/html/bcp47

ISO 639

https://www.loc.gov/standards/iso639-2/php/code_list.php 

```html
<!doctype html>
<html lang="es">
....
<body>
    <p>Esta página esta escrita en español.</p>
    <p lang="en">But this paragraph is written in english.</p>
    <p>Customizar, del inglés <span lang="en">customize</span>, que significa personalizar.</p>
</body>
</html>
```

```CSS
/* General para todos los elementos q */

q:before { content: open-quote; }
q:after { content: close-quote; }

/* Inglés */

:lang(en) q { quotes: '“' '”'; }

/* Francés */

:lang(fr) q { quotes: '«' '»'; }

/* Alemán */

:lang(de) q { quotes: '»' '«'; }
```

Source:

https://cybmeta.com/el-atributo-lang-en-html

https://tutorialesenlinea.es/2739-el-atributo-lang_hreflang-y-su-importancia-en-accesibilidad.html

https://www.w3.org/International/questions/qa-lang-why 





## Ĝeneralaj fontoj

https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang

https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate

https://www.w3.org/International/questions/qa-translate-flag

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote

https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption









### Official Site
[javiramo.github.io/Wikiquote-API](http://javiramo.github.io/Wikiquote-API "Wikiquote-API Site")

## Authors and acknowledgment

## License
[![licensebuttons by-sa](https://licensebuttons.net/l/by-sa/3.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0)

### Support me


### Show some ❤️ by starring some of the repositories!

### Developed by Javier Ramos @JaviRamosLab from 🇨🇺 Cuba with "❤️ and ⏰"