// =========================================================
//             CodeFlow Übung lev1_2: Objects
// =========================================================

const person = {
    name: "Metin",
    alter: 36,
    calc: function sagNameAlter(a, b) {
        alert(a + " ist " + b + " Jahre alt.");
    }
};
    console.log(person.name);
    console.log(person.alter);
    // person.calc(person.name, person.alter);

// =========================================================
//             Objekte-Level-1_4
// =========================================================

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(Object.values(unsereHaustiere[1].names));
const haustiereCopy = [...unsereHaustiere];

// Function for renaming missing

// =========================================================
//         CodeFlow Übung lev1_5: Objects Accessing
// =========================================================

let unserLager = {
        schreibtisch: {
            schublade: "Hefter"
        },
        schrank: {
            "Obere Schublade": {
                Ordner1: "Dokumente",
                Ordner2: "Geheimnisse"
            },
            "Untere Schublade": "Cola"
        }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

// =========================================================
//                   Objekte-Level-1_7
// =========================================================

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

myMusic.forEach((elt) => {
    document.body.querySelector("main").innerHTML += `<p>${elt.artist}</p>`;
    document.body.querySelector("main").innerHTML += `<p>${elt.title}</p>`;
    document.body.querySelector("main").innerHTML += `<p>${elt.medium}</p><br>`;
});

// =========================================================
//                   Objekte-Level-1_8
// =========================================================

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach((elt) => {
    console.log(elt.name);
    console.log(elt.coop);
    console.log(elt.address.city);
    console.log(elt.emails);
});