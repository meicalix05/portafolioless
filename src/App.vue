<template>
  <div id="app">
    <Header />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <footer class="footer">
      <p>&copy; 2024 Mi Portafolio. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Projects,
    Contact
  }
}
</script>