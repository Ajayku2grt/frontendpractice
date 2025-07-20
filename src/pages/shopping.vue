<template>
<div>
    <div class="q-pa-md filter row">
        <div class="q-mb-lg col">
            <q-badge color="secondary" class="q-mb-lg">
            Low : {{ lazy.min }} to {{ lazy.max }} High
            </q-badge>
            <q-range
                :model-value="lazy"
                @change="val => { lazy = val }"
                :min="0"
                :max="5000"
                label
            />
        </div>

        <div class="q-gutter-sm col">
            <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="ram_4_gb" label="Ram 4gb" />
            <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="ram_8_gb" label="Ram 8gb" />
            <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="ram_16_gb" label="Ram 16gb" />
            <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="ram_32_gb" label="Ram 32gb" />
        </div>
            
    </div>
    
</div>
</template>
<script setup>
import { ref } from 'vue';

const lazy = ref({ min: 0, max: 50 });
const shape = ref('line');
</script>