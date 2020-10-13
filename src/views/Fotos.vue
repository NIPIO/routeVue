<template>
  <div>
  	<div>
	    <h1>GALERIA DE FOTOS </h1>
	      <router-link :to="{ name: 'fotos', params: {id : item} }" v-for="(item, index) of fotosArreglo" :key="index">
	      	<button class="btn btn-info">foto {{item}}</button>
	      </router-link>
	    <Fotografias/>
  	</div>

	<div>
	    <button  class="btn btn-sm btn-info" @click='home'>HOME</button>
	    <button  class="btn btn-sm btn-danger" @click='anterior'>ANTERIOR</button>
	    <button  class="btn btn-sm btn-success" @click='siguiente'>SIGUIENTE</button>
	</div>
  </div>
</template>



<script>
// @ is an alias to /src
import Fotografias from '@/components/Fotografias.vue'

export default {
  name: 'Fotos',
  components: {
    Fotografias
  },
  data() {
  	return {
	  	fotosArreglo: [1,2,3]
  	}
  },
  methods:{
  	home() {
  		this.$router.push('/')
  	},
  	anterior() {
  		this.$router.go(-1)
  	},
  	siguiente() {
  		this.$router.go(1)
  	}
  }
}
</script>
