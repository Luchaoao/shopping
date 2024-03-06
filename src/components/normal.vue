<script>
export default {
    data() {
        return {
            product: [],
        }
    },
    mounted() {
        fetch('./MOCK_DATA.json')
            .then(res => res.json())
            .then(data => (this.product = data))
            .catch(error => console.error(error));
    },
}
</script>

<template>
    <div class="w-1/6 border-[1px] rounded-lg flex flex-col mb-5" v-for="(item, index) in product" :key="item.id">
				<div>
					<div>
						<img class="rounded-t-lg w-full" src="@/assets/images/300x300.png" alt="">
					</div>
					<div class="bg-slate-100 h-[250px] bg-opacity-30 pl-3 flex flex-col gap-3 pt-3">
						<div class="font-bold text-2xl">{{ item.name }}</div>
						<div>{{ item.description }}</div>
						<div>$ {{ item.price }}</div>
						<div class="flex mb-2">數量：
							<div class="ms-5 border mb-3 h-[35px] flex justify-center items-center rounded-l-3xl p-2 cursor-pointer">
								<img src="@/assets/images/minus.png" alt="">
							</div>
							<div
								class="border border-x-0 border-y-1 h-[35px] flex justify-center items-center text-xl px-1">
								<input type="number" min="1" class="h-[30px] w-[100px] border-0 text-center"
									placeholder="1">
							</div>
							<div class="border h-[35px] flex justify-center items-center rounded-r-3xl p-2 cursor-pointer">
								<img src="@/assets/images/plus.png" alt="">
							</div>
						</div>
					</div>
					<div
						class="w-full flex justify-center items-center border-[#e5e7eb] bg-[#50468c] text-white rounded-b-lg px-4 py-1 cursor-pointer">
						<img src="@/assets/images/cart.png" alt="">
						加入購物車
					</div>
				</div>
			</div>
</template>