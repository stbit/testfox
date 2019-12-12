<template lang="pug">
  #app
    router-view
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

@Component
export default class App extends Vue {

}
</script>

<style lang="sass">

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  display: flex
  padding: 2rem 3rem

</style>
