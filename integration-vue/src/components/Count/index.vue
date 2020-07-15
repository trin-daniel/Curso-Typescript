<template>
  <div>
    <h1>Contador</h1>
    <h2>{{value}}</h2>
    <button @click="setValue(-1)">Remover</button>
    <button @click="setValue(1)">Adicionar</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      value: 0
    };
  },
  methods: {
    setValue(delta: number) {
      this.value += delta;
    }
  }
});
</script>

<style>
button {
  padding: 20px;
  background-color: brown;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin: 5px;
}
</style>