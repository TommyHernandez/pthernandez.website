<template>
  <section class="post-list">
    <ul class="list-disc list-inside mb-4">
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="post.path" class="underline">{{
          post.title
        }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    const posts = await $content('posts')
      .only(['title', 'path'])
      .limit(5)
      .sortBy('title')
      .where({
        published: true,
      })
      .fetch()
      .catch((err) => {
        throw err;
      });

    return {
      posts,
    };
  },
};
</script>
<style lang="scss" scoped>
h1 {
  color: #00bbcc;
}
</style>
