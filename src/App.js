import React from 'react';
const App = () => (
  <div className="App">
    <section className="col s12 m6 offset-m3">
			<div className="row">
		        <div className="col s12">
		        	<label for="kmLitroCarro">Quantos Quilometros o carro anda por litro</label>
		           	<input id="kmLitroCarro" type="text" />
		        </div>
	      	</div>

			<div className="row">
				<div className="col s12">
					<label for="precoGasolina">Preço litro Gasolina</label>
					<input type="text" id="precoGasolina" />
				</div>
			</div>

			<div className="row">
				<div className="col s12">
					<label for="distancia">Distancia a ser percorrida (em KM)</label>
					<input type="text" id="distancia" />
				</div>
			</div>

			<button className="btn waves-effect waves-light" >Enviar</button>
			<br />
			<p className="flow-text">Média de consumo combustível:
				<strong>
					<span id="resultadoMediaConsumo" />
					<small>litros</small>
				</strong>
			</p>
			<p className="flow-text">Média do valor a ser gasto: <strong>R$<span id="resultadoPreco"></span></strong></p>
		</section>
  </div>
)

export default App;
