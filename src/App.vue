<template>
  <div class="app">
    <h1 class="row1 col12">Using Nested Routes : </h1>
    <p class="para">Nested routes allow for more complex user interfaces with
    components nested inside each other. Let’s build out a relatively
    simple use case that shows the utility of nested
    routes in Vue Router.</p>
    <router-link to="/travel" class="row1 col3">Travels</router-link>
    <router-link to="/about" class="row1 col4">About</router-link>
    <router-view class="row2 col234"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 2%;
  height: 100%;
  display: grid;
  grid-template-rows: 20% 80%;
  grid-template-columns: 25% 25% 25% 25%;
}
.para{
  color:red;
  padding-top: 125px;
  text-align: justify;
  text-justify: inter-word;
}
</style>
