<template>
  <main class="flex flex-col gap-6 p-12 justify-center min-h-screen items-center bg-gradient-to-b from-blue-100 to-blue-300 flex-wrap text-gray-900">
    
    <NuxtLink to="Lab4" class="text-xl font-semibold text-blue-800 hover:text-blue-500 transition duration-300">
      Go to Previous Lab
    </NuxtLink>

    <div class="flex flex-col items-center gap-2">
      <label for="select" class="text-lg font-medium">Pick a character:</label>
      <select id="select" v-model="selectus" class="p-2 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 transition">
        <option value="Luntik">Luntik</option>
        <option value="Kappa">Kappa</option>
        <option value="Sher">Sher</option>
        <option value="Balashoff">Balashoff</option>
      </select>
    </div>

    <div v-if="selectus === 'luntik'"><Luntik /></div>
    <div v-else-if="selectus === 'Balashoff'"><Balashoff /></div>
    <div v-else-if="selectus === 'Kappa'"><Kappa /></div>
    <div v-else-if="selectus === 'Sher'"><Sher /></div>

    <div class="flex flex-col items-center gap-3">
      <input name="filter" v-model="search" placeholder="Find a character..." class="p-2 border-2 border-gray-300 rounded-lg focus:ring focus:ring-blue-300 transition w-64">
      <div class="flex flex-wrap justify-center items-center gap-4 w-full">
        <div v-for="(image, index) in finder" :key="index" class="flex justify-center">
          <img :src="image.image" class="rounded-lg shadow-md hover:scale-105 transition duration-300 w-48 h-auto object-cover">
        </div>
      </div>
    </div>

    <form class="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-80">
      <div class="flex flex-col">
        <label for="frst" class="text-sm font-medium">First number:</label>
        <input name="frst" type="number" v-model="frst" class="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 transition">
      </div>
      <div class="flex flex-col">
        <label for="scnd" class="text-sm font-medium">Second number:</label>
        <input name="scnd" type="number" v-model="scnd" class="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 transition">
      </div>
    </form>

    <div class="flex flex-wrap justify-center gap-4 mt-4">
      <button @click="set_sign('*')" class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400 transition">×</button>
      <button @click="set_sign('/')" class="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-400 transition">÷</button>
      <button @click="set_sign('+')" class="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-400 transition">+</button>
      <button @click="set_sign('-')" class="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition">−</button>
    </div>

    <p class="text-xl font-semibold mt-4">Result: <span class="text-blue-600">{{ calc }}</span></p>

  </main>
</template>

<script setup lang = "ts">
    import {ref, computed, reactive} from "vue"

    interface stking {
    name: string,
    image: string
  }

    const selectus = ref<string>('luntik')
    const search = ref<string>('ben')
    const frst = ref<number>(0)
    const scnd = ref<number>(0)
    const signn = ref<string>('')

    const filtering = reactive<stking[]>([
    {name: 'ben', image: "/img/Ben.jpg"},
    {name: 'bev', image: "/img/Beverly.jpg"},
    {name: 'bill', image: "/img/Bill.jpg"},
    {name: 'dracula', image: "/img/Dracula.jpg"},
    {name: 'henry', image: "/img/Henry.jpg"},
    {name: 'richie', image: "/img/Richie.jpg"},
    {name: 'stan', image: "/img/Stan.jpg"},
  ])

    const finder = computed( ()=> {
      return filtering.filter(img => img.name == search.value)
    }
    
    )

    const set_sign = (op:string):void => {
        signn.value = op
    }

    const calc = computed(
        ():number=> {
            switch(signn.value) {
                case "*":
                     return frst.value * scnd.value

                case "/":
                   try{
                   return parseFloat((frst.value / scnd.value).toFixed(1))
                   }
                   catch(error) {
                       console.log('not null')
                   }

                case "+":
                   return frst.value + scnd.value

                case "-":
                   return frst.value - scnd.value

                default:
                    return 0
            }
        }
    )

definePageMeta({middleware:'sidebase-auth'})
</script>