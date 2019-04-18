<template>
  <div class="container">
    <div class="goback">
      <button @click="ReturnFirst" class="goback_btn"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FailEnd',
  methods: {
    ReturnFirst: function () {
      this.$router.push({name: 'start'})
    }
  }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    background: url('../../assets/FirstEnd/fail.png') no-repeat;
    background-size:100% 100%;
  }
  .goback{
    width: 43.2%;
    height: 8%;
    position: relative;
    top: 78%;
    left: 27.3%;
  }
  .goback_btn{
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 20px;
    background: url('../../assets/FirstEnd/restart_btn.png') no-repeat;
    background-size:100% 100%;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-focus-ring-color: rgba(0, 0, 0, 0);
  }
</style>
