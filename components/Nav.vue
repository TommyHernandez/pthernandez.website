<template>
  <nav>
    <div class="wrapper">
      <nuxt-link to="/">Inicio</nuxt-link>
      <nuxt-link to="/about">Sobre mi</nuxt-link>
      <nuxt-link to="/contact">Donde encontrarme</nuxt-link>
    </div>
  </nav>
</template>
<script>
export default {}
</script>
<style lang="scss">
nav {
  grid-area: nav;
  background: #333;
  max-height: 60px;
  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.2s ease-in;
    &:hover {
      color: #cc6633;
    }
  }
  .wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 700px;
    margin: 0 auto;
    height: 100%;
    @media (min-width: 1440px) {
      margin: 0;
    }
  }
}
</style>
