<template>
   <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="300px"
      class="bg-primary text-white shadow-1 rounded-borders"
    >
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
        <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
      </template>

      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          "Transforming Ideas Into Stunning Web Experiences."
          (Perfect for a portfolio or tech project)
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
          "Code. Create. Inspire."
            (Short and impactful tagline)
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
            "Your Vision, Our Innovation."
(Good for showcasing creativity or projects)
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
         "Building the Future, One Line of Code at a Time."
(Great for software developers and tech portfolios)
        </div>

        <img
            src="https://cdn.quasar.dev/img/mountains.jpg"
            class="q-mt-md"
            style="max-width: 100%; max-height: 200px; object-fit: cover;">

      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const slide = ref('style')
</script>