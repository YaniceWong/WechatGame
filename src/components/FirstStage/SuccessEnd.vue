<template>
  <div class="container">
    <div class="goto">
      <button class="goto_btn"></button>
    </div>
  </div>
</template>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    background: url('../../assets/FirstEnd/success.png') no-repeat;
    background-size:100% 100%;
  }
  .goto{
    width: 43.2%;
    height: 8%;
    position: relative;
    top: 78%;
    left: 27.3%;
  }
  .goto_btn{
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 20px;
    background: url('../../assets/FirstEnd/ToSecond_btn.png') no-repeat;
    background-size:100% 100%;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-focus-ring-color: rgba(0, 0, 0, 0);
  }
</style>
