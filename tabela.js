class państwo{
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
	new państwo("Rosja","Europa",17000000,150000000),
	new państwo("Indie","Azja",3300000,1300000000),
	new państwo("Chiny","Azja",9500000,1400000000),
	new państwo("Polska","Europa",312000,38000000),
	new państwo("Ukraina","Europa",603000,37000000)
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