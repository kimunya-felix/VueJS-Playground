<script setup lang="ts">
  import { fetchTopGames, type Game } from '@/utils/games';
  import { ref, onMounted, computed } from 'vue';

  const games = ref<Game[]>([]);
  const searchTerm = ref('');
  const filteredGames = computed(() => {
    return games.value.filter(game =>
      game.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });

  // Fetch and assign games to games ref on component mount
  const loadGames = async () => {
    games.value = await fetchTopGames();
  }
  onMounted(async () => {
    await loadGames();
  })

</script>

<template>
  <div>
    <!-- An Overview -->
    <div>
      <h2 class="font-semibold text-2xl">The Games Stand</h2>
      <p class="mt-6">GameHub is your ultimate destination for all things gaming!
        Our web app offers a vast collection of games across various genres,
        ensuring there&apos;s something for every type of gamer. Whether you&apos;re into action-packed adventures,
        strategic puzzles, or immersive role-playing games, GameHub has it all.
      </p>
    </div>

    <!-- List of Items + Search  -->
    <!-- Search Bar -->
    <!-- search games my name -->
    <div class="mt-8">
      <input
        type="text"
        placeholder="Search for games"
        class="w-full py-2 px-4 border-2 rounded-lg focus:outline-none"
        v-model="searchTerm"
      />
    </div>
    <!-- Game List -->
     <div class="w-full py-2 px-4 mt-2 border-2 rounded-lg focus:outline-none">
       <!-- Dynamically generated game cards -->
       <div v-for="game in filteredGames" :key="game.id">
          <div class="flex items-center justify-between border-b border-gray-300 py-4">
            <div class="flex items-center">
              <!-- <img :src="game.image_url" class="h-12 w-12 object-cover rounded-lg" /> -->
              <div class="ml-4">
                <h3 class="font-semibold text-sm">{{ game.name }}</h3>
                <p class="text-sm text-gray-600">{{ game.genre }}</p>
              </div>
            </div>
          </div>
       </div>

       <!-- Pagination -->
       <!-- Add pagination functionality here -->
       <!-- Example: -->
       <!-- <div class="flex justify-center mt-8">
         <button @click="previousPage">Previous</button>
         <span class="mx-4">Page {{ currentPage }}/{{ totalPages }}</span>
         <button @click="nextPage">Next</button>
       </div> -->
     </div>
  </div>
</template>
