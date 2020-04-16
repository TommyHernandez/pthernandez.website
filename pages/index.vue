<template>
  <section class="container">
    <span class="trick-or-treat"></span>
    <Nav />
    <div class="info-column">
      <div class="bg-img head">
        <img
          src="../src/assets/me.jpg"
          alt="A Fantastic photo of me"
          title="Just me ;)"
          class="avatar"
        />
      </div>
      <div class="description">
        <h1 class="title">Pedro Tomás Hernández</h1>
        <span class="subtitle">
          &lt;
          <vue-typed-js
            :strings="[
              'PHP',
              'Responsive Design',
              'MySQL',
              'Javascript',
              'React',
              'Redux',
              'Vue',
              'Nuxt',
              'Vuex',
              'Web developer'
            ]"
            cursor-char="/"
          >
            <h2 class="typing"></h2>
          </vue-typed-js>
          &gt;
        </span>
        <p>
          Soy desarrollador web con más de 5 años de experiencia. He trabajado
          para empresas de todo tipo y para clientes de toda índole. Hago de mi
          afición una profesión, para mí el desarrollo es algo más que una forma
          de ganarme la vida.
        </p>
      </div>
    </div>
    <div class="content-area">
      <nuxt-child />
    </div>
    <footer>
      <div class="">
        Made with <img id="heart" src="../src/assets/heart.svg" /> in Granada
      </div>
      <span class="cr">
        2020 Pthernandez
      </span>
    </footer>
  </section>
</template>

<script>
import { VueTypedJs } from 'vue-typed-js'
import Nav from '~/components/Nav'

export default {
  components: {
    Nav,
    VueTypedJs
  }
}
</script>

<style lang="scss">
@import '@/assets/globals.scss';
.info-column {
  grid-area: info-column;
  @media (min-width: 1180px) {
    border-right: 2px solid $grey;
    border-left: 2px solid $grey;
  }
}
.content-area {
  grid-area: content;
  padding: 16px;
  @media (min-width: 1180px) {
    padding: 24px;
  }
}
footer {
  grid-area: footer;
  width: 100vw;
}
.container {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'nav'
    'info-column'
    'content'
    'footer';
  grid-template-rows: 60px auto auto 82px;
  background: $bgGrey;
  @media (min-width: 1180px) {
    grid-template-areas:
      'tot info-column nav'
      'tot info-column content'
      'footer footer footer';
    grid-template-columns: 5% 400px auto;
    grid-template-rows: 60px auto 82px;
  }
  @media (min-width: 1800px) {
    grid-template-columns: 2.5em 400px auto;
  }
}
.trick-or-treat {
  grid-area: tot;
  display: none;
  @media (min-width: 1180px) {
    display: block;
    height: 60px;
    background: $grey;
  }
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: bolder;
  color: $black;
  letter-spacing: 1px;
}
h2.title {
  @media (min-width: 1180px) {
    font-size: 2.4rem;
  }
}
.bg-img.head {
  position: relative;
  background: url('../src/assets/cover.jpg') center center no-repeat;
  background-size: cover;
  height: 25vh;
  margin-bottom: 5em;
  border-bottom: 4px solid $orangeB;
  @media (min-width: 1600px) {
    height: 30vh;
  }
}
.avatar {
  position: absolute;
  bottom: 0;
  display: block;
  width: 9em;
  height: 9em;
  overflow: hidden;
  border-radius: 9em;
  object-fit: cover;
  transform: translatey(50%);
  left: calc(50% - 4.559em);
  transition: all 0.3s ease-in-out;
  border: 3px solid $baseOrange;
  &:hover {
    border-radius: 10px;
  }
}
.description {
  padding: 16px;
  color: $black;
  h1 {
    font-size: 1.6rem;
  }
  .subtitle {
    display: flex;
    color: $baseOrange;
    word-spacing: 5px;
    padding-bottom: 15px;
    font-weight: 400;
    font-size: 1.2rem;
    height: 41px;
    h2 {
      display: inline;
      font-weight: 300;
      font-size: 1.2rem;
    }
  }
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
footer {
  padding: 16px 16px;
  background: $grey;
  text-align: center;
  color: $white;
  max-height: 82px;
}
/*Heart */
#heart {
  height: 22px;
}
</style>
