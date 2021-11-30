<template>
  <nav>
    <div class="nav-wrapper">
      <div class="burger" :class="{ expanded: showMenu }" @click="expand">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div class="wrapper" :class="{ expanded: showMenu }">
        <nuxt-link to="/" exact tabindex="1">Inicio</nuxt-link>
        <nuxt-link to="/about" tabindex="2">Sobre mi</nuxt-link>
        <nuxt-link to="/libros-recomendados" tabindex="2"
          >Libros recomendados</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    expand() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
<style lang="scss">
@use '../assets/settings/variables';
@use '../assets/tools/mixins';
nav {
  grid-area: nav;
  background: variables.$grey;
  border-bottom: 3px solid variables.$aquaGreen;
  .nav-wrapper {
    min-height: 60px;
    padding: 10px 0;
    @media (min-width: 568px) {
      padding: 0px;
    }
  }
  .burger {
    margin-left: calc(100% - 45px);
    cursor: pointer;
    @media (min-width: 568px) {
      display: none;
    }
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: variables.$background-white;
    margin: 6px 0;
    transition: 0.4s;
  }

  .expanded .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .expanded .bar2 {
    opacity: 0;
  }

  .expanded .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }

  .wrapper {
    padding: 0 8px;
    height: 0;
    margin: 0 auto;
    overflow: hidden;
    transition: all ease-in-out 0.4s;
    @media (min-width: 568px) {
      display: flex;
      align-items: center;
      height: 60px;
      margin: 0;
    }
    @media (min-width: 1366px) {
      padding-left: 24px;
      max-width: 700px;
    }
    &.expanded {
      height: 92px;
    }
    a {
      @include mixins.fontBold;
      display: block;
      margin: 0 0.7rem;
      text-decoration: none;
      color: variables.$text-white;
      transition: color 0.2s ease-in;
      &:hover {
        color: variables.$green;
      }
      &:focus {
        outline: 1px dashed variables.$border-white;
      }
      &.nuxt-link-active {
        color: variables.$green;
        text-decoration: underline;
      }
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
