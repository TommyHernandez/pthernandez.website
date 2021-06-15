<template>
  <section class="container">
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
              'Docker',
              'Javascript',
              'React',
              'UX',
              'Vue',
              'Nuxt',
              'Web developer',
            ]"
            cursor-char="/"
          >
            <h2 class="typing"></h2>
          </vue-typed-js>
          &gt;
        </span>
        <p>
          Llevo 5 años dedicandome al desarrollo. Soy un apasionado de la
          tecnología que ha tenido la oportunidad de ir creciendo en cada una de
          las empresas por las que ha pasado. He podido trabajar para clientes
          muy variados y he realizado labores variadas dentro del mundo del
          desarrollo. Me gusta el código limpio y facil de seguir y por supuesto
          seguro.
        </p>
      </div>
      <div class="network-section">
        <a href="https://github.com/TommyHernandez">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/pedrothdc/">
          <Linkedin />
        </a>
      </div>
    </div>
    <div class="content-area">
      <nuxt-child />
    </div>
    <footer>
      <span>
        Made with <img id="heart" src="../src/assets/heart.svg" /> in Granada
      </span>
      <span class="cr">{{ year }} Pthernandez</span>
    </footer>
  </section>
</template>

<script>
import { VueTypedJs } from 'vue-typed-js';
import Linkedin from 'vue-material-design-icons/Linkedin';
import Github from 'vue-material-design-icons/Github';
import Nav from '~/components/Nav';

export default {
  components: {
    Nav,
    VueTypedJs,
    Linkedin,
    Github,
  },
  data() {
    return {
      year: new Date().year,
    };
  },
};
</script>

<style lang="scss">
@use '../assets/settings/variables';
@use '../assets/tools/mixins';
h1,
h2,
h3 {
  color: variables.$darkPurple;
}
.info-column {
  grid-area: info-column;
  @media (min-width: 1180px) {
    border-right: 2px solid variables.$grey;
    border-left: 2px solid variables.$grey;
  }
}
.content-area {
  grid-area: content;
  padding: 16px;
  overflow-y: scroll;
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
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'nav'
    'info-column'
    'content'
    'footer';
  grid-template-rows: auto auto auto 40px;
  background: variables.$background-grey;
  overflow-x: hidden;
  @media (min-width: 1180px) {
    grid-template-areas:
      'info-column nav'
      'info-column content'
      'footer footer';
    grid-template-columns: 400px auto;
    grid-template-rows: 60px auto 50px;
    overflow: hidden;
  }
  @media (min-width: 1800px) {
    grid-template-columns: 400px auto;
  }
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: bolder;
  letter-spacing: 1px;
}
.sect-title {
  @include mixins.fontBlack;
  margin-bottom: 16px;
  letter-spacing: 1px;
}
h2.title {
  @media (min-width: 1180px) {
    font-size: 2.4rem;
  }
}
.bg-img.head {
  position: relative;
  background: url('../src/assets/coverx2.jpg') center center no-repeat;
  background-size: cover;
  height: 25vh;
  margin-bottom: 5em;
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
  border: 1px solid variables.$aquaGreen;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  &:hover {
    border-radius: 10px;
  }
}
.description {
  padding: 16px;
  color: variables.$text-black;
  h1 {
    font-size: 1.6rem;
  }
  .subtitle {
    display: flex;
    color: variables.$green;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: variables.$grey;
  text-align: center;
  color: variables.$text-white;
  > div {
    padding-bottom: 8px;
  }
}
/*Heart */
#heart {
  height: 22px;
  vertical-align: middle;
}
.network-section {
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: inline-block;
    font-size: 2.4rem;
    color: variables.$text-black;
    margin: 0 12px;
    transition: color ease-in 0.2s;
    &:hover {
      color: variables.$green;
    }
  }
}
</style>
