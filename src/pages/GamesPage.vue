<script lang="ts" setup>
  import { fetchTopGames, type Game } from '@/utils/games';
  import { onMounted, ref } from 'vue'

  const games = ref<Game[]>([]);
  const loadGames = async () => {
    games.value = await fetchTopGames();
  }
  onMounted(async () => {
    await loadGames();
  })
  const addToCart = (game: Game) => {
    console.log('Adding game to cart:', game);
  }

</script>
<template>
  <div>
    <h2 class="font-semibold text-2xl">The Games Stop</h2>
  </div>
  <div class="mt-2">
    <!-- grid of all games with names and year of release with an 'add to cart' button -->
     <div v-for="game in games" :key="game.id" class="flex flex-col border border-gray-300 p-2 rounded-lg mb-2">
      <div class="flex flex-row">
        <img :src="game.image" alt="game cover" class="w-16 h-16 object-cover" />
        <div class="ml-2">
          <h3 class="text-sm font-semibold">{{ game.name }}</h3>
          <p class="text-sm text-gray-500">{{ game.released }}</p>
        </div>
      </div>
      <button @click="addToCart(game)" class="bg-slate-800 text-blue-50">Add to Cart</button>
      </div>
  </div>
</template>
