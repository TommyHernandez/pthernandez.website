<template>
  <div class="book-element">
    <figure>
      <div class="skew-wrap">
        <span class="skew">
          <h3>{{ title }}</h3>
        </span>
      </div>
      <img :src="urlImg" :alt="title" />
    </figure>
    <div class="book-element__content">
      <div class="book-element__info-bar">
        <span class="book-element__author"
          >Autor: <strong>{{ author }}</strong></span
        >
        <span class="book-element__language"
          >Idioma: <strong>{{ language }}</strong></span
        >
      </div>
      <p class="book-element__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BookComponent',
  props: {
    title: String,
    description: String,
    urlImg: String,
    author: String,
    language: String
  }
};
</script>
<style lang="scss">
@import '@/assets/globals.scss';
.book-element {
  margin-bottom: 1.5rem;
  figure {
    position: relative;
    .skew-wrap {
      filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
      position: absolute;
      top: 0;
      left: 0;
      width: 75%;
    }
    .skew {
      display: block;
      width: 100%;
      padding: 8px 1rem;
      background: $orangeB;
      color: $white;
      clip-path: polygon(0 0, 100% 0, 91% 100%, 0% 100%);
      h3 {
        font-size: 1rem;
        @media (min-width: 1436px) {
          font-size: 1.2rem;
        }
      }
    }
    img {
      display: block;
      height: 320px;
      width: auto;
      margin: 0 auto;
      @media (min-width: 1436px) {
        height: 520px;
      }
    }
  }
  .book-element__info-bar {
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }
  @media (min-width: 1436px) {
    margin-bottom: 2.1rem;
  }
}
</style>
