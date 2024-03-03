<template>
  <header class="bg-[#1F363D] text-white">
    <div class="wrapper p-2">
      <nav class="flex">
        <RouterLink to="/" class="ms-2">Home</RouterLink>
        <RouterLink to="/cartcheck" class="ms-3">Cartcheck</RouterLink>
        <img class="w-[30px] ms-auto" src="@/assets/images/cart.svg" alt="">
      </nav>
    </div>
  </header>

  <RouterView />
</template>
