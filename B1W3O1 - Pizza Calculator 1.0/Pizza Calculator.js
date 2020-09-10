//Marien Horden
//Software Development
//Pizza calculator
alert('Welkom bij de Pizza calculator'); //Verwelkomt de bezoeker
alert('U kunt kiezen uit: Small/Medium/Large'); //Laat zien waar de bezoeker uit kan kiezen

const pricesmall = 6.95; //Bepaalt de prijs van een small pizza
const pricemedium = 11.50; //Bepaalt de prijs van een medium pizza
const pricelarge = 15.50; //Bepaalt de prijs van een large pizza

	smallpizza = parseInt(prompt('Hoeveel small pizza\'s wilt u?' )); //Vraagt hoeveel small pizza's de bezoeker wilt en onthoud dat
	mediumpizza = parseInt(prompt('Hoeveel medium pizza\'s wilt u?')); //Vraagt hoeveel medium pizza's de bezoeker wilt en onthoud dat
	largepizza = parseInt(prompt('Hoeveel large pizza\'s wilt u?'));  //Vraagt hoeveel large pizza's de bezoeker wilt en onthoud dat


document.write('Small Pizza:') //Toont de zin small pizza op het beeldscherm
	document.write('<br>' + smallpizza + ' x ' + pricesmall + ' = ' + (smallpizza * pricesmall)); //Toont hoeveel en hoe duur de small pizza's zijn en berekent totaal van de small pizza's

document.write('<br><br>Medium Pizza:') //Toont de zin medium pizza op het beeldscherm
	document.write('<br>' + mediumpizza + ' x ' + pricemedium + ' = ' + (mediumpizza * pricemedium)); //Toont hoeveel en hoe duur de  medium pizza's zijn en berekent het totaal van de medium pizza's

document.write('<br><br>Large Pizza:') //Toont de zin large pizza op het beeldscherm
	document.write('<br>' + largepizza + ' x ' + pricelarge + ' = ' + (largepizza * pricelarge)); //Toont hoeveel en hoe duur de large pizza's zijn en berekent het totaal van de large pizza's


var totaalsmall = smallpizza * pricesmall //Berekent en onthoud de totaal prijs van de small pizza's
var totaalmedium = mediumpizza * pricemedium //Berekent en onthoud de totaal prijs van de medium pizza's 
var totaallarge = largepizza * pricelarge //Berekent en onthoud de totaal prijs van de large pizza;s	

document.write('<br><br>Totaal:'); //Toont de zin Totaal:
	document.write('<br> Small pizza = ' + totaalsmall); //Laat de totaalprijs van de small pizza's zien
	document.write('<br> Medium pizza = ' + totaalmedium); //Laat de totaalprijs van de medium pizza's zien
	document.write('<br> Large pizza = ' + totaallarge); //Laat de totaalprijs van de large pizza's zien


var totaal = totaalsmall + totaalmedium + totaallarge //Berekent de totaalprijs 
	document.write('<br><br>' + totaalsmall + ' + ' + totaalmedium + ' + ' + totaallarge + ' = ' + totaal); //Laat  de bezoeker zien hoeveel hij moet betalen





