<template>
  <header class="header">
    <nav class="nav">
      <div class="container">
        <div class="logo">
          <h2>Maria Elena Calix Madrid</h2>
        </div>
        <ul class="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre Mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background: #2c3e50;
  color: white;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo h2 {
  margin: 0;
  color: #3498db;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #3498db;
}
</style>