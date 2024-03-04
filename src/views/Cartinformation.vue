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
        <div class="font-bold text-3xl mt-3 ms-3 ">購買確認及填寫資訊</div>
        <div class="flex border-b border-t justify-around items-center mt-5 p-5">
            <div class="w-[100px]">
                <img src="@/assets/images/300x300.png" alt="">
            </div>
            <div>Bitcoin</div>
            <div>$500</div>
        </div>
        <form action="">
            <div>
                <label for="name" class="block mb-2 text-lg font-bold px-5 mt-10">姓名</label>
                <div>
                    <input type="text" class=" w-[90%] border border-gray-400 ms-5 p-1">
                </div>
            </div>
            <div>
                <label for="phone" class="block mb-2 text-lg font-bold px-5 mt-3">電話</label>
                <div>
                    <input type="text" class=" w-[90%] border border-gray-400 ms-5 p-1">
                </div>
            </div>
            <div>
                <label for="address" class="block mb-2 text-lg font-bold px-5 mt-3">地址</label>
                <div>
                    <input type="text" class=" w-[90%] border border-gray-400 ms-5 p-1">
                </div>
            </div>
            <div>
                <label for="email" class="block mb-2 text-lg font-bold px-5 mt-3">信箱</label>
                <div>
                    <input type="email" class=" w-[90%] border border-gray-400 ms-5 p-1">
                </div>
            </div>
            <div>
                <label for="payment" class="block mb-2 text-lg font-bold px-5 mt-3">付款方式</label>
                <div class="flex gap-5 px-5">
                    <div class="flex items-center">
                        <input type="radio" id="paymentMethod1" class="mr-2" required="" value="信用卡">
                        <label for="paymentMethod1">信用卡</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" id="paymentMethod2" class="mr-2" required="" value="貨到付款">
                        <label for="paymentMethod2">貨到付款</label>
                    </div>
                </div>
            </div>
            <div class="mb-6 px-5">
                <label for="shoppingMethod" class="block mb-2 text-lg font-bold mt-3">運送方式</label>
                <div class="flex gap-5">
                    <div class="flex items-center">
                        <input type="radio" id="shoppingMethod1" class="mr-2" required="" value="宅配">
                        <label for="shoppingMethod1">宅配</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" id="shoppingMethod2" class="mr-2" required="" value="超商取貨">
                        <label for="shoppingMethod2">超商取貨</label>
                    </div>
                </div>
            </div>
        </form>
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