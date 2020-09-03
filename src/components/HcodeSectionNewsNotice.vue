<template>
  <section class="section-news">
    <div class="container">
      <div class="row div-news">
        <div class="col-6">
          <img
            :src="require(`../assets/${notice.img}`)"
            :alt="notice.imgInfo"
          />
        </div>
        <div class="col-6">
          <h2>{{ notice.titulo }}</h2>
          <p>
            {{ notice.conteudo }}
            <span>{{ formatDate(notice.date) }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UtilsMixins from './../mixins/UtilsMixins';

export default {
  computed: {
    notice() {
      return this.$store.getters.getNewsFromId(this.$route.params.id);
    },
  },
  mixins: [UtilsMixins],
  beforeRouteEnter: (to, from, next) => {
    console.log(to);
    let params = to.params;

    if (!parseInt(params.id) > 0) {
      next('/');
    }
    next();
  },
};
</script>

<style scoped>
h2 {
  cursor: auto;
  color: #000;
}
</style>
