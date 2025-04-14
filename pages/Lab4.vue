<script setup lang="ts">
import { reactive, ref, computed, watch } from "vue";

// Реактивный массив аудиофайлов
const audios = reactive([
  { name: "In the Beginning", src: "/audio/In the beginning.mp3" },
  { name: "The Binding of Isaac", src: "/audio/The Binding of Isaac.mp3" },
  { name: "Greed", src: "/audio/Greed.mp3" }
]);

// Хранит выбранный аудиофайл
const selectedAudio = ref("");

// Громкость аудио (используем v-model)
const volume = ref(0.5);

// Вычисляемое свойство для отображения названия трека
const selectedTrackName = computed(() => {
  return audios.find(audio => audio.src === selectedAudio.value)?.name || "None";
});

// Следим за изменением трека
watch(selectedAudio, (newVal) => {
  console.log("Selected track changed to:", newVal);
});

definePageMeta({middleware:'sidebase-auth'})
</script>

<template>
  <main class="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-10">
    <h1 class="text-4xl font-bold mb-6 text-gray-100">🎵 Some cool soundtracks from the game</h1>

    <!-- Карточки с аудиофайлами -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
      <div
        v-for="audio in audios"
        :key="audio.name"
        class="bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-600 hover:shadow-xl transition transform hover:scale-105 flex flex-col items-center gap-3"
      >
        <p class="text-lg font-semibold text-gray-200">{{ audio.name }}</p>

        <!-- Кнопка воспроизведения -->
        <button
          @click="selectedAudio = audio.src"
          class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
        >
          ▶ Play
        </button>
      </div>
    </div>

    <!-- Аудиоплеер -->
    <div v-if="selectedAudio" class="mt-8 p-4 bg-gray-700 rounded-lg shadow-lg border border-gray-600 w-full max-w-lg">
      <p class="text-lg font-semibold text-gray-200 mb-2">Now Playing: {{ selectedTrackName }}</p>
      <audio v-bind:src="selectedAudio" controls class="w-full" :volume="volume"></audio>

      <!-- Слайдер громкости (v-model) -->
      <div class="mt-4 flex items-center gap-2">
        <label for="volume" class="text-gray-200">🔊 Volume:</label>
        <input id="volume" type="range" min="0" max="1" step="0.05" v-model="volume" class="w-full">
      </div>
    </div>
  </main>
</template>