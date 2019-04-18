<template>
  <div class="container">
      <div class="answer_borad">
          <div class="backwards"><div class="backwards_text" id="count"></div></div>
          <div class="title">
              <div class="title_count" id="title_id"></div>
              <div class="title_text" id="text"></div>
          </div>
          <div class="choose fadeInLeft animated" id="choose_borad">
            <div class="btn_area">
              <button @click="JudgeA" class="choose_btn" id="choose_btnA"></button>
                <div class="symbol" id="symA"></div>
            </div>
            <div class="btn_area">
              <button @click="JudgeB" class="choose_btn" id="choose_btnB"></button>
              <div class="symbol" id="symB"></div>
            </div>
            <div class="btn_area">
              <button @click="JudgeC" class="choose_btn" id="choose_btnC"></button>
              <div class="symbol" id="symC"></div>
            </div>
          </div>
      </div>
      <div class="skip">
          <button @click="ToEnd" class="skip_btn"></button>
      </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import data from '../../../static/data.json'
var i = 10
var answer = ''
var num = 0
var CountNum = 0
var SkipCnt = 0
var CurrectCnt = 0
export default {
  name: 'SkipTp',
  mounted () {
    i = 10
    answer = ''
    num = 0
    CountNum = 0
    SkipCnt = 0
    CurrectCnt = 0
    num = this.RamdonNum(7, 20)
    this.GetTitle(num)
    this.TimeDown()
  },
  methods: {
    ToEnd: function () {
      SkipCnt = SkipCnt + 1
      if ((num < (num + 6)) && (SkipCnt < 3)) {
        num = num + 1
        this.GetTitle(num)
        i = 10
      } else {
        alert('只能跳过两次！')
      }
    },
    JudgeA: function () {
      CountNum = CountNum + 1
      var btn = document.getElementById('choose_btnA')
      var sym = document.getElementById('symA')
      btn.style.color = '#fff'
      if (answer === 'A') {
        CurrectCnt = CurrectCnt + 1
        btn.style.backgroundImage = 'url(' + require('../../assets/answer/currect_btn.png') + ')'
        sym.style.backgroundImage = 'url(' + require('../../assets/answer/bingo.png') + ')'
        sym.style.display = 'inline-block'
        setTimeout(() => { this.Restore(btn, sym) }, 500)
      } else {
        btn.style.backgroundImage = 'url(' + require('../../assets/answer/wrong_btn.png') + ')'
        sym.style.backgroundImage = 'url(' + require('../../assets/answer/wrong_symbol.png') + ')'
        sym.style.display = 'inline-block'
        setTimeout(() => { this.Restore(btn, sym) }, 500)
      }
    },
    JudgeB: function () {
      CountNum = CountNum + 1
      var btn = document.getElementById('choose_btnB')
      var sym = document.getElementById('symB')
      btn.style.color = '#fff'
      if (answer === 'B') {
        CurrectCnt = CurrectCnt + 1
        btn.style.backgroundImage = 'url(' + require('../../assets/answer/currect_btn.png') + ')'
        sym.style.backgroundImage = 'url(' + require('../../assets/answer/bingo.png') + ')'
        sym.style.display = 'inline-block'
        setTimeout(() => { this.Restore(btn, sym) }, 500)
      } else {
        btn.style.backgroundImage = 'url(' + require('../../assets/answer/wrong_btn.png') + ')'
        sym.style.backgroundImage = 'url(' + require('../../assets/answer/wrong_symbol.png') + ')'
        sym.style.display = 'inline-block'
        setTimeout(() => { this.Restore(btn, sym) }, 500)
      }
    },
    JudgeC: function () {
      CountNum = CountNum + 1
      var btn = document.getElementById('choose_btnC')
      var sym = document.getElementById('symC')
      btn.style.color = '#fff'
      if (answer === 'C') {
        CurrectCnt = CurrectCnt + 1
        btn.style.backgroundImage = 'url(' + require('../../assets/answer/currect_btn.png') + ')'
        sym.style.backgroundImage = 'url(' + require('../../assets/answer/bingo.png') + ')'
        sym.style.display = 'inline-block'
        setTimeout(() => { this.Restore(btn, sym) }, 500)
      } else {
        btn.style.backgroundImage = 'url(' + require('../../assets/answer/wrong_btn.png') + ')'
        sym.style.backgroundImage = 'url(' + require('../../assets/answer/wrong_symbol.png') + ')'
        sym.style.display = 'inline-block'
        setTimeout(() => { this.Restore(btn, sym) }, 500)
      }
    },
    Restore: function (btn, sym) {
      if (num < (num + 6)) {
        num = num + 1
        btn.style.backgroundImage = 'url(' + require('../../assets/answer/normal_btn.png') + ')'
        sym.style.display = 'none'
        btn.style.color = 'black'
        i = 10
        this.GetTitle(num)
      }
    },
    GetTitle: function (j) {
      console.log(CountNum)
      document.getElementById('title_id').innerHTML = (CountNum + 1) + '/5'
      if (CountNum === 5) {
        if (CurrectCnt > 0) {
          this.$router.push({name: 'SuccessEnd'})
        } else {
          this.$router.push({name: 'FailEnd'})
        }
        return false
      }
      document.getElementById('text').innerHTML = data[j].question
      document.getElementById('choose_btnA').innerHTML = data[j].A
      document.getElementById('choose_btnB').innerHTML = data[j].B
      document.getElementById('choose_btnC').innerHTML = data[j].C
      answer = data[j].answer
    },
    TimeDown: function () {
      if (i === 0) {
        num = num + 1
        CountNum = CountNum + 1
        this.GetTitle(num)
        i = 10
      }
      document.getElementById('count').innerHTML = i
      i = i - 1
      setTimeout(() => { this.TimeDown() }, 1000)
    },
    RamdonNum: function (n, total) {
      // num = Math.floor(Math.random() * (total - n + 1))
      num = 9
      return num
    }
  }
}

</script>

<style scoped>
@font-face {
    font-family: 'Regular';
    src: url('../../assets/font/Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Medium';
    src: url('../../assets/font/Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Semibold';
    src: url('../../assets/font/Semibold.ttf') format('truetype');
  }
.container{
    width: 100%;
    height: 100%;
    background: url('../../assets/background.png') no-repeat;
    background-size:100% 100%;
  }
.answer_borad{
    width: 80%;
    height: 57%;
    position: relative;
    top: 19%;
    left: 9.9%;
    background: url('../../assets/answer/board.png') no-repeat;
    background-size:100% 100%;
  }
  .backwards{
      width: 68%;
      height: 25%;
      position: relative;
      top: -10%;
      left: 16%;
      background: url('../../assets/answer/backwards.png') no-repeat;
      background-size:100% 100%;
    }
    .backwards_text{
      width: 62;
      height: 60%;
      position: relative;
      top: 20%;
      left: 0%;
      font-family:Semibild;
      font-size: 40px;
      color:#fff;
      text-align:center;
    }
  .title{
      width: 90%;
      height: 27%;
      position: relative;
      top: -15%;
      left: 5%;
  }
  .title_count{
      width: 12.7%;
      height: 16%;
      position: relative;
      top: 20%;
      left: 42.5%;
      font-family: Regular;
      font-size: small;
      text-align:center;
  }
  .title_text{
      width: 90%;
      height: 50%;
      position: relative;
      top: 25%;
      left: 5%;
      text-align:center;
      font-family: Medium;
  }
  .choose{
      width: 90%;
      height: 60%;
      position: relative;
      top: -16%;
      left: 5%;
  }
  .btn_area{
    width: 80%;
    height: 20%;
    margin-top: 7%;
    position: relative;
    left: 9.4%;
  }
  .choose_btn{
      width: 100%;
      height: 100%;
      color:black;
      border:0.01px solid;
      border-radius:30px;
      border-color:black;
      background: url('../../assets/answer/normal_btn.png') no-repeat;
      background-size:100% 100%;
      text-align:center;
      font-family: Regular;
      z-index:100;
      outline: none;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      -webkit-focus-ring-color: rgba(0, 0, 0, 0);
  }
  .symbol{
    width: 10%;
    height: 50%;
    display: none;
    white-space: nowrap;
    position:absolute;
    top: 25%;
    right: 8%;
    background-size:100% 100%;
    z-index:101;
  }
  .skip{
    width: 44.5%;
    height: 8%;
    position: relative;
    top: 22%;
    left: 29%;
  }
  .skip_btn{
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 20px;
    background: url('../../assets/answer/skip_btn.png') no-repeat;
    background-size:100% 100%;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-focus-ring-color: rgba(0, 0, 0, 0);
  }
</style>
