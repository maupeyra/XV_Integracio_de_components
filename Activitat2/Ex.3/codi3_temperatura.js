var valorC = prompt("Intodueixi una temperatura en graus centigrads per convertir a farenheit", "2");
if (valorC != null){
	var resultat = (valorC * 33.80);
	var operacio = Math.round(resultat * 100) / 100;
		alert (valorC+" graus centigrads son " + operacio + " farenheit");
	}