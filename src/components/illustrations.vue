<template>
    <div class="q-pa-md example-row-equal-width">
        <div class="row q-gutter-md q-mb-md card-details">
            <q-card class="col card-gradient-1">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" 
                    alt="Mountain" />
                    <p class="card-title">Majestic Mountain Escape</p>
                    <p>Experience the serene beauty of snow-covered peaks and lush green valleys.</p>

            </q-card>

            <q-card class="col card-gradient-2">
                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000" 
                    alt="Mountain" />
                    <p class="card-title">Nature’s Canvas</p>
                    <p>A breathtaking blend of nature’s colors and textures that inspire peace.</p>
            </q-card>

            <q-card class="col card-gradient-3">
                <img src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6" 
                    alt="Mountain" />
                    <p class="card-title">Alpine Adventure</p>
                    <p>Explore the endless wonders of mountain landscapes and fresh alpine air.</p>

            </q-card>
        </div>

        <div class="row q-gutter-md q-mb-md card-details">
            <q-card class="col">
                <img src="@/assets/images/pexels-belle-co-99483-847393.jpg" 
                    alt="Mountain" />
                    <p class="card-title">Ocean Explorer</p>
            <p>Dive into the crystal-clear waters and discover marine life up close.</p>
            </q-card>

            <q-card class="col">
                <img src="@/assets/images/pexels-ekamelev-920157.jpg" 
                    alt="Mountain" />
                    <p class="card-title">Underwater Gems</p>
<p>The vibrant corals and aquatic creatures showcase life beneath the waves.</p>
            </q-card>

            <q-card class="col">
                <img src="@/assets/images/pexels-souvenirpixels-417074.jpg" 
                    alt="Mountain" />
                    <p class="card-title">Lake of Dreams</p>
                    <p>Experience the tranquility of a serene lake surrounded by lush forests.</p>

            </q-card>
        </div>
    </div>
</template>
<script setup>


</script>
<style scoped>
.card-details .q-card {
    background-color: #f2e9e912;
    border: 1px solid #ccc;
    padding: 16px;
    text-align: center;
    font-size: 18px;
}

.q-card img {
    width: 100%;
    height: 269px; /* fixed height */
    object-fit: cover; /* crops image but keeps aspect ratio */
    border-radius: 5px;
}

.card-gradient-1{
    background: linear-gradient(-45deg, #34ebc0, #34ebc0, #ffdde1, #fd9a9e, #ebc334);
    background-size: 400% 400%;
    animation: gradientBG 12s ease infinite;
    border-radius: 8px;
}

.card-gradient-2{
  background: linear-gradient(-45deg, #a1c4fd, #c2e9fb, #ffdde1, #ff9a9e, #84fab0);
  background-size: 400% 400%;
  animation: gradientBG 12s ease infinite;
  border-radius: 8px; 
}

.card-gradient-3{
  background: linear-gradient(-45deg, #34cdeb, #c2e9fb, #ffdde1, #3462eb, #84fab0);
  background-size: 400% 400%;
  animation: gradientBG 12s ease infinite;
  border-radius: 8px; 
}

</style>

