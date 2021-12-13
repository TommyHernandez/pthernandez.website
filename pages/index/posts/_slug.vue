<template>
  <section class="article">
    <div class="article__topbar">
      <nuxt-link to="/blog"> Volver </nuxt-link>
    </div>
    <article>
      <h1>
        {{ post.title }}
      </h1>
      <nuxt-content :document="post" class="article__content" />
    </article>
  </section>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    const post = await $content(`posts/${params.slug}`)
      .fetch()
      .catch((err) => {
        throw err;
      });

    return {
      post,
    };
  },
};
</script>
<style lang="scss" scoped>
.article {
  &__content {
    max-width: 850px;
    margin: 0 auto;
    p {
      margin-bottom: 12px;
    }
  }
}
</style>
