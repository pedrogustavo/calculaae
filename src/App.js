import React from 'react';
const App = () => (

  <section className="section">
    <div className="columns is-desktop">
      <div className="column is-half is-offset-one-quarter">
        <h1 className="title">Calcula aê</h1>
        <h2 className="subtitle">Saiba quanto você vai gastar com combustível</h2>

        <div className="field">
          <label className="label" htmlFor="kmLitroCarro">Quantos Quilometros seu carro anda por litro?</label>
          <p className="control">
            <input className="input" type="number" id="kmLitroCarro" placeholder="Digite o preço da gasolina" />
          </p>
        </div>

        <div className="field">
          <label className="label" htmlFor="precoGasolina">Preço da Gasolina (litro)</label>
          <p className="control">
            <input className="input" type="text" id="precoGasolina" placeholder="Digite o preço da gasolina" />
          </p>
        </div>

        <div className="field">
          <label className="label" htmlFor="distancia">Distancia a ser percorrida (em KM)</label>
          <p className="control">
            <input className="input" type="text" id="distancia" placeholder="Digite a distância percorrida" />
          </p>
        </div>

        <div className="field">
          <p className="control">
            <button className="button is-primary">Enviar</button>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default App;
