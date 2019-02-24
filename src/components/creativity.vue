<template>
  <div id="creativity" class="container">
      <div class="row  flat-box">
        <div class="col-md-9 ">
          <div class="block-left">
            <h1>
              <i class="fa fa-code"></i> 极客</h1>
            <p class="wo">时常以 「伪极客」 自居，喜欢尝试新鲜的东西。追求智能化的生活，对前沿的事物充满好奇。</p>
            <br>
            <div class="row max62">
              <div class="col-md-6">
                <h3>项目</h3>
                <p>独立完成了几十个网站和项目，用实践验证心中的想法。</p>
                <div class="max75">
                  <h5>网站</h5>
                  <ul>
                    <li>六度空间 － 基于六度空间理论的关系搜索引擎</li>
                    <li>剪录 － 在线KTV，音乐编辑，打分网站</li>
                    <li>国际潜水小姐大赛 中国区官网</li></ul>
                </div>
              </div>
              <div class="col-md-6">
                <h3>工作</h3>
                <p>多年的工作经验，从北京到第五大道，积累人生的阅历。</p>
                <div class="max75">
                  <h5>经验</h5>
                  <ul>
                    <li>豆瓣 - 北京</li>
                    <li>浙报传媒集团 - 浙江</li>
                    <li>Menusifu - 美国</li></ul>
                </div>
              </div>
               <div class="modal fade" id="myprofile" tabindex="-1" role="dialog" aria-labelledby="cv" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-body">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span></button>
                      <img src="../imgs/myresume_zh.png"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 ">
          <img src="//ws3.sinaimg.cn/large/006tKfTcgy1fikpcoex4vj30aw0eiwgb.jpg"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'creativity',
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
