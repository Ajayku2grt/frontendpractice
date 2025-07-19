<template>
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<script>
export default {
  name: 'MainNavbar'
}
</script>
  
<style>
.navbar {
  display: flex;
  gap: 20px;
  background: #1b9aa1;
  padding: 15px 30px;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* Full width */
  z-index: 1000; /* Keep it above other content */
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.navbar a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.navbar a.router-link-active {
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.2);
}
</style> 