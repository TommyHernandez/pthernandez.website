<template>
  <div class="hl">
    <div class="hl__icon-rounded">
      <slot></slot>
    </div>
    <h5 class="hl__title">{{ title }}</h5>
    <p class="hl__description">
      {{ description }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'HighLightCard',
  props: {
    title: String,
    description: String
  }
}
</script>
<style lang="scss">
@import '../assets/globals.scss';
.hl {
  flex: 1 1 100%;
  margin-bottom: 1.3em;
  padding: 16px;
  min-height: 250px;
  @media (min-width: 768px) {
    max-width: 268px;
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
  @include fontBold;
  color: $black;
  font-size: 1.3em;
  text-align: center;
}
.hl__description {
  text-align: center;
}
</style>
