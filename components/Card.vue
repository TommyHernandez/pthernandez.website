<template>
  <div class="card">
    <div class="img-container">
      <img :src="urlImg" alt="project cover" />
    </div>
    <div class="text-content">
      <div class="card-title">{{ title }}</div>
      <div class="card-subtitle">{{ tech }}</div>
    </div>
    <div class="text-content">
      <div class="resume">
        {{ description }}
      </div>
    </div>
    <div class="card-actions">
      <a v-if="urlDemo" :href="urlDemo" target="_blank" class="btn">
        Live Demo
      </a>
      <a v-if="urlCode" :href="urlCode" target="_blank" class="btn">
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
}
</script>
<style lang="scss">
@import '@/assets/globals.scss';
.card {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: none;
}
.img-container {
  object-fit: cover;
}
.card-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  color: #0f0f0f;
}
.card-subtitle {
  font-size: 0.9rem;
}
.text-content {
  padding: 16px 16px 0 16px;
}
.resume {
  font-size: 0.9rem;
  text-align: justify;
  min-height: 120px;
}
.card-actions {
  min-height: 52px;
  padding: 16px 16px 8px 16px;
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
      background: $orangeA;
      color: $white;
      &:after {
        content: '';
        display: block;
        height: 6px;
        position: absolute;
        background: $orangeB;
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
    }
  }
}
</style>
