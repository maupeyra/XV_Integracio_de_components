var euros = prompt("Intodueixi una xifra per convertir a dolars", "100");
if (euros != null){
	var resultat = (euros * 1.10);
	var operacio = Math.round(resultat * 100) / 100;
		alert (euros+" euros son " + operacio + " dolars");
}
