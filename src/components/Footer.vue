<template>
  <footer class="main-footer">
    <p>© 2025 Ajay Maurya | Made with <q-icon name="favorite" color="red" /> in Bharat</p>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style scoped>
.main-footer {
  background-color: #1b9aa1;
  color: white;
  text-align: center;
  padding: 15px 0;
  bottom: 0;
  width: 100%;
}
</style>
