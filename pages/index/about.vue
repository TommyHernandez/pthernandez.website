<template>
  <section class="about">
    <div class="about__highlights">
      <div class="hl">
        <div class="hl__icon-rounded">
          <Responsive />
        </div>
        <h5 class="hl__title">Responsivo</h5>
        <p class="hl__description"></p>
      </div>
      <div class="hl">
        <div class="hl__icon-rounded">
          <Fast />
        </div>
        <h5 class="hl__title">Rápido</h5>
        <p class="hl__description"></p>
      </div>
      <div class="hl">
        <div class="hl__icon-rounded">
          <Intuitive />
        </div>
        <h5 class="hl__title">Intuitivo</h5>
        <p class="hl__description"></p>
      </div>
      <div class="hl">
        <div class="hl__icon-rounded">
          <Dynamic />
        </div>
        <h5 class="hl__title">Dinámico</h5>
        <p class="hl__description"></p>
      </div>
    </div>
    <div class="about__content-area">
      <div class="about__bio">
        <h2 class="about__title">Sobre Mi</h2>
        <p></p>
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

export default {
  name: 'Aboutme',
  components: {
    Dynamic,
    Responsive,
    Fast,
    Intuitive
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/globals.scss';
.about__title {
  @include fontBlack;
}
p {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
.about__highlights {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  .hl {
    flex: 1 1 100%;
    margin-bottom: 1.3em;
    padding: 16px;
    min-height: 250px;
    background: $white;
    @media (min-width: 768px) {
      max-width: 45%;
    }
    @media (min-width: 1800px) {
      max-width: 340px;
    }
  }
  .hl__icon-rounded {
    margin: 0 auto 24px auto;
    font-size: 40pt;
    color: $white;
    background: $baseOrange;
    border-radius: 57px;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .hl__title {
    color: $black;
    font-weight: 300;
    font-size: 1.2em;
    text-align: center;
  }
}
</style>
