<template>
  <section class="article">
    <div class="article__topbar">
      <nuxt-link to="/blog">
        <Icon icon="fluent:arrow-step-back-16-regular" /> Volver
      </nuxt-link>
    </div>
    <article>
      <img :src="'/' + post.image" alt="Imagen principal del post" />
      <h1>
        {{ post.title }}
      </h1>
      <nuxt-content :document="post" class="article__content" />
    </article>
  </section>
</template>
<script>
import { Icon } from '@iconify/vue2';

export default {
  components: {
    Icon,
  },
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
<style lang="scss">
@use '../../../assets/tools/mixins';

.article {
  max-width: 850px;
  margin: 0 auto;
  &__topbar {
    padding: 12px 0 32px 0;
    a {
      display: block;
      @include mixins.fontBlack;
      text-decoration: none;
      line-height: 1.1rem;
    }
  }
  &__content {
    p {
      margin: 0 auto;
      margin-bottom: 32px;
      font-size: 18px;
      line-height: 28px;
      word-break: break-word;
    }
  }
  h1 {
    font-size: 2.1rem;
    margin-bottom: 16px;
  }
}
</style>
