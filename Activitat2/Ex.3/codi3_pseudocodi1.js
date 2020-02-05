var radi = prompt ("Introdueixi el radi sense decimals");
if (radi != null){
	var calcul1 = (3.14 * (Math.pow(radi,2)));
	var arrodonit1 = Math.round(calcul1 * 100) / 100;
	alert (arrodonit1 + " és l'area del cercle");
	var calcul2 = (2 * 3.14 * calcul1);
	var arrodonit2 = Math.round(calcul2 * 100) / 100;
	alert (arrodonit2 + " és el perimetre del cercle");
}
