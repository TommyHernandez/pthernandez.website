<template>
  <div class="jobs">
    <h2 class="jobs__title sect-title">Estos son algunos de mis trabajos</h2>
    <h3 class="jobs__subtitle">
      Desarrollados durante mi tiempo como freelancer o pruebas técnicas de
      empresas o simplemente como entretenimiento
    </h3>
    <carousel-3d
      :perspective="0"
      :space="425"
      :controls-visible="true"
      :display="slidesToShow"
      :height="495"
    >
      <slide v-for="(slide, i) in slides" :key="i" :index="i">
        <Card v-bind="slide" />
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import Card from '../../components/Card';
import bsreact from '../../src/assets/bs-react.jpg';
import bsvue from '../../src/assets/bs-vue.jpg';
import wp from '../../src/assets/wordpress.jpg';
import pixelarium from '../../src/assets/pixlarium.jpg';
import pthdc from '../../src/assets/pth.jpg';
export default {
  components: {
    Carousel3d,
    Slide,
    Card
  },
  data() {
    return {
      isMobile: true,
      slides: [
        {
          title: 'Best Secret UI Test',
          tech: 'React + SASS(CSSGrid, Flexbox)',
          description:
            'Prueba que realice para optar al puesto de FrontEnd en mi actual empresa. Todo el proyecto estámontado Sobre React, en este proyecto uso Hooks y JSX. Ataco a la Google News API. Todo el CSS esta construido con SASS desde 0.',
          urlDemo: '',
          urlCode: 'https://github.com/TommyHernandez/BSuiTest',
          urlImg: bsreact
        },
        {
          title: 'Crysmrnails',
          tech: 'Wordpress',
          description:
            'Está ha sido hasta el momento la ultima web que he realizado en Wordpress. A diferencia de la web de Gema en esta el cliente es quien lagestiona, quedando mi labor restringida al mantenimiento del servidor, dominio, HTTPS...',
          urlDemo: 'https://www.crysmrnails.es/',
          urlCode: '',
          urlImg: wp
        },
        {
          title: 'New Best Secret UI Test',
          tech: 'Vue + SASS(CSSGrid, Flexbox)',
          description:
            'Esta es una versión renovada del primer test que hice. Esta vez con un diseño más completo y bonito. Uso Vue, SASS para el CSS y la News API de Google. Como la ves anterior,nada de Frameworks CSS',
          urlDemo: 'http://uitest-vue.pthernandez.es',
          urlCode: 'https://github.com/TommyHernandez/BSuiTest-vue',
          urlImg: bsvue
        },
        {
          title: 'Pixelarium Theme',
          tech: 'PHP + HTML + CSS',
          description:
            'Esto es un template que desarrollé para Wordpress mientras estudiaba. Parte de la base de Bootstrap 3, fué un proyecto para aprender más que para otra cosa.',
          urlDemo: '',
          urlCode: 'https://github.com/TommyHernandez/pixelariumTheme',
          urlImg: pixelarium
        },
        {
          title: 'Pthernandez.es',
          tech: 'Nuxt + SASS(CSSGrid, Flexbox)',
          description:
            'La web que visitas ahora mismo. Para esta web no he usado ningun Framework CSS. He decido usar Nuxt por qe dá una serie de ventajas frente a Vue solo, Nuxt me da la posibilidad de escalar la web.',
          urlDemo: '',
          urlCode: 'https://github.com/TommyHernandez/pthernandez.website',
          urlImg: pthdc
        }
      ],
      slidesToShow: 3
    };
  },
  mounted() {
    const screenSize = window.outerWidth;
    if (screenSize > 1800) {
      this.slidesToShow = 5;
    }
  }
};
</script>
<style lang="scss">
@import '@/assets/globals.scss';
.jobs {
  height: 100%;
  overflow: hidden;
  .jobs__subtitle {
    color: $orangeA;
    font-weight: 300;
    margin-bottom: 1.2em;
    font-size: 0.9rem;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
}
.carousel-3d-container {
  overflow: visible !important;
}
.carousel-3d-slide {
  background: none;
  border: none;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border: none;
}
a.next,
a.prev {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}
</style>
