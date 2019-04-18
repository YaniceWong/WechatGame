<template>
  <div class="container fadeInLeft animated">
  </div>
</template>

<script>

export default {
  name: 'GameRule',
  mounted () {
    setTimeout(() => { this.Skip() }, 1000)
  },
  methods: {
    Skip: function () {
      this.$router.push({name: 'start_first'})
    }
  }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    background: url('../../assets/Opening/game_rule.png') no-repeat;
    background-size:100% 100%;
  }
</style>
