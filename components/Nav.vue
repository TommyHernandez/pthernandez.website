<template>
  <nav>
    <div class="wrapper">
      <nuxt-link to="/">Inicio</nuxt-link>
      <nuxt-link to="/about">Sobre mi</nuxt-link>
      <nuxt-link to="/contact">Contactame</nuxt-link>
    </div>
  </nav>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import '@/assets/globals.scss';
nav {
  grid-area: nav;
  position: sticky;
  top: 0px;
  background: $grey;
  max-height: 60px;
  z-index: 2;
  border-bottom: 3px solid $orangeB;
  a {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    transition: color 0.2s ease-in;
    &:hover {
      color: $orangeB;
    }
    @media (min-width: 1436px) {
      margin-right: 32px;
    }
  }
  .wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 700px;
    margin: 0 auto;
    height: 100%;
    @media (min-width: 1436px) {
      margin: 0;
      justify-content: flex-start;
      margin-left: 24px;
    }
  }
}
</style>
