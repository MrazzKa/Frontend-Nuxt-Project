<template>
  <header class="relative bg-gray-900 text-yellow-400 shadow-md z-50">
    <div class="flex items-center justify-between py-4 px-6">
      <!-- Лого -->
      <div class="flex items-center gap-4">
        <img src="~/assets/images/logo game.png" class="w-32 h-auto object-contain" alt="Tima" />
        <span class="text-xl font-bold italic">The Binding of Isaac</span>
      </div>

      <!-- Кнопка-бургер -->
      <button @click="switch_burger" class="sm:hidden text-yellow-400 text-3xl z-50">
        <span v-if="!burger">☰</span>
        <span v-else>✖</span>
      </button>

      <!-- Десктоп-меню -->
      <nav class="hidden sm:flex items-center gap-6">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <div class="relative">
          <button class="nav-link" @click="switch_submenu">Labs</button>
          <div v-show="submenu" class="submenu">
            <NuxtLink v-for="lab in labs" :key="lab.path" :to="lab.path" class="submenu-item">
              {{ lab.name }}
            </NuxtLink>
          </div>
        </div>
        <NuxtLink to="/login" class="nav-link">LogIn</NuxtLink>
        <div v-if="log_check" class="nav-link cursor-pointer" @click="signOut()">LogOut</div>
        <img v-if="log_check" :src="data?.user?.image" class="w-10 h-10 rounded-full border-2 border-yellow-500" />
      </nav>
    </div>

    <!-- Мобильное меню -->
    <div v-show="burger" class="absolute top-full left-0 w-full bg-gray-900 text-yellow-400 flex flex-col items-center py-6 border-t border-yellow-500 shadow-lg z-50">
      <NuxtLink to="/" class="burger-link" @click="closeMenus">Home</NuxtLink>
      <button class="burger-link" @click="switch_submenu">Labs</button>
      <div v-show="submenu" class="w-full flex flex-col">
        <NuxtLink v-for="lab in labs" :key="lab.path" :to="lab.path" class="burger-submenu" @click="closeMenus">
          {{ lab.name }}
        </NuxtLink>
      </div>
      <NuxtLink to="/login" class="burger-link" @click="closeMenus">LogIn</NuxtLink>
      <div v-if="log_check" class="burger-link" @click="signOut()">LogOut</div>
      <img v-if="log_check" :src="data?.user?.image" class="w-16 h-16 rounded-full mt-4 border-2 border-yellow-500" />
    </div>
  </header>

  <main class="relative p-5 bg-gray-800 min-h-screen text-yellow-400 z-10">
    <slot />
  </main>

  <footer class="relative flex justify-center gap-4 bg-gray-900 border-t border-yellow-500 px-4 py-3 z-10">
    <a v-for="icon in socialIcons" :key="icon.href" :href="icon.href" target="_blank">
      <img :src="icon.img" class="w-10 h-10 sm:w-16 sm:h-16 hover:scale-110 transition-transform" alt="Social Icon" />
    </a>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const burger = ref(false)
const submenu = ref(false)

const switch_burger = () => {
  burger.value = !burger.value
  if (!burger.value) submenu.value = false
}

const switch_submenu = () => {
  submenu.value = !submenu.value
}

const closeMenus = () => {
  burger.value = false
  submenu.value = false
}

const labs = [
  { name: 'Lab3', path: '/Lab3' },
  { name: 'Lab4', path: '/Lab4' },
  { name: 'Lab5', path: '/Lab5' },
  { name: 'Lab6', path: '/Lab6' }
]

const socialIcons = [
  { href: 'https://www.youtube.com/', img: '/youtube.png' },
  { href: 'https://www.github.com/', img: '/github.png' },
  { href: 'https://www.facebook.com/', img: '/facebook.png' }
]

// Auth logic
const { signOut, status } = useAuth()
const log_check = computed(() => status.value === 'authenticated')
const { data } = await useFetch('/api/me')
</script>

<style scoped>
.nav-link {
  @apply p-2 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 rounded-lg transition;
}

.submenu {
  @apply absolute top-full left-0 bg-gray-800 text-yellow-400 w-40 text-center shadow-md sm:w-48 rounded-md;
}

.submenu-item {
  @apply block px-4 py-2 border-b border-yellow-500 hover:bg-yellow-500 hover:text-gray-900;
}

.burger-link {
  @apply w-full text-center py-4 text-xl border-b border-yellow-500 hover:bg-yellow-500 hover:text-gray-900;
}

.burger-submenu {
  @apply w-full text-center py-3 text-lg bg-yellow-500 text-gray-900 border-b border-yellow-600 hover:bg-yellow-400;
}
</style>