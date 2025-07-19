<template>
  <div class="q-pa-md">
    <Swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide>
        <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="Mountain" style="width: 100%; height: auto;" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="Mountain" style="width: 100%; height: auto;" />
        <p>Some text about the image</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="Mountain" style="width: 100%; height: auto;" />
        <p>Another description of the image</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="Mountain" style="width: 100%; height: auto;" />
        <p>Another description of the image</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="Mountain" style="width: 100%; height: auto;" />
        <p>Another description of the image</p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const modules = [Navigation, Pagination, Scrollbar, A11y];

const onSwiper = (swiper) => console.log(swiper);
const onSlideChange = () => console.log('slide change');
</script>
