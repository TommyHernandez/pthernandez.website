<template>
  <div class="card">
    <div class="card__img-container">
      <img :src="urlImg" alt="project cover" />
    </div>
    <div class="card__text-content">
      <div class="card__title">{{ title }}</div>
      <div class="card__subtitle">{{ tech }}</div>
    </div>
    <div class="card__text-content">
      <div class="resume">
        {{ description }}
      </div>
    </div>
    <div class="card__actions">
      <a v-if="urlDemo" :href="urlDemo" target="_blank" class="btn btn--filled">
        Live Demo
      </a>
      <a
        v-if="urlCode"
        :href="urlCode"
        target="_blank"
        class="btn btn--outline"
      >
        Ver el código</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: String,
    tech: String,
    description: String,
    urlDemo: String,
    urlCode: String,
    urlImg: String
  }
};
</script>
<style lang="scss">
@use '../assets/settings/variables';
@use '../assets/tools/mixins';
.card {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: none;
  background: variables.$background-white;
}
.card__img-container {
  object-fit: cover;
}
.card__title {
  @include mixins.fontBold;
  font-size: 1.1em;
  color: variables.$text-black;
}
.card__subtitle {
  @include mixins.fontLight;
  font-size: 0.9rem;
  color: variables.$text-black;
}
.card__text-content {
  padding: 16px 16px 0 16px;
}
.resume {
  font-size: 0.9rem;
  text-align: justify;
  min-height: 120px;
}
.card__actions {
  min-height: 52px;
  padding: 16px 16px 8px 16px;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    text-align: center;
    &.btn {
      display: inline-block;
      position: relative;
      height: 38px;
      line-height: 38px;
      padding: 0 8px;
      width: 150px;
      color: variables.$text-white;
      &:after {
        content: '';
        display: block;
        height: 6px;
        position: absolute;
        background: variables.$baseOrange;
        bottom: 0px;
        left: 0px;
        width: 100%;
        transform-origin: bottom right;
        transform: scaleX(0);
        transition: transform 0.5s ease;
      }
      &:hover {
        &:after {
          transform-origin: bottom left;
          transform: scaleX(1);
        }
      }
      &.btn--filled {
        background: variables.$orangeB;
      }
      &.btn--outline {
        border: 2px solid variables.$orangeB;
        color: variables.$text-black;
        line-height: 34px;
      }
    }
  }
}
</style>
