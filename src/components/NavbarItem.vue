<script setup lang="ts">

const emit = defineEmits(['changepage']);

const navigate = (page: string) => {
  emit('changepage', page);
}
</script>

<template>
  <!-- Vertical Navbar -->
   <Header class="bg-gray-200 w-[400px] min-w-[400px] h-screen">
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-start gap-2 p-4">
        <img src="../assets/img/game-logo.png" alt="Site Logo" class="w-10 h-10" />
        <h1 class="text-3xl font-bold ml-4">Game Lounge</h1>
      </div>

      <nav class="flex justify-around items-start flex-col font-bold text-xl gap-4 ml-4">
        <button class="m-2" @click="navigate('home')">Home</button>
        <button class="m-2" @click="navigate('games')">Games Stop</button>
        <button class="m-2" @click="navigate('cart')">Cart Page</button>
      </nav>
    </div>
   </Header>

</template>
