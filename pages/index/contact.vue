<template>
  <section id="contact" class="contact">
    <h2 class="contact__title sect-title">Puedes encontrarme</h2>
    <p class="contact__phrase">
      Estoy presente en todas estas redes. Contáctame si tienes una buena idea y
      crees que puedo ayudarte.
    </p>
    <div class="contact__network-links">
      <Network-card url="https://github.com/TommyHernandez">
        <Github />
      </Network-card>
      <Network-card url="https://www.linkedin.com/in/pedrothdc/">
        <Twitter />
      </Network-card>
      <Network-card url="https://twitter.com/pedrothdc">
        <Linkedin />
      </Network-card>
    </div>
  </section>
</template>
<script>
import Twitter from 'vue-material-design-icons/Twitter';
import Linkedin from 'vue-material-design-icons/Linkedin';
import Github from 'vue-material-design-icons/Github';
import NetworkCard from '~/components/Network-card';
export default {
  name: 'Contact',
  components: {
    NetworkCard,
    Twitter,
    Linkedin,
    Github
  }
};
</script>
<style lang="scss" scoped>
.contact__phrase {
  font-size: 1.2em;
}
.contact__network-links {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  @media (min-width: 568px) {
    flex-wrap: nowrap;
  }
}
</style>
