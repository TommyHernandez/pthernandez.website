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
          trabajado para clientes que van desde librerías de barrio, pequeñas
          franquicias hasta ministerios e importantes marcas de automoción.
        </p>
        <p>
          Durante mis años de experiencia he desarrollado tanto backend(PHP,
          NodeJS, Msql...) como frontend( React, Vuex ,JQuery… ) siendo esta mi
          actual rama donde mis conocimientos son más amplios y me siento más
          cómodo. Tengo experiencia organizando proyectos y liderando equipos,
          también he sido tutor y formador de alumnos en prácticas. Actualmente
          soy Frontend lead.
        </p>
      </div>
      <div class="about__skills">
        <div v-for="(tech, i) in technologies" :key="i" class="skills__tech">
          <div class="skill__name">{{ tech.name }}</div>
          <div class="skill__bg">
            <span class="skill__bar" :style="{ width: tech.percent }"></span>
            <span class="skill__percent">{{ tech.percent }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Dynamic from 'vue-material-design-icons/RocketOutline.vue';
import Responsive from 'vue-material-design-icons/Responsive.vue';
import Fast from 'vue-material-design-icons/Speedometer.vue';
import Intuitive from 'vue-material-design-icons/Forwardburger.vue';
import HighLightCard from '../../components/HighLight-card';

export default {
  name: 'Aboutme',
  components: {
    Dynamic,
    Responsive,
    Fast,
    Intuitive,
    HighLightCard,
  },
  data() {
    return {
      technologies: [
        { name: 'HTML', percent: '90%' },
        { name: 'CSS', percent: '90%' },
        { name: 'Javascript', percent: '80%' },
        { name: 'React', percent: '80%' },
        { name: 'Vue', percent: '75%' },
        { name: 'PHP', percent: '75%' },
        { name: 'UI Design', percent: '60%' },
        { name: 'SEO', percent: '70%' },
        { name: 'UX Design', percent: '60%' },
        { name: 'Java', percent: '65%' },
        { name: 'Docker', percent: '40%' },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@use '../../assets/settings/variables';
@use '../../assets/tools/mixins';
.about {
  &__title {
    @include mixins.fontBlack;
  }
  &__highlights {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  &__content-area {
    @media (min-width: 1436px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;
      grid-column-gap: 1rem;
    }
  }
  &__bio {
    padding-left: 16px;
    margin-bottom: 1.5rem;
  }
  &__skills {
    padding: 0 1rem;
  }
}
.skills__tech {
  display: flex;
  height: 28px;
  margin-bottom: 1rem;
}
.skill__name {
  display: block;
  width: 106px;
  padding: 0 8px;
  border-right: 1px solid #fff;
  background: #586c0d;
  line-height: 28px;
  color: variables.$text-white;
  @include mixins.fontBold;
  text-align: center;
  font-size: 0.9rem;
}
.skill__bg {
  background: rgba(0, 0, 0, 0.25);
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.skill__bar {
  display: block;
  width: 0px;
  background: variables.$green;
  transition: all 1s ease-in;
}
.skill__percent {
  line-height: 28px;
  padding: 0 8px;
  color: variables.$text-white;
}
</style>
