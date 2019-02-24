<template>
    <div id="photography" class="container">
      <div class="row flat-box">
        <div class="col-md-8 picture-box">
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              <li data-target="#carousel-example-generic" data-slide-to="3"></li>
              <li data-target="#carousel-example-generic" data-slide-to="4"></li>
              <li data-target="#carousel-example-generic" data-slide-to="5"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="//ws3.sinaimg.cn/large/006tNc79gy1fikn145ge0j30p00go4qp.jpg" alt=" "></div>
              <div class="carousel-item">
                <img src="//ws2.sinaimg.cn/large/006tNc79gy1fikn1c8purj30p00go7wh.jpg" alt=" "></div>
              <div class="carousel-item">
                <img src="//ws1.sinaimg.cn/large/006tNc79gy1fikn1fukehj30p00gob29.jpg" alt=" "></div>
              <div class="carousel-item">
                <img src="//ws3.sinaimg.cn/large/006tNc79gy1fikn1nwjzfj30p00goqtg.jpg" alt=" "></div>
              <div class="carousel-item">
                <img src="//ws1.sinaimg.cn/large/006tNc79gy1fikn1tkjizj30p00go4qp.jpg" alt=" "></div>
              <div class="carousel-item">
                <img src="//ws1.sinaimg.cn/large/006tNc79gy1fikn20juelj30p00gohdt.jpg" alt=" "></div>
            </div>
            <a class="carousel-control-prev" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-4 ">
          <div class="padding-large">
            <h1>
              <v-icon name="camera-retro" scale="2" /> 摄影</h1>
            <p class="wo">旅行的途中喜欢随手拍一些照片，渐渐的也有了一个小影集。没有什么摄影技巧，只有生活和心情。世界这么美，不妨带上相机去看看。</p>
            <br>
            <div class="max62">
              <p>随着快门的开启，时间被凝固下来，作为 '此时此刻' 的记录是不可重复的，也就成为永远。</p>
              <br></div>
            <a href="http://photo.naaln.com/" title="在 Liam·why·photo™ 中浏览" target="_blank" class="btn btn-info button" style="margin-bottom: 17px;">浏览摄影作品</a>
            <br></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'photography',
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
