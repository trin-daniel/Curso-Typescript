<template>
  <div id="app">
    <Count />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Count from "./components/Count/index.vue";

@Component({
  components: { Count }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
