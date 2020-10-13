<template>
  <div class="network-card">
    <a :href="url" rel="nofollow noopener noreferrer" target="_blank">
      <slot></slot>
    </a>
  </div>
</template>
<script>
export default {
  name: 'NetworkCard',
  props: {
    url: String
  }
};
</script>
<style lang="scss">
@import '@/assets/globals.scss';
.network-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 100%;
  height: 250px;
  background: url('../src/assets/code.jpg') center center no-repeat;
  border-radius: 8px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .material-design-icon__svg {
    color: $white;
    transform: scale(5.5);
  }
  &:hover {
    .material-design-icon__svg {
      color: $orangeA;
    }
  }
  &:nth-child(even) {
    margin: 1.1rem 0;
    @media (min-width: 568px) {
      margin: 0 1.1rem;
    }
  }
  @media (min-width: 568px) {
    flex: 1 1 33%;
  }
}
</style>
