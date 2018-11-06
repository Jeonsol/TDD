import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  assignment: [
    {
      "id" : 1,
      "title" : "싸쓰",
      "description" : "배경색 예뿌주?",
      "background": true
    },
    {
      "id" : 2,
      "title" : "vuex",
      "description" : "vuex로 데이터 들어가고 있는거에욥",
      "background": false
    },
    {
      "id" : 3,
      "title" : "라우터",
      "description" : "라우터로 링크넘어가는 거에욥",
      "background": false
    }
  ]
}

const mutations = {

}

export default new Vuex.Store({
  state
})
