<template>
  <section>
    <div class="container">
      <HcodeSectionNewsIndividual
        v-for="nv in news"
        :key="nv.id"
        :img-name="nv.img"
        :img-info="nv.imgDesc"
        :news-data="nv.date"
      >
        <template #title>
          <h2>{{ nv.titulo }}</h2>
        </template>
        <p>{{ nv.conteudo | truncate(200) }}</p>
      </HcodeSectionNewsIndividual>
    </div>
  </section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual';
import { mapGetters } from 'vuex';

export default {
  components: {
    HcodeSectionNewsIndividual,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      news: 'getNews',
    }),
  },
};
</script>

<style scoped>
section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: orange;
}
</style>
