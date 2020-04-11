<template>
  <div class="card">
    <div class="img-container">
      <img
        src="data:image/svg+xml,%3Csvg%20width%3D%22344%22%20height%3D%22194%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M-1%200h344v194H-1z%22%2F%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate(1)%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cmask%20id%3D%22b%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23BDBDBD%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%3Cg%20mask%3D%22url(%23b)%22%3E%3Cpath%20d%3D%22M173.65%2069.238L198.138%2027%20248%20112.878h-49.3c.008.348.011.697.011%201.046%200%2028.915-23.44%2052.356-52.355%2052.356C117.44%20166.28%2094%20142.84%2094%20113.924c0-28.915%2023.44-52.355%2052.356-52.355%2010%200%2019.347%202.804%2027.294%207.669zm0%200l-25.3%2043.64h50.35c-.361-18.478-10.296-34.61-25.05-43.64z%22%20fill%3D%22%23757575%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        alt=""
      />
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
      background: #cc6633;
      color: #fff;
      &:after {
        content: '';
        display: block;
        height: 6px;
        position: absolute;
        background: #802c01;
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
