function calculo() {
	var distancia = document.getElementById("distancia").value;
	var kmLitroCarro = document.getElementById("kmLitroCarro").value;
	var mediaConsumo = distancia / kmLitroCarro;
	var mediaConsumoFinal = mediaConsumo.toFixed(2);


	var precoGasolina = document.getElementById("precoGasolina").value;
	var precoFinal = precoGasolina * mediaConsumoFinal;
	console.log(precoFinal);

	document.getElementById("resultadoMediaConsumo").innerHTML = mediaConsumoFinal;
	document.getElementById("resultadoPreco").innerHTML = precoFinal.toFixed(2);

}
