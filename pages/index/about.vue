<template>
  <section class="about">
    <h2 class="about__title sect-title">Sobre Mi</h2>
    <div class="about__highlights">
      <HighLightCard
        title="Responsivo"
        description="Mis diseños funcionarán en cualquier dispositivo, grande o pequeño."
      >
        <Responsive />
      </HighLightCard>
      <HighLightCard
        title="Rápido"
        description="Tiempos de carga rápidos e interacción sin retardo es mi prioridad."
      >
        <Fast />
      </HighLightCard>
      <HighLightCard
        title="Intuitivo"
        description="Estoy muy centrado en UX/UI fácil de usar e intuitivo."
      >
        <Intuitive />
      </HighLightCard>

      <HighLightCard
        title="Dinámico"
        description="Las páginas web no tienen que ser estáticas, me encanta hacer que las
          páginas cobren vida."
      >
        <Dynamic />
      </HighLightCard>
    </div>
    <div class="about__content-area">
      <div class="about__bio">
        <p>
          Soy Frontend developer en Granada, desde pequeño me ha apasionado la
          tecnología. Por eso soy desarrollador web desde hace más de 5 años. He
          trabajado para clientes que van desde librerías de barrio pequeñas
          franquicias hasta Ministerios e importantes marcas de automoción.
        </p>
        <p>
          Durante mis años de experiencia he desarrollado tanto backend(PHP,
          NodeJS, Msql...) como frontend( React, Vuex ,JQuery… ) siendo esta mi
          actual rama donde mis conocimientos son más profundos. He llevado
          equipo de desarrollo y he sido tutor y formador de alumnos en
          prácticas.
        </p>
      </div>
      <div class="about__skills"></div>
    </div>
  </section>
</template>
<script>
import Dynamic from 'vue-material-design-icons/rocketOutline.vue'
import Responsive from 'vue-material-design-icons/responsive.vue'
import Fast from 'vue-material-design-icons/speedometer.vue'
import Intuitive from 'vue-material-design-icons/forwardburger.vue'
import HighLightCard from '../../components/HighLight-card'

export default {
  name: 'Aboutme',
  components: {
    Dynamic,
    Responsive,
    Fast,
    Intuitive,
    HighLightCard
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/globals.scss';
.about__title {
  @include fontBlack;
}
.about__highlights {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>
