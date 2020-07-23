<template>
  <nav>
    <div class="nav-container">
      <div class="wrapper">
        <nuxt-link to="/" exact>Inicio</nuxt-link>
        <nuxt-link to="/about">Sobre mi</nuxt-link>
        <nuxt-link to="/contact">Contactame</nuxt-link>
        <nuxt-link to="/libros-recomendados">Libros recomendados</nuxt-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import '@/assets/globals.scss';
nav {
  grid-area: nav;
  position: relative;
  max-height: 60px;
  z-index: 2;
  a {
    @include fontLight;
    display: inline-block;
    text-decoration: none;
    color: #fff;
    transition: color 0.2s ease-in;
    &:hover {
      color: $orangeB;
    }
    &.nuxt-link-active {
      @include fontBold;
      color: $orangeA;
    }
    @media (min-width: 1436px) {
      margin-right: 32px;
    }
  }
  .nav-container {
    background: $grey;
    height: 60px;
    border-bottom: 3px solid $orangeB;
  }
  .wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 700px;
    margin: 0 auto;
    height: 100%;
    @media (min-width: 1336px) {
      margin: 0;
      justify-content: flex-start;
      margin-left: 24px;
    }
  }
}
</style>
