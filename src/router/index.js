import Vue from 'vue'
import Router from 'vue-router'
import BeginPage from '@/components/Opening/BeginPage'
import GameRule from '@/components/Opening/GameRule'
import StartPage from '@/components/FirstStage/StartPage'
import Answer from '@/components/FirstStage/AnswerPage'
import SuccessEnd from '@/components/FirstStage/SuccessEnd'
import FailEnd from '@/components/FirstStage/FailEnd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'begin',
      component: BeginPage
    },
    {
      path: '/gamerule',
      name: 'GameRule',
      component: GameRule
    },
    {
      path: '/StartFirst',
      name: 'start_first',
      component: StartPage
    },
    {
      path: '/answer',
      name: 'Answer',
      component: Answer
    },
    {
      path: '/SuccessEnd',
      name: 'SuccessEnd',
      component: SuccessEnd
    },
    {
      path: '/FailEnd',
      name: 'FailEnd',
      component: FailEnd
    }
  ]
})
