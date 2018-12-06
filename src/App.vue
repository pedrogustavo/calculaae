<template>
    <div>
      <md-toolbar class="md-primary">
        <h1 class="md-title">Calcula Aê</h1>
      </md-toolbar>

    <md-app>
      <md-app-content>
        <Content />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Content from './components/Content'

export default {
  name: 'app',
  components: {
    Content
  }
}
</script>
