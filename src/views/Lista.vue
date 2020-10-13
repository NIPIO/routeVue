<template>
	<div class="col-9 m-auto">
		<ul class="list-group">
			<li 
				v-for="(item, index) of arrayOrdenado" 
				class="list-group-item d-flex justify-content-between align-items-center"
			>
				<span class="col-6">{{item.nombre}}</span>
				<span class=" badge-primary badge-pill">{{item.cantidad}}</span>
				<button class=" badge-danger badge-pill" @click="restar(index)">-</button>
				<button class=" badge-success badge-pill" @click="aumentar(index)">+</button>
			</li>
			<button class="col-12 bg-danger text-center text-white" @click='resetearTodos'><b>Reset</b></button>
		</ul>
	</div>
</template>

<script>

	import {mapState, mapMutations} from 'vuex'
	export default {
		name: 'Lista',
		computed: {
			//las va a buscar a store/index.js
			...mapState(['frutas']),
			arrayOrdenado() {
				return this.frutas.sort((a, b)=> b.cantidad - a.cantidad) //reordeno de menor a mayor(sort es de JS)
			}
		},
		methods: {
			...mapMutations(['aumentar', 'restar', 'resetearTodos']),
		}
	}
</script>