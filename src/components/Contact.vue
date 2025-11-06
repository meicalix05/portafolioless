<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Contacto</h2>
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea id="message" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Enviar Mensaje</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>