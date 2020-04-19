<template>
  <section class="contact">
    <h2 class="contact__title sect-title">Puedes encontrarme</h2>
    <p class="contact__phrase">
      Estoy presente en todas estas redes. Contáctame si tienes una buena idea y
      crees que puedo ayudarte.
    </p>
    <div class="contact__network-links">
      <ul>
        <li>
          <a href="https://github.com/TommyHernandez"> Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pedrothdc/">LinkedIn</a>
        </li>
        <li>
          <a href="https://twitter.com/pedrothdc">Twitter</a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Contact'
}
</script>
<style lang="scss" scoped>
@import '../../assets/globals.scss';
.contact__phrase {
  font-size: 1.2em;
}
.contact__network-links {
  max-width: 80%;
  margin: 1.2em auto;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      list-style: none;
      a {
        display: block;
        font-size: 1.2em;
        font-weight: bold;
        color: $black;
        transition: color 0.2s ease-in-out;
        &:hover {
          color: $orangeA;
        }
      }
    }
  }
}
</style>
