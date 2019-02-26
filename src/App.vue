<template>
  <div id="app">
    <navbar/>
      <description/>
      <travel/>
      <photography/>
      <creativity/>
      <contact/>
      <about/>
  </div>
</template>

<script>


import navbar from './components/navbar'
import description from './components/description'
import travel from './components/travel'
import photography from './components/photography'
import creativity from './components/creativity'
import contact from './components/contact'
import about from './components/about'

export default {
  name: 'App',
  components: {
    navbar,
    description,
    travel,
    photography,
    creativity,
    contact,
    about ,
  }
}
</script>

<style>
#app {
}
</style>
