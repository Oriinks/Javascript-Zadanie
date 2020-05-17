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

function testjson() {
	//var text ='{"kraj": "Polska","kontynent": "Europa","powierzchnia": "38000000","populacja": "312000"}';
	var text = '[{"kraj": "Polska","kontynent": "Europa","powierzchnia": "38000000","populacja": "312000"},{"kraj": "Rosja","kontynent": "Azja/Europa","powierzchnia": "83000000","populacja": "784000"},{"kraj": "Ukraina","kontynent": "Europa","powierzchnia": "37300000","populacja": "603000"},{"kraj": "Chiny","kontynent": "Azja","powierzchnia": "1420000000","populacja": "9563000"},{"kraj": "Indie","kontynent": "Azja","powierzchnia": "1296000000","populacja": "3288000"},{"kraj": "Turcja","kontynent": "Azja/Europa","powierzchnia": "83000000","populacja": "784000"},{"kraj": "Kazachstan","kontynent": "Azja/Europa","powierzchnia": "18000000","populacja": "2725000"},{"kraj": "Kanada","kontynent": "Ameryka Północna","powierzchnia": "124600000","populacja": "9985000"},{"kraj": "Meksyk","kontynent": "Ameryka Północna","powierzchnia": "18000000","populacja": "1973000"},{"kraj": "Brazylia","kontynent": "Ameryka Południowa","powierzchnia": "49300000","populacja": "1140000"},{"kraj": "Kolumbia","kontynent": "Ameryka Południowa","powierzchnia": "49300000","populacja": "1140000"},{"kraj": "Maroko","kontynent": "Afryka","powierzchnia": "34000000","populacja": "447000"},{"kraj": "Algieria","kontynent": "Afryka","powierzchnia": "41500000","populacja": "2382000"},{"kraj": "Australia","kontynent": "Australia i Oceania","powierzchnia": "25000000","populacja": "7687000"},{"kraj": "Nowa Zelandia","kontynent": "Australia i Oceania","powierzchnia": "4500000","populacja": "269000"}]';
	var sumapow = 0;
	var sredniapow = 0;
	var sumapop = 0;
	var sredniapop = 0;
	var j = 0;
	var obj = JSON.parse(text);
	//test.innerHTML = obj[1].kraj;
	//test.innerHTML = obj.length;

	for (var i = 0; i < obj.length; i++) {
		tabP.push(new Państwo(obj[i].kraj, obj[i].kontynent, obj[i].powierzchnia, obj[i].populacja));
		sumapow += parseInt(obj[i].powierzchnia);
		sumapop += parseInt(obj[i].populacja);
		j++;
	}
	//test.innerHTML = tabP[0].kraj;
	console.log(sumapow);
	console.log(sumapop);
	sredniapow = sumapow / j;
	sredniapop = sumapop / j;
	console.log(sredniapow);
	console.log(sredniapop);
}


//var tabP = [
//	new Państwo("Polska", "Europa", 38000000, 312000),
//	new Państwo("Rosja", "Azja/Europa", 147000000, 17075000),
//	new Państwo("Ukraina", "Europa", 37300000, 603000),
//	new Państwo("Chiny", "Azja", 1420000000, 9563000),
//	new Państwo("Indie", "Azja", 1296000000, 3288000),
//	new Państwo("Turcja", "Azja/Europa", 83000000, 784000),
//	new Państwo("Kazachstan", "Azja/Europa", 18000000, 2725000),
//	new Państwo("Kanada", "Ameryka Północna", 124600000, 9985000),
//	new Państwo("Meksyk", "Ameryka Północna", 18000000, 1973000),
//	new Państwo("Brazylia", "Ameryka Południowa", 210700000, 8515000),
//	new Państwo("Kolumbia", "Ameryka Południowa", 49300000, 1140000),
//	new Państwo("Maroko", "Afryka", 34000000, 447000),
//	new Państwo("Algieria", "Afryka", 41500000, 2382000),
//	new Państwo("Australia", "Australia i Oceania", 25000000, 7687000),
//	new Państwo("Nowa Zelandia", "Australia i Oceania", 4500000, 269000),
//];



function generujTab(sposóbSort) {
    tabP.sort(sposóbSort);
    html = "";
    for(let wiersz of tabP) {
        html += wiersz.dajWierszHTML();
    }
    tabela.innerHTML = html;
}
testjson()
generujTab(rosnPoAlf("kraj"));

//var testi = 0
//function testuj() {
//	var html = "Hello World! " + testi + " <" + json;
//	test.innerHTML = html;
//	testi++;
//}

