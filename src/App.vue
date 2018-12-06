<template>
<div>
  <div id="app">
    <el-container>
      <el-row>
        <el-col :span="12" :offset="6">
          <el-header>
            <h2>Calcula Aê</h2>
          </el-header>
          <el-main>Main</el-main>
        </el-col>
      </el-row>
    </el-container>
  </div>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
