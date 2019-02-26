<template>
    <div id="travel" class="container">
      <div class="row flat-box">
        <div class="col-md-6 ">
          <h1>
            <v-icon name="plane-departure" scale="2" /> 旅行</h1>
          <p class="wo">经常旅行的人可能会发现，在旅行途中，对于自己和身边的人以及这个世界，慢慢地会有重新的审视。世界这么大，我一直在路上。</p>
          <br>
          <p class="wo">要有光， 在路上， 奢与简， 体验者，
            <br>巴别塔， 陌生人， 无尽欢， 因有梦。</p>
          <br>
          <button type="button" class="btn btn-info" style="margin-bottom: 17px;" data-toggle="modal" data-target="#myworld">世界的轨迹</button>
          <!-- Modal -->
          <div class="modal fade" id="myworld" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg flex" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    <span class="sr-only">Close</span></button>
                  <div id="world-map" style=" height: 400px"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal End --></div>
        <div class="col-md-6 map">
          <div id="china-map"></div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'travel'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
