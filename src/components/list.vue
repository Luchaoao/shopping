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
    <div class="flex justify-around w-full" v-for="(item, index) in product" :key="item.id">
        <div>
            <img class="w-[250px]" src="@/assets/images/300x300.png" alt="">
        </div>
        <div class="self-center text-center">{{ item.name }}</div>
        <div class="self-center tracking-tight leading-7 flex-wrap">{{ item.description }}</div>
        <div class="self-center text-center">$ {{ item.price }}</div>
        <div class="self-center">
            <section class="mb-3 flex">
                <div class="ms-5 border mb-3 h-[35px] flex justify-center items-center rounded-l-3xl p-2 cursor-pointer">
                    <img src="@/assets/images/minus.png" alt="">
                </div>
                <input type="number" min="1" class="h-[35px] w-24 text-center border-t border-b">
                <div class="border h-[35px] flex justify-center items-center rounded-r-3xl p-2 cursor-pointer">
                    <img src="@/assets/images/plus.png" alt="">
                </div>
            </section>
            <div class="w-full flex justify-center items-center border-[#e5e7eb] bg-[#50468c] text-white rounded px-4 py-1 cursor-pointer">
                <img class="self-center" src="@/assets/images/cart.png" alt="">加入購物車
            </div>
        </div>
    </div>
</template>