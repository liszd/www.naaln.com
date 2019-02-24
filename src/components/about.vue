<template>
    <div id="about" class="container">
      <div class="row  flat-box">
        <div class="col-md-12 text-center">
          <div class="padding-large">
            <h1>关于</h1></div>
          <div>
            <div>
              <p>网站的基本样式参考了
                <a src="http://www.dandyweng.com/">Dandy</a>的主页，自己陆续设计过几个，发觉都没有这个来得满意。</p>
              <p>趁着 Bootstrap 4 发布之际，更新了自己的版本，并且加入了扁平化的设计。</p>
              <p>该网页采用栅格化
                <a href="http://www.responsinator.com/?url=www.naaln.com" target="_blank" title="看看这个网站在不同分辨率下的表现">响应式</a>布局，应用了多种实验性 CSS 元素和大量动画效果，</p>
              <p>并支持 Retina 高清屏幕和 iOS Web App，</p>
              <p>还有基于 HTML 5 的离线缓存和 Canvas 绘图等技术。</p>
              <br></div>
            <div class="licience">
              <p>Copyright © 2010 - 2019 naaln.com. All Rights Reserved.</p>
              <p>Design By
                <a src="http://www.dandyweng.com/">Dandy</a>&
                <a href="http://www.naaln.com/">Liam</a> Hosted by
                <a href="https://pages.coding.me">Coding Pages</a></p>
              <p>京ICP备14007177号</p>
            </div>
            <div id="back-to-top">
              <svg id="rocket" version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 64 64">
                <path fill="#CCCCCC" d="M42.057,37.732c0,0,4.139-25.58-9.78-36.207c-0.307-0.233-0.573-0.322-0.802-0.329
                c-0.227,0.002-0.493,0.083-0.796,0.311c-13.676,10.31-8.95,35.992-8.95,35.992c-10.18,8-7.703,9.151-1.894,23.262
                c1.108,2.693,3.048,2.06,3.926,0.115c0.877-1.943,2.815-6.232,2.815-6.232l11.029,0.128c0,0,2.035,4.334,2.959,6.298
                c0.922,1.965,2.877,2.644,3.924-0.024C49.974,47.064,52.423,45.969,42.057,37.732z M31.726,23.155
                c-2.546-0.03-4.633-2.118-4.664-4.665c-0.029-2.547,2.012-4.587,4.559-4.558c2.546,0.029,4.634,2.117,4.663,4.664
                C36.314,21.143,34.272,23.184,31.726,23.155z">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'about',
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
