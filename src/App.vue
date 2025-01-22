<script setup lang="ts">
import NavbarItem from './components/NavbarItem.vue';
import CartPage from './pages/CartPage.vue';
import GamesPage from './pages/GamesPage.vue';
import HomePage from './pages/HomePage.vue';
import { ref } from 'vue';

const currentPage = ref('home');
const changepage = (page: string) => {
  currentPage.value = page;
};

</script>

<template>
  <div class="flex">
    <!-- Sidebar -->
    <NavbarItem @changepage="changepage"/>
    <!-- Main Content -->
     <main class="flex flex-col m-7">
        <div v-if="currentPage === 'home'">
          <HomePage />
        </div>

        <div v-if="currentPage === 'games'">
          <GamesPage />
        </div>

        <div v-if="currentPage === 'cart'">
          <CartPage />
        </div>
      </main>
  </div>


</template>

<style scoped>

</style>
