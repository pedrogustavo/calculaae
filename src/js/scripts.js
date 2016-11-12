'use strict';

function calculo() {
	var distancia = document.getElementById('distancia').value;
	var kmLitroCarro = document.getElementById('kmLitroCarro').value;
	var precoGasolina = document.getElementById('precoGasolina').value;

	if (!(kmLitroCarro.length === 0) && !(distancia.length === 0) && !(precoGasolina.length === 0)) {
		var mediaConsumo = distancia / kmLitroCarro;
		var mediaConsumoFinal = mediaConsumo.toFixed(2);

		var precoFinal = precoGasolina * mediaConsumoFinal;

		document.getElementById('resultadoMediaConsumo').innerHTML = mediaConsumoFinal;
		document.getElementById('resultadoPreco').innerHTML = precoFinal.toFixed(2);
	}
}

var btn = document.querySelector('.btn');
btn.addEventListener('click', calculo);
