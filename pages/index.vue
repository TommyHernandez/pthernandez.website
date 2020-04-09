<template>
  <section class="container">
    <Nav />
    <div class="info-column">
      <div class="bg-img head">
        <img
          src="../src/assets/me.jpg"
          alt="A Fantastic Pedro T. Hernández foto"
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
              'Javascript',
              'React',
              'Vue',
              'Nuxt',
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
      <div class="">Made with <span id="heart"></span> in Granada</div>
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
* {
  box-sizing: border-box;
}
.info-column {
  grid-area: info-column;
  @media (min-width: 1180px) {
    margin-left: 10%;
    border-right: 2px solid #333;
    border-left: 2px solid #333;
    max-width: 550px;
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
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'nav'
    'info-column'
    'content'
    'footer';
  grid-template-rows: 60px auto auto 82px;
  background: #fbfbfb;
  @media (min-width: 1180px) {
    grid-template-areas:
      'info-column nav'
      'info-column content'
      'footer footer';
    grid-template-columns: 35% auto;
    grid-template-rows: 60px auto 82px;
  }
  @media (min-width: 1800px) {
    grid-template-columns: 550px auto;
  }
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
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
  border-bottom: 3px solid #cc6633;
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
  left: calc(50% - 4.5em);
  transition: all 0.3s ease-in-out;
  border: 3px solid #cc6633;
  &:hover {
    border-radius: 10px;
  }
}
.description {
  padding: 16px;
  h1 {
    font-size: 1.6rem;
  }
  .subtitle {
    display: flex;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
    font-weight: 300;
    font-size: 1.2rem;
    height: 41px;
    h2 {
      display: inline;
      font-weight: 300;
      font-size: 1.2rem;
    }
  }
  p {
    text-align: justify;
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
  background: #333;
  text-align: center;
  color: #fff;
  max-height: 82px;
}
/*Heart */
#heart {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 26px;
  vertical-align: middle;
}
#heart:before,
#heart:after {
  position: absolute;
  content: '';
  left: 16px;
  top: 0;
  width: 17px;
  height: 26px;
  background: #ff5252;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}
#heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
</style>
