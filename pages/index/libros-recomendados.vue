<template>
  <section class="recommendations">
    <h2 class="recommendations__title">
      Y aquí os recomiento...
    </h2>
    <p class="recommendations__p--strong">
      algunos de los libros que yo he leido y me parecen imprescindibles para
      mejorar como desarollador.
    </p>
    <div class="recommendations__book-list">
      <bookComponent
        v-for="(book, i) in books"
        :key="i"
        :title="book.title"
        :description="book.description"
        :urlImg="book.bookImage.url"
        :author="book.autor"
        :language="book.idioma"
      />
    </div>
  </section>
</template>
<script>
import { createClient } from '~/plugins/contentful.js';
import helper from '~/helpers/functionHelpers.js';
import BookComponent from '~/components/Book-component';
const client = createClient();
export default {
  name: 'Recommendations',
  components: {
    BookComponent
  },
  asyncData({ env }) {
    return client
      .getEntries({
        content_type: 'book'
      })
      .then((books) => {
        // return data that should be available
        // in the template
        // console.log(books.items);
        return {
          books: helper.mapBookResponseToObjet(books.items)
        };
      })
      .catch(console.error);
  }
};
</script>
<style lang="scss">
@import '@/assets/globals.scss';
.recommendations {
  .recommendations__title {
    margin-bottom: 8px;
  }
  .recommendations__p--strong {
    @include fontBold();
    padding-left: 1.1rem;
    margin-bottom: 40px;
  }
  .recommendations__book-list {
    max-width: 1000px;
    margin: 0 auto;
  }
}
</style>
