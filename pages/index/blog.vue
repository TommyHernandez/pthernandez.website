<template>
  <section class="post-list">
    <PostCard
      v-for="(post, index) in posts"
      :key="index"
      :title="post.title"
      :url="post.path"
      :image="post.image"
      :date="post.date"
      :description="post.description" />
  </section>
</template>
<script>
import PostCard from '../../components/Post-card.vue';
export default {
  components: {
    PostCard,
  },
  async asyncData({ $content, params, error }) {
    const posts = await $content('posts')
      .only(['title', 'path', 'date', 'description', 'image'])
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
.post-list {
  display: grid;
  gap: 16px 8px;
  @media (min-width: 628px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(420px, auto);
    grid-auto-columns: minmax(320px, auto);
  }
  @media (min-width: 768px) {
    gap: 16px 24px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
