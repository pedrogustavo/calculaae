<template>
  <div>
    <div class="step-1">
      <md-field>
        <label>Origem</label>
        <md-input v-model="origin" placeholder="Ponto de partida"></md-input>
      </md-field>
      <md-field>
        <label>Destino</label>
        <md-input v-model="destination" placeholder="Local de destino"></md-input>
      </md-field>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Content',
  data () {
    return {
      origin: '',
      destination: ''
    }
  }
}
</script>

