import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  showLayer: false,
  selectedDate: '',
  today: '',
  headerDate: ''
}
const mutations = {}

export default new Vuex.Store({
  state,
  mutations
})
