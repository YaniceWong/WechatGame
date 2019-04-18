<template>
  <div class="container">
    <div class="game_title"></div>
    <div class="game_rule"></div>
    <div class="start">
      <button @click="start" class="start_btn"></button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StartPage',
  methods: {
    start: function () {
      this.$router.push({name: 'Answer'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    width: 100%;
    height: 100%;
    background: url('../../assets/background.png') no-repeat;
    background-size:100% 100%;
  }
  .game_title{
    width: 84%;
    height: 25%;
    position: relative;
    top:10%;
    left: 9.3%;
    background: url('../../assets/StartFirst/slogan.png') no-repeat;
    background-size:100% 100%;
  }
  .game_rule{
    width: 72%;
    height: 40%;
    position: relative;
    top:10%;
    left: 14%;
    background: url('../../assets/StartFirst/game_rule.png') no-repeat;
    background-size:100% 100%;
  }
  .start{
    width: 55.5%;
    height: 10%;
    position: relative;
    top: 14%;
    left: 22.2%;
  }
  .start_btn{
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 20px;
    background: url('../../assets/StartFirst/start_btn.png') no-repeat;
    background-size:100% 100%;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-focus-ring-color: rgba(0, 0, 0, 0);
  }
</style>
