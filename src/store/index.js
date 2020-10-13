import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	frutas: [
  		{nombre: 'Guayaba', cantidad: 0},
  		{nombre: 'Manzana', cantidad: 0},
  		{nombre: 'Pitahaya', cantidad: 0}
  	]
  },
  mutations: {
  	aumentar(state, id) {
  		state.frutas[id].cantidad++
  	},
  	restar(state, id) {
  		state.frutas[id].cantidad--
  	},
  	resetearTodos(state) {
  		for (var i = 0; i < state.frutas.length; i++) {
  			state.frutas[i].cantidad = 0
  		}
  	}
  },
  actions: {
  },
  modules: {
  }
})
