<template>
  <div>
    <div class="step-1">
      <form class="md-layout" @submit.prevent="getDistance">
        <md-field>
          <label>Origem</label>
          <md-input v-model="origin" placeholder="Ponto de partida" required></md-input>
        </md-field>
        <md-field>
          <label>Destino</label>
          <md-input v-model="destination" placeholder="Local de destino" required></md-input>
        </md-field>
        <md-button class="md-raised md-primary" type="submit">Vamos lá!</md-button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Content',
  data () {
    return {
      origin: '',
      destination: ''
    }
  },
  methods: {
    getDistance () {
      if (this.origin.length > 0 && this.destination.length > 0) {
        axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${this.origin}&destinations=${this.destination}&key=AIzaSyBelv2m9VnFqBZJaJl3j2ZUvTztsdb8OFY`, {
          withCredentials: true,
          crossdomain: true
        })
          .then(response => {
            console.log(response.data)
          })
          .catch(error => console.log(error))
      }
    }
  }
}
</script>

