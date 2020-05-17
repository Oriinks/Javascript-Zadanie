class Państwo {
	constructor(kraj, kontynent, powierzchnia, populacja, ) {
		this.kraj = kraj;
		this.kontynent = kontynent;
		this.powierzchnia = powierzchnia;
		this.populacja = populacja;
	}
	gęstość() {
		return this.populacja / this.powierzchnia;
	}
	static rosnGęst(L, P) {
		return L.gęstość() - P.gęstość();
	}
	static malGęst(L, P) {
		return P.gęstość() - L.gęstość();
	}
	dajWierszHTML() {
		let html = "<tr>";
		for (let klucz in this) {
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
var tabP = [];
var sumapow = 0;
var sredniapow = 0;
var sumapop = 0;
var sredniapop = 0;
var sumagestosc = 0;
var sredniagestosc = 0;
function testjson() {
	var text = '[{"kraj": "Polska","kontynent": "Europa","powierzchnia": "38000000","populacja": "312000"},{"kraj": "Rosja","kontynent": "Azja/Europa","powierzchnia": "83000000","populacja": "784000"},{"kraj": "Ukraina","kontynent": "Europa","powierzchnia": "37300000","populacja": "603000"},{"kraj": "Chiny","kontynent": "Azja","powierzchnia": "1420000000","populacja": "9563000"},{"kraj": "Indie","kontynent": "Azja","powierzchnia": "1296000000","populacja": "3288000"},{"kraj": "Turcja","kontynent": "Azja/Europa","powierzchnia": "83000000","populacja": "784000"},{"kraj": "Kazachstan","kontynent": "Azja/Europa","powierzchnia": "18000000","populacja": "2725000"},{"kraj": "Kanada","kontynent": "Ameryka Północna","powierzchnia": "124600000","populacja": "9985000"},{"kraj": "Meksyk","kontynent": "Ameryka Północna","powierzchnia": "18000000","populacja": "1973000"},{"kraj": "Brazylia","kontynent": "Ameryka Południowa","powierzchnia": "49300000","populacja": "1140000"},{"kraj": "Kolumbia","kontynent": "Ameryka Południowa","powierzchnia": "49300000","populacja": "1140000"},{"kraj": "Maroko","kontynent": "Afryka","powierzchnia": "34000000","populacja": "447000"},{"kraj": "Algieria","kontynent": "Afryka","powierzchnia": "41500000","populacja": "2382000"},{"kraj": "Australia","kontynent": "Australia i Oceania","powierzchnia": "25000000","populacja": "7687000"},{"kraj": "Nowa Zelandia","kontynent": "Australia i Oceania","powierzchnia": "4500000","populacja": "269000"}]';
	
	var obj = JSON.parse(text);

	sumapow = 0;
	sredniapow = 0;
	sumapop = 0;
	sredniapop = 0;
	sumagestosc = 0;
	sredniagestosc = 0;
	for (var i = 0; i < obj.length; i++) {
		tabP.push(new Państwo(obj[i].kraj, obj[i].kontynent, obj[i].powierzchnia, obj[i].populacja));
		sumapow += parseInt(obj[i].powierzchnia);
		sumapop += parseInt(obj[i].populacja);
		sumagestosc += parseInt(obj[i].populacja) / parseInt(obj[i].powierzchnia);
	}
	sredniapow = sumapow / obj.length;
	sredniapop = sumapop / obj.length;
	sredniagestosc = sumagestosc / obj.length;
	
}


function generujTab(sposóbSort) {
    tabP.sort(sposóbSort);
    html = "";
    for(let wiersz of tabP) {
        html += wiersz.dajWierszHTML();
	}
	html += "<tr id='tytuly'><td>Suma</td><td>Wszystkie kontynenty</td><td>" + sumapow + "</td><td>" + sumapop + "</td><td>"+sumagestosc.toFixed(2)+"</td></tr>";
	html += "<tr id='wartosci'><td>Średnia</td><td>Wszystkie kontynenty</td><td>" + sredniapow.toFixed(2) + "</td><td>" + sredniapop.toFixed(2) + "</td><td>" + sredniagestosc.toFixed(2) +"</td></tr>";

    tabela.innerHTML = html;
}
testjson()
generujTab(rosnPoAlf("kraj"));

