import type { CampsiteConfig } from "../types";

const IMG = "/campsites/donaucamping-emmersdorf";

const donaucampingEmmersdorf: CampsiteConfig = {
  name: "Donaucamping Emmersdorf",
  shortName: "Donaucamping",
  slug: "donaucamping-emmersdorf",
  ort: "Emmersdorf an der Donau",
  region: "Niederösterreich",
  brandKind: "Camping an der Donau",
  regionLong: "Wachau · Donau · Niederösterreich",

  heroVariant: "center",

  claim: "Aufwachen an der Donau, mitten in der Wachau",
  claimEmphasis: "an der Donau",
  emailDetail: "eure Lage direkt an der Donau gegenüber von Stift Melk",
  intro:
    "Direkt am Ufer der Donau, gegenüber von Stift Melk: großzügige Stellplätze, ein Zeltplatz mit Flussblick und klimatisierte Weinfässer zum Übernachten — das Tor zur Wachau liegt vor deinem Vorzelt.",

  logo: { src: `${IMG}/logo-8c1248afcb.png`, alt: "Camping Emmersdorf Logo" },

  statement: {
    text: "Bei uns beginnt der Tag mit dem Blick über die Donau zum Stift Melk.",
    emphasis: "über die Donau",
  },

  pillars: [
    {
      title: "Direkt an der Donau",
      text: "Großzügige Stellplätze und ein Zeltplatz mit Blick über den Fluss — die Donau liegt direkt vor dir.",
      image: { src: `${IMG}/gallery-12b92cdde3.webp`, alt: "Zeltplatz mit Blick auf die Donau beim Donaucamping Emmersdorf" },
    },
    {
      title: "Übernachten im Weinfass",
      text: "Schlaf in einem klimatisierten Weinfass mit Heizung — Camping-Erlebnis ohne eigene Ausrüstung.",
      image: { src: `${IMG}/gallery-acfc1abeca.webp`, alt: "Klimatisierte Weinfässer am Donaucamping Emmersdorf" },
    },
    {
      title: "Tor zur Wachau",
      text: "Emmersdorf liegt gegenüber von Stift Melk — der ideale Ausgangspunkt für Ausflüge in die Wachau.",
      image: { src: `${IMG}/gallery-85a68809f6.webp`, alt: "Stellplätze am Donaucamping Emmersdorf, dem Tor zur Wachau" },
    },
  ],

  usps: [
    "Direkt an der Donau",
    "Klimatisierte Weinfässer",
    "Glasfaser-WLAN",
    "Stellplätze mit Strom",
    "Tor zur Wachau",
    "Gegenüber Stift Melk",
  ],

  trust: {
    heading: "Warum Gäste zum Donaucamping zurückkommen",
    headingEmphasis: "zurückkommen",
    intro:
      "Seit über 35 Jahren empfängt dich Familie Serban am Donauufer — freundlich, sauber und mit echtem Camping-Herz. Ein Platz, an dem man sich vom ersten Abend an wohlfühlt.",
  },

  awards: [],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-ad2093bbee.webp`, alt: "Donaucamping Emmersdorf direkt an der Donau, gegenüber von Stift Melk" },
  },

  breather: {
    image: { src: `${IMG}/gallery-4c045c6b43.webp`, alt: "Abendstimmung über den Stellplätzen am Donaucamping Emmersdorf" },
    line: "Wenn die Sonne über der Donau untergeht, wird der Platz ganz still.",
  },

  camping: {
    heading: "Dein Platz an der Donau",
    intro:
      "Vom ebenen Stellplatz bis zum klimatisierten Weinfass — bei uns findest du den passenden Platz, dazu kurze Wege zum Ort, zum Donauradweg und ins Freibad.",
    features: [
      {
        title: "Großzügige Stellplätze",
        text: "Ebene Stellplätze mit Strom und Wasser bilden das Herz der Anlage — viel Platz für Wohnwagen und Wohnmobil.",
        image: { src: `${IMG}/gallery-2c2a3ebb4f.webp`, alt: "Großzügige Stellplätze am Donaucamping Emmersdorf" },
      },
      {
        title: "Zeltplatz mit Flussblick",
        text: "Der Zeltplatz liegt mitten im Grün mit Blick auf die Donau — viel Privatsphäre für ein echtes Camping-Erlebnis.",
        image: { src: `${IMG}/gallery-5c51c9e89a.webp`, alt: "Zeltplatz mit Blick auf die Donau am Donaucamping Emmersdorf" },
      },
      {
        title: "Schnelles Glasfaser-WLAN",
        text: "Über die ganze Anlage surfst du mit ultraschnellem WLAN, das über Glasfaser läuft — schnell und stabil.",
        image: { src: `${IMG}/gallery-962081df2f.webp`, alt: "Stellplätze mit Glasfaser-WLAN am Donaucamping Emmersdorf" },
      },
      {
        title: "Direkt am Donauradweg",
        text: "Der Donauradweg führt direkt am Platz vorbei — perfekt für Touren durch die Wachau und entlang des Flusses.",
        image: { src: `${IMG}/gallery-ef149d8b99.webp`, alt: "Wohnmobil-Stellplätze am Donauradweg beim Donaucamping Emmersdorf" },
      },
      {
        title: "Platz für Wohnmobile",
        text: "Ob Wohnmobil, Wohnwagen, Auto oder Zelt — bei uns findest du den richtigen Platz für deine Art zu reisen.",
        image: { src: `${IMG}/gallery-da536dd70c.webp`, alt: "Wohnmobil-Stellplätze am Donaucamping Emmersdorf" },
      },
      {
        title: "Ruhige Lage am Fluss",
        text: "Am Donauufer wird es abends herrlich ruhig — nur das Wasser, die Wachauer Hügel und der Sonnenuntergang.",
        image: { src: `${IMG}/gallery-ef14aceb56.webp`, alt: "Ruhige Stellplätze am Donauufer beim Donaucamping Emmersdorf" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an die Donau",
    modes: [
      { title: "Mit dem Auto", text: "Über die A1 Westautobahn bis Abfahrt Melk, dann über die Donaubrücke nach Emmersdorf — nur wenige Minuten." },
      { title: "Mit der Bahn", text: "Bahnhof Melk liegt gegenüber der Donau; von dort sind es wenige Minuten zum Platz, Abholung auf Anfrage." },
      { title: "Mit dem Flugzeug", text: "Vom Flughafen Wien-Schwechat erreichst du Emmersdorf in rund eineinhalb Stunden." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Donauufer",
    headingEmphasis: "Donauufer",
    intro: "Stellplätze im Grünen, Zelte am Fluss und laue Abende an der Donau — ein paar Eindrücke vom Platz.",
    tag: "April bis Oktober",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-4ea6e57270.webp`, alt: "Stellplatz unter Bäumen am Donaucamping Emmersdorf" },
      { src: `${IMG}/gallery-3777e6c590.webp`, alt: "Zelte auf der Wiese am Donaucamping Emmersdorf" },
      { src: `${IMG}/gallery-04d8ab62b1.webp`, alt: "Gäste beim geselligen Anstoßen an ihren Stellplätzen am Donaucamping Emmersdorf" },
      { src: `${IMG}/gallery-63d2bac704.webp`, alt: "Abendstimmung über dem Donaucamping Emmersdorf" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz an der Donau",
    headingEmphasis: "an der Donau",
    intro: "Wähle Zeitraum und Personen — wir melden uns persönlich mit deiner Verfügbarkeit am Donauufer.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). Saison 1. April – 31. Oktober, zzgl. Ortstaxe.",
    highlight: { title: "Tor zur Wachau", text: "Gegenüber von Stift Melk — die Wachau beginnt direkt am Platz." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 38, perExtraGuest: 9 },
      { id: "zelt", label: "Zeltplatz", perNight: 26, perExtraGuest: 8 },
      { id: "weinfass", label: "Weinfass", perNight: 85, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    coords: { lat: 48.242508, lng: 15.340144 },
    tel: "+43 676 6706652",
    telHref: "tel:+436766706652",
    mail: "office@donaucamping-emmersdorf.at",
    adresse: "Donaulände 1 · 3644 Emmersdorf an der Donau · Niederösterreich",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Weinfass", href: "#camping" },
    ]},
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default donaucampingEmmersdorf;
