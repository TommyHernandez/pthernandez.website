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
      :height="556"
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
import wp from '../../src/assets/wordpress.jpg';
import pixelarium from '../../src/assets/pixlarium.jpg';
import pthdc from '../../src/assets/pth.jpg';
export default {
  components: {
    Carousel3d,
    Slide,
    Card,
  },
  data() {
    return {
      isMobile: true,
      slides: [
        {
          title: 'Best Secret UI Test',
          tech: 'React + SASS(CSSGrid, Flexbox)',
          description:
            'Prueba que realice para optar al puesto de FrontEnd para Best Secret. Donde en base a un diseño teníamos que montarlo igual. Todo el proyecto está montado sobre React, en este proyecto uso books y JSX. Ataco a la Google News API. Todo el CSS esta construido con SASS desde 0. Debido a las restricciones de la News API no se puedo motar una version live del proyecto si no es en localhost.',
          urlDemo: '',
          urlCode: 'https://github.com/TommyHernandez/BSuiTest',
          urlImg: bsreact,
        },
        {
          title: 'Cristina Morillo nails',
          tech: 'Wordpress',
          description:
            'Esta ha sido hasta el momento la última web que he realizado en Wordpress.El cliente es quien la gestiona, quedando mi labor restringida al mantenimiento del servidor, dominio, HTTPS... Para hacerla hice una toma de requisitos y un documento de briefing',
          urlDemo: 'https://www.cristinamorillonails.es/',
          urlCode: '',
          urlImg: wp,
        },
        {
          title: 'Pixelarium Theme',
          tech: 'PHP + HTML + CSS',
          description:
            'Esto es un template que desarrollé para Wordpress mientras estudiaba. Parte de la base de Bootstrap 3, fué un proyecto para aprender más que para otra cosa.',
          urlDemo: '',
          urlCode: 'https://github.com/TommyHernandez/pixelariumTheme',
          urlImg: pixelarium,
        },
        {
          title: 'Pthernandez.dev',
          tech: 'Nuxt + SASS(CSSGrid, Flexbox)',
          description:
            'La web que visitas ahora mismo. He decido usar Nuxt por qe da una serie de ventajas frente a Vue solo, Nuxt me da la posibilidad de escalar la web. Y te ofrece varias cosas "out of the box"',
          urlDemo: '',
          urlCode: 'https://github.com/TommyHernandez/pthernandez.website',
          urlImg: pthdc,
        },
        {
          title: 'Arata Hub',
          tech: 'Wordpress',
          description:
            'Este es el proyecto en el que ando ahora liado. Junto con un par de amigos hemos decidido iniciar la aventura de crear un blog e ir publicando contenido relacionado con tecnología. PC, consolas, emuladores, software y novedades del mundo de la tecnología. Ya tenemos contenido y este es solo el primer paso.',
          urlDemo: 'https://aratahub.net/',
          urlCode: '',
          urlImg: wp,
        },
      ],
      slidesToShow: 3,
    };
  },
  mounted() {
    const screenSize = window.outerWidth;
    if (screenSize > 1800) {
      this.slidesToShow = 5;
    }
  },
};
</script>
<style lang="scss">
@use '../../assets/settings/variables';
.jobs {
  height: 100%;
  overflow: hidden;
  .jobs__subtitle {
    color: variables.$text-black;
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
  background-color: variables.$background-white;
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
