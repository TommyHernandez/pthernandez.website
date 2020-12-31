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
};
</script>
<style lang="scss">
@use '../assets/settings/variables';
@use '../assets/tools/mixins';
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

  &__icon-rounded {
    margin: 0 auto 24px auto;
    font-size: 40pt;
    color: variables.$text-white;
    background: variables.$baseOrange;
    border-radius: 57px;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  &__title {
    @include mixins.fontBold;
    color: variables.$text-black;
    font-size: 1.3em;
    text-align: center;
  }
  &__description {
    text-align: center;
  }
}
</style>
