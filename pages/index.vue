<template>
  <div class="home">
    <div class="overlay">
      <h1 class="title">World of Isaac</h1>
      <p class="subtitle">Explore the depths, uncover secrets, and survive the nightmare.</p>
      
      <!-- Гифка Азазеля -->
      <div class="gif-container">
        <img :src="azazelGif" alt="Azazel GIF" class="gif" />
      </div>
      
      <nav class="buttons">
        <NuxtLink to="/Lab3" class="btn">Game Trailer</NuxtLink>
        <NuxtLink to="/Lab4" class="btn">Soundtracks</NuxtLink>
        <NuxtLink to="/bosses" class="btn">Bosses</NuxtLink>
        <NuxtLink to="/secrets" class="btn">Secrets</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import azazelGif from '~/assets/images/Azazel.gif';

definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateAuthenticatedTo: '/',
  },
})

const {data} = await useFetch('/api/me')

</script>

<style scoped>
.home {
  background: url('~/assets/images/art.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.overlay {
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.title {
  font-size: 3rem;
  color: #ffcc00;
  text-shadow: 2px 2px 8px black;
}

.subtitle {
  color: #fff;
  margin-bottom: 20px;
}

.gif-container {
  max-width: 300px;
  margin: 20px auto;
}

.gif {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.btn {
  background: #ffcc00;
  padding: 10px 20px;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: scale(1.1);
  background: #ff9900;
}
</style>