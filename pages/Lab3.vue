<script setup lang="ts">
import { reactive, ref } from 'vue';

// Реактивные данные
const showVideo = ref(false);
const selectedTrailer = ref("");

// Объект с трейлерами
const trailers = reactive([
  { name: "Original Trailer", src: "/videos/Isaac Trailer.mp4" },
  { name: "Afterbirth+", src: "/videos/Afterbirth Trailer.mp4" },
  { name: "Repentance", src: "/videos/Repentance Trailer.mp4" }
]);

definePageMeta({middleware:'sidebase-auth'})
</script>

<template>
  <div class="lab-page">
    <div class="lab-overlay">
      <h1 class="title">The Binding of Isaac Trailer</h1>

      <!-- Кнопки выбора трейлера -->
      <div class="trailer-options">
        <label v-for="(trailer, index) in trailers" :key="index">
          <input 
            type="radio" 
            :value="trailer.src" 
            v-model="selectedTrailer"
          >
          {{ trailer.name }}
        </label>
      </div>

      <!-- Кнопка показать/скрыть видео -->
      <button @click="showVideo = !showVideo" class="btn">
        {{ showVideo ? 'Hide Video' : 'Show Video' }}
      </button>

      <!-- Видео плеер -->
      <div v-if="showVideo && selectedTrailer" class="video-container">
        <video controls class="video-player">
          <source :src="selectedTrailer" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lab-page {
  background: url('~/assets/images/art.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.lab-overlay {
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  width: 90%;
  max-width: 800px;
}

.title {
  font-size: 2rem;
  color: #ffcc00;
  margin-bottom: 20px;
}

.trailer-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  color: #fff;
}

.btn {
  background: #ffcc00;
  color: #000;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  background: #ff9900;
}

.video-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.video-player {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
</style>