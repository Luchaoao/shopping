<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>

<template>
    <div>
        <div class="font-bold text-3xl mt-3 ms-3 ">購物車確認</div>

        <div class="flex border-t border-b justify-around mt-5 p-2 invisible text-white">
            <div>挑選</div>
            <div>圖片</div>
            <div>名稱</div>
            <div>價錢</div>
            <div>數量</div>
        </div>
        <div class="flex border-b border-t justify-around items-center mt-5 p-5">
            <div>
                <input type="checkbox">
            </div>
            <div class="w-[100px]">
                <img src="@/assets/images/300x300.png" alt="">
            </div>
            <div>Bitcoin</div>
            <div>$500</div>
            <div class="flex">
                <div class="border h-[35px] flex justify-center items-center rounded-l-3xl p-2">
                    <img src="@/assets/images/minus.png" alt="">
                </div>
                <div class="border border-x-0 border-y-1 h-[35px] flex justify-center items-center text-xl px-1">
                    <input type="number" min="1" class="h-[30px] w-[50px] border-0 text-center" placeholder="1">
                </div>
                <div class="border h-[35px] flex justify-center items-center rounded-r-3xl p-2">
                    <img src="@/assets/images/plus.png" alt="">
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center mt-10">
            <div class="bg-red-500 p-2 ms-2 rounded text-white">回上頁繼續購買</div>
            <div class="flex flex-col me-5">
                <div class="mb-1">商品數量:2</div>
                <div class="mb-1">商品金額:$500</div>
                <div class="mb-1 bg-blue-500 p-2 text-center rounded text-white">確認購買</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>