class Państwo{
	constructor(kraj,kontynent,powierzchnia,populacja,){
		this.kraj = kraj;
		this.kontynent = kontynent;
		this.powierzchnia = powierzchnia;
		this.populacja = populacja;
	}
	gęstość() {
		return this.populacja/this.powierzchnia;
	}
	static rosnGęst(L,P) {
		return L.gęstość()-P.gęstość();
	}
	static malGęst(L,P) {
		return P.gęstość()-L.gęstość();
	}
	dajWierszHTML() {
		let html = "<tr>";
		for(let klucz in this) {
			html += "<td>";
			html += this[klucz];
			html += "</td>";
		}
		html += "<td>";
		html += this.gęstość().toFixed(2);
		html += "</td>";
		html += "</tr>";
		return html;
	}
}
function rosnPoAlf(klucz) {
	return function (L, P) {
		return L[klucz].localeCompare(P[klucz]);
	}
}
function malPoAlf(indeks) {
	return function (L, P) {
		return P[indeks].localeCompare(L[indeks]);
	}
}
function rosnPo(klucz) {
    return function (L,P) {
        return L[klucz]-P[klucz];
    }
}
function malPo(klucz) {
    return function (L,P) {
        return P[klucz]-L[klucz];
    }
}
var tabP = [
	new Państwo("Polska", "Europa", 38000000, 312000),
	new Państwo("Rosja", "Azja/Europa", 147000000, 17075000),
	new Państwo("Ukraina", "Europa", 37300000, 603000),
	new Państwo("Chiny", "Azja", 1420000000, 9563000),
	new Państwo("Indie", "Azja", 1296000000, 3288000),
	new Państwo("Turcja", "Azja/Europa", 83000000, 784000),
	new Państwo("Kazachstan", "Azja/Europa", 18000000, 2725000),
	new Państwo("Kanada", "Ameryka Północna", 124600000, 9985000),
	new Państwo("Meksyk", "Ameryka Północna", 18000000, 1973000),
	new Państwo("Brazylia", "Ameryka Południowa", 210700000, 8515000),
	new Państwo("Kolumbia", "Ameryka Południowa", 49300000, 1140000),
	new Państwo("Maroko", "Afryka", 34000000, 447000),
	new Państwo("Algieria", "Afryka", 41500000, 2382000),
	new Państwo("Australia", "Australia i Oceania", 25000000, 7687000),
	new Państwo("Nowa Zelandia", "Australia i Oceania", 4500000, 269000),
];

function generujTab(sposóbSort) {
    tabP.sort(sposóbSort);
    html = "";
    for(let wiersz of tabP) {
        html += wiersz.dajWierszHTML();
    }
    tabela.innerHTML = html;
}

generujTab(rosnPoAlf("kraj"));

var json = fetch("dane.json")
	.then(response => response.json())
	.then(json => console.log(json));

var testi = 0
function testuj() {
	var html = "Hello World! " + json + " <" + testi;
	test.innerHTML = html;
	testi++;
}
