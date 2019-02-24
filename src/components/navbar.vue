<template>
    <nav class="navbar fixed-top navbar-dark bg-inverse ">
      <div class="container"  id="navbar">
        <ul  class="navbar-nav  flex-row">
          <li class="nav-item">
            <a class="nav-link" href="#description">简述</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#travel0">旅行</a></li>
          <li class="nav-item">
            <a class="nav-link" href="#photography0">摄影</a></li>
          <li class="nav-item">
            <a class="nav-link" href="#creativity0">极客</a></li>
          <li class="nav-item">
            <a class="nav-link" href="#contact0">联系</a></li>
          <li class="nav-item max26">
            <a class="nav-link" href="#about0">关于</a></li>
          <li class="nav-item  max34">
            <a class="nav-link">|</a>
          </li>
          <li class="nav-item  max34">
            <a class="nav-link" href="http://blog.naaln.com" target="_blank">博客</a></li>
          <li class="nav-item  max34">
            <a class="nav-link" href="http://photo.naaln.com" target="_blank">相册</a></li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
