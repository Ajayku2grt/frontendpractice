<template>
  <div class="projects-page">
    <h1>My Projects</h1>
    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="project-links">
          <a :href="project.github" target="_blank" rel="noopener">GitHub</a>
          <a :href="project.demo" target="_blank" rel="noopener">Live Demo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project One',
          description: 'A sample project description goes here.',
          github: 'https://github.com/yourusername/project1',
          demo: 'https://project1-demo.com'
        },
        {
          id: 2,
          title: 'Project Two',
          description: 'Another project description goes here.',
          github: 'https://github.com/yourusername/project2',
          demo: 'https://project2-demo.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects-page {
  padding: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.project-links a {
  color: #42b983;
  text-decoration: none;
}

.project-links a:hover {
  text-decoration: underline;
}
</style>
