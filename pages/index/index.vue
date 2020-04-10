<template>
  <div class="jobs">
    <h2 class="title">Estos son algunos de mis trabajos</h2>
    <carousel-3d
      :perspective="0"
      :space="400"
      :controls-visible="true"
      :display="3"
      :height="444"
    >
      <slide v-for="(slide, i) in slides" :key="i" :index="i">
        <Card v-bind="slide" />
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import Card from '../../components/Card'
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
          tech: 'React + CSSGrid',
          description:
            'Prueba que realice para optar al puesto de FrontEnd en mi actual empresa. Todo el proyecto estámontado Sobre React, en este proyecto uso Hooks y JSX. Ataco a la Google News APIy uso SASS para el CSS, no uso ningun Framework CSS.',
          urlDemo: 'http://uitest-react.pthernandez.es',
          urlCode: 'https://github.com/TommyHernandez/BSuiTest',
          urlImg: ''
        },
        {
          title: 'Gema Abalos',
          tech: 'Wordpress',
          description:
            'Web para una abogada de mi ciudad, esta web la desarrollé en conjunto a un amigo. El diseño del logo y los colores son obra de otro amigo. Este fue uno demis primeros proyectos y aun sigue en pié.',
          urlDemo: 'https://gemaabalosmunoz.com/',
          urlCode: '',
          urlImg: ''
        },
        {
          title: 'Crysmrnails',
          tech: 'Wordpress',
          description:
            'Está ha sido hasta el momento la ultima web que he realizado en Wordpress. A diferencia de lade Gema en esta es el cliente el que lagestiona, quedando mi labor restringida al mantenimiento del servidor.',
          urlDemo: 'https://www.crysmrnails.es/',
          urlCode: '',
          urlImg: ''
        },
        {
          title: 'New Best Secret UI Test',
          tech: 'Vue + CSSGrid',
          description:
            'Esta es una versión renovada del primer test que hice. Esta vez con un diseño más completo y bonito. Uso Vue, SASS para el CSS y la News API de Google. Como la ves anterior,nada de Frameworks CSS',
          urlDemo: 'http://uitest-vue.pthernandez.es',
          urlCode: '',
          urlImg: ''
        },
        {
          title: 'Pixelarium Theme',
          tech: 'PHP + HTML + CSS',
          description:
            'Esto es un template que desarrollé para Wordpress mientras estudiaba. Parte de la base de Bootstrap 3, fué un proyecto para aprender más que para otra cosa.',
          urlDemo: '',
          urlCode: 'https://github.com/TommyHernandez/pixelariumTheme',
          urlImg: ''
        },
        {
          title: 'Pthernandez.es',
          tech: 'Nuxt + CSSgrid',
          description:
            'La web que visitas ahora mismo. Para esta web no he usado ningun Framework CSS. He decido usar Nuxt por qe dá una serie de ventajas frente a Vue solo, Nuxt me da la posibilidad de escalar la web.',
          urlDemo: '',
          urlCode: 'https://github.com/TommyHernandez/pthernandez.website',
          urlImg: ''
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.jobs {
  height: 100%;
  overflow: hidden;
  .title {
    margin-bottom: 1em;
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
}
</style>
