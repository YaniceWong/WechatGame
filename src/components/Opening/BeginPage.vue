<template>
  <div class="container">
    <div class="StartGame fadeInLeft animated" id='btn'>
      <button @click="StartGame" class="Start_btn"></button>
    </div>
    <div class="title" id="game_name"></div>
  </div>
</template>

<script>

export default {
  name: 'Begining',
  mounted () {
    setTimeout(() => { this.skip() }, 5000)
  },
  methods: {
    skip: function () {
      document.getElementById('game_name').className = 'fadeOutRight animated'
      document.getElementById('btn').style.display = 'block'
    },
    StartGame: function () {
      this.$router.push({name: 'GameRule'})
    }
  }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    background: url('../../assets/Opening/OpenBackground.png') no-repeat;
    background-size:100% 100%;
  }
  .title{
    width: 98.3%;
    height: 19.7%;
    position:relative;
    top: 78%;
    left: 0.8%;
    background: url('../../assets/Opening/GameName.png') no-repeat;
    background-size:100% 100%;
  }
  .StartGame{
    display: none;
    width: 55.5%;
    height: 10%;
    position: relative;
    top: 80%;
    left: 22.2%;
  }
  .Start_btn{
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 20px;
    background: url('../../assets/Opening/StartGame_btn.png') no-repeat;
    background-size:100% 100%;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-focus-ring-color: rgba(0, 0, 0, 0);
  }
</style>
