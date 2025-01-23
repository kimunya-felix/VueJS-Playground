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

</script>
<template>
  <div>
    <h2 class="font-semibold text-2xl">The Games Stop</h2>
  </div>
  <div class="mt-2">
    <!-- grid of all games with names and year of release with an 'add to cart' button -->
     <div v-for="game in games" :key="game.id" class="flex flex-col">
      <div class="flex flex-row">
        <img :src="game.image" alt="game cover" class="w-16 h-16 object-cover" />
        <div class="ml-2">
          <h3 class="text-sm font-semibold">{{ game.name }}</h3>
          <p class="text-sm text-gray-500">{{ game.released }}</p>
        </div>
      </div>
      </div>
  </div>
</template>
