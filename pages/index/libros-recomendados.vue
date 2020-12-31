<template>
  <section class="recommendations">
    <h2 class="recommendations__title">
      Y aquí os recomiento...
    </h2>
    <p class="recommendations__paragraph recommendations__paragraph--strong">
      algunos de los libros que yo he leido y me parecen imprescindibles para
      mejorar como desarollador.
    </p>
    <div class="recommendations__book-list">
      <bookComponent
        v-for="(book, i) in books"
        :key="i"
        :title="book.title"
        :description="book.description"
        :url-img="book.bookImage.url"
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
        return {
          books: helper.mapBookResponseToObjet(books.items)
        };
      })
      .catch(console.error);
  }
};
</script>
<style lang="scss">
@use '../../assets/tools/mixins';
.recommendations {
  &__title {
    margin-bottom: 8px;
  }
  &__paragraph {
    padding-left: 1.1rem;
    margin-bottom: 40px;
  }
  &__paragraph--strong {
    @include mixins.fontBold();
  }
  &__book-list {
    margin: 0 auto;
    @media (min-width: 1024px) {
      max-width: 75%;
    }
    @media (min-width: 1333px) {
      max-width: 900px;
    }
    @media (min-width: 1880px) {
      max-width: 1000px;
    }
  }
}
</style>
