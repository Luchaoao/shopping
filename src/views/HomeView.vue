<script>
import normal from "@/components/normal.vue"
import list from "@/components/list.vue"

export default {
	components: {
		normal,
		list,
	},
	data() {
		return {
			arrangement: 'normal',
		};
	},
	methods: {
		chanteState(state) {
			this.arrangement = state;
		}
	},
};
</script>

<template>
	<main>
		<div class="font-bold text-3xl mt-3 ms-3">商品列表</div>
		<div class="flex justify-end me-3">
			<div class="cursor-pointer" @click="chanteState('normal')">
				<img v-if="(arrangement === 'normal')" src="@/assets/images/網狀p.png" alt="">
				<img v-else src="@/assets/images/網狀n.png" alt="">
			</div>
			<div class="cursor-pointer" @click="chanteState('list')">
				<img v-if="(arrangement === 'list')" src="@/assets/images/條列p.png" alt="">
				<img v-else src="@/assets/images/條列n.png" alt="">
			</div>
		</div>
		<div v-if="(arrangement === 'normal')" class="flex gap-5 flex-wrap justify-center mt-5">
			<normal></normal>
		</div>
		<div v-else class="flex gap-5 flex-wrap justify-center mt-5">
			<list></list>
		</div>
	</main>
</template>

<style scoped></style>