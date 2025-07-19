<template>
  <div class="home-page">
    <h1>Hi, I'm Ajay Maurya</h1>
    <p>Welcome to my portfolio website!</p>
    
  </div>

  <div class="home-page-image">
    <h2>What do you want to create</h2>
    <p class="home-page-image-text">Whether you want to showcase your work in a full portfolio website, or
      create a single-page website, we've got you covered.</p>
  </div>


  <div class="q-pa-md row items-start q-gutter-md my-card-container">
    <q-card class="my-card">
      <q-card-section horizontal>
        <div class="image-container">
          <img 
            src="@/assets/images/pexels-belle-co-99483-847393.jpg" 
            alt="Portfolio Background"
            class="hero-image"
          />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section horizontal>
       <div class="image-container">
        <img 
          src="@/assets/images/pexels-ekamelev-920157.jpg" 
          alt="Portfolio Background"
          class="hero-image"
        />
       </div>
      </q-card-section>
    </q-card>


    <q-card class="my-card">
      <q-card-section horizontal>
        <div class="">
          <p class="card-title">Collection of my work</p>
          <p class="card-description">I've worked on a variety of projects, from small personal websites to large-scale enterprise applications.</p>
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section horizontal>
        <div class="">
          <p class="card-title">Welcome to my portfolio</p>
          <p class="card-description">I'm a software developer with a passion for creating beautiful and functional websites.</p>
        </div>
      </q-card-section>
    </q-card>
  </div>

  <div class="section-container">
    <h2 class="section-title">See what's possible</h2>
    <p class="section-description">Creatives around the world use Portfolio to showcase their work. See some examples below.</p>
    <q-btn
      rounded
      color="primary"
      size="lg"
      label="Get started"
      icon="arrow_forward"
    />

    <q-btn class="q-ml-md" color="white" text-color="black" label="View more examples" />
  </div>


  <div class="section_2-container">
    <div class="section-content">
      <p class="q-m-b-none title">Need inspiration?</p>
      <p class="description">See how the creatives below customized their Portfolio themes.</p>

      <div class="section-tabs">

        <q-btn
          rounded
          color="white"
          text-color="black"
          size="md"
          label="All fields"
          class="q-mr-md"
          @click="openTab('allfields')"
        />

        <q-btn
          rounded
          color="white"
          text-color="black"
          size="md"
          label="Photograpghy"
          class="q-mr-md"
          @click="openTab('photograpghy')"
        />

        <q-btn
          rounded
          color="white"
          text-color="black"
          size="md"
          label="Illustrations"
          class="q-mr-md"
          @click="openTab('illustrations')"
        />
        </div>
        <div>
          <AllFields v-if="allfields"/>
          <Photograpghy v-if="photograpghy" />
          <Illustrations v-if="illustrations" />
        </div>
    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue';
import AllFields from './../components/AllFields.vue';
import Photograpghy from './../components/Photograpghy.vue';
import Illustrations from './../components/illustrations.vue';


const allfields= ref(true);
const photograpghy = ref(false);
const illustrations = ref(false);


const openTab = (tab) => {
  if(tab == 'allfields'){
    allfields.value = true;
    photograpghy.value = false;
    illustrations.value = false; 
  } else if(tab == 'photograpghy'){
    allfields.value = false;
    photograpghy.value = true;
    illustrations.value = false;
  } else if(tab == 'illustrations'){
    allfields.value = false;
    photograpghy.value = false;
    illustrations.value = true;  
  }
};


</script>

<style scoped>
.home-page {
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 1rem;
}
h2 {
  font-weight: 100px;
}

.home-page-image-text{
  color: #474949;
  font-size: 18px;
  line-height: 1.5rem;
  margin: 0 auto 75px;
  max-width: 600px;
}
.my-card-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
}

.my-card {
  width: 100%;
  max-width: 450px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.card-title{
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}
.card-description{
  font-size: 14px;
  line-height: 1.5rem;
}

.image-container {
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-image {
  width: 100%;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section-container{
  background-color: #f0f0f0;
  padding: 2rem;
}
.section-title{
  margin-bottom: 1rem;
}

.section-description{
  margin: 0 auto;
  width:100%;
  max-width: 567px;
  margin-bottom: 1rem;
}

.section_2-container{
  background-color:  #ffffff;
}
.section-content .title{
  font-size: 56px;
  font-weight: 400; 
  margin: auto;
}

.section-content .description{
  font-size: 18px;
}

</style>
  