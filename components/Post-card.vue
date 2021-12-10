<template>
  <div class="post-card">
    <header>
      <h2>{{ title }}</h2>
      <small>{{ date }}</small>
    </header>
    <img :src="image" alt="Post main image" />
    <p>{{ description }}</p>
    <footer class="post-card__footer">
      <nuxt-link :to="url">Leer más</nuxt-link>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'PostCard',
  props: {
    title: String,
    url: String,
    image: String,
    date: String,
    description: String,
  },
};
</script>
<style lang="scss">
@use '../assets/settings/variables';
.post-card {
  width: 100%;
  background: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  /*  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  } */
  header {
    padding: 8px 1rem;
  }
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  h2 {
    width: 100%;
    font-size: 1.6rem;
    line-height: 1.35;
  }
  p {
    padding: 1rem;
  }
  &__footer {
    padding: 0 1rem;
  }
}
</style>
