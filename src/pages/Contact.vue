<template>
  <div class="contact-page">
    <div class="contact-content">
      <img src="@/assets/IMG_20190917_184726_467.jpg"
           alt="Contact Image" class="contact-image" />


      <p>Get in touch with me through any of these channels:</p>
      <div class="contact-info">
        <p><strong>Email:</strong> your.email@example.com</p>
        <p><strong>LinkedIn:</strong> linkedin.com/in/yourprofile</p>
        <p><strong>GitHub:</strong> github.com/yourusername</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
body {
  padding: 6rem 2rem 2rem;
}
.contact-page {
  padding: 2rem;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-info {
  text-align: left;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.contact-image {
  border-radius : 8px
}

</style>
